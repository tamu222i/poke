import fs from 'fs';
import path from 'path';

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  return res.text();
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  return res.json();
}

function parseCsv(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    // Basic CSV parser handling quoted strings with commas
    const row = [];
    let insideQuotes = false;
    let field = '';
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        row.push(field.trim());
        field = '';
      } else {
        field += char;
      }
    }
    row.push(field.trim());
    rows.push(row);
  }
  return { headers, rows };
}

async function main() {
  console.log('Fetching base datasets...');
  const [purukittoData, speciesCsv, speciesNamesCsv, flavorTextCsv, abilitiesCsv, abilityNamesCsv] = await Promise.all([
    fetchJson('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json'),
    fetchText('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_species.csv'),
    fetchText('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_species_names.csv'),
    fetchText('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_species_flavor_text.csv'),
    fetchText('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/abilities.csv'),
    fetchText('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/ability_names.csv'),
  ]);

  console.log('Parsing species meta...');
  const parsedSpecies = parseCsv(speciesCsv);
  // header: id,identifier,generation_id,...,is_legendary,is_mythical
  const speciesMetaMap = new Map();
  for (const r of parsedSpecies.rows) {
    const id = parseInt(r[0], 10);
    const generation_id = parseInt(r[2], 10);
    const is_legendary = r[16] === '1';
    const is_mythical = r[17] === '1';
    speciesMetaMap.set(id, { generation_id, is_legendary, is_mythical });
  }

  console.log('Parsing species names and categories (genera)...');
  const parsedNames = parseCsv(speciesNamesCsv);
  // pokemon_species_id,local_language_id,name,genus
  const namesMap = new Map();
  for (const r of parsedNames.rows) {
    const id = parseInt(r[0], 10);
    const lang = parseInt(r[1], 10);
    const name = r[2];
    const genus = r[3] || '';
    if (!namesMap.has(id)) {
      namesMap.set(id, {});
    }
    const entry = namesMap.get(id);
    if (lang === 1) {
      entry.ja = name;
      entry.genus = genus;
    } else if (lang === 2) {
      entry.romaji = name;
    } else if (lang === 9) {
      entry.en = name;
    }
  }

  console.log('Parsing abilities names...');
  const parsedAbilities = parseCsv(abilitiesCsv);
  // id,identifier,generation_id,is_main_series
  const abilityIdToIdentifier = new Map();
  for (const r of parsedAbilities.rows) {
    abilityIdToIdentifier.set(parseInt(r[0], 10), r[1]);
  }

  const parsedAbilityNames = parseCsv(abilityNamesCsv);
  // ability_id,local_language_id,name
  const abilityNamesJa = new Map();
  for (const r of parsedAbilityNames.rows) {
    const aId = parseInt(r[0], 10);
    const lang = parseInt(r[1], 10);
    const name = r[2];
    if (lang === 1) {
      const identifier = abilityIdToIdentifier.get(aId);
      if (identifier) {
        abilityNamesJa.set(identifier.toLowerCase().replace(/-/g, ''), name);
        abilityNamesJa.set(identifier.toLowerCase(), name);
      }
    }
  }

  console.log('Parsing flavor text (Japanese entries)...');
  const parsedFlavor = parseCsv(flavorTextCsv);
  // species_id,version_id,language_id,flavor_text
  const flavorMap = new Map();
  for (const r of parsedFlavor.rows) {
    const sId = parseInt(r[0], 10);
    const lang = parseInt(r[2], 10);
    const text = r[3] || '';
    if (lang === 1) {
      // Clean up text
      const cleanText = text.replace(/\\n|\n|\r|\f/g, ' ').replace(/\s+/g, ' ').trim();
      if (cleanText && (!flavorMap.has(sId) || flavorMap.get(sId).length < cleanText.length)) {
        flavorMap.set(sId, cleanText);
      }
    }
  }

  console.log('Assembling final Pokemon entities for No. 1 to 386...');
  const typeMap = {
    Grass: 'grass',
    Poison: 'poison',
    Fire: 'fire',
    Flying: 'flying',
    Water: 'water',
    Bug: 'bug',
    Normal: 'normal',
    Electric: 'electric',
    Ground: 'ground',
    Fairy: 'fairy',
    Fighting: 'fighting',
    Psychic: 'psychic',
    Rock: 'rock',
    Steel: 'steel',
    Ice: 'ice',
    Ghost: 'ghost',
    Dragon: 'dragon',
    Dark: 'dark',
  };

  const fullDataset = [];
  const purukittoMap = new Map();
  for (const p of purukittoData) {
    purukittoMap.set(p.id, p);
  }

  // We generate up to 386 (Gen 1-3 complete)
  for (let id = 1; id <= 386; id++) {
    const p = purukittoMap.get(id);
    if (!p) {
      console.warn(`Missing Purukitto data for id: ${id}`);
      continue;
    }

    const meta = speciesMetaMap.get(id) || {
      generation_id: id <= 151 ? 1 : id <= 251 ? 2 : 3,
      is_legendary: false,
      is_mythical: false,
    };

    const nameMeta = namesMap.get(id) || {};
    const jaName = nameMeta.ja || p.name?.japanese || p.name?.english || `ポケモン#${id}`;
    const enName = nameMeta.en || p.name?.english || `Pokemon #${id}`;
    const romajiName = nameMeta.romaji || p.name?.english || enName;
    const category = nameMeta.genus || p.species || 'ポケモン';

    const types = (p.type || []).map(t => typeMap[t] || t.toLowerCase()).slice(0, 2);
    if (types.length === 0) types.push('normal');

    const heightM = parseFloat((p.profile?.height || '0.5 m').replace(/[^0-9.]/g, '')) || 0.5;
    const weightKg = parseFloat((p.profile?.weight || '5.0 kg').replace(/[^0-9.]/g, '')) || 5.0;

    // Abilities
    const rawAbilities = p.profile?.ability || [];
    const abilities = rawAbilities.map(([abName, isHiddenStr]) => {
      const isHidden = isHiddenStr === 'true';
      const cleanKey = abName.toLowerCase().replace(/[^a-z0-9]/g, '');
      const jaAbName = abilityNamesJa.get(cleanKey) || abName;
      return {
        name: jaAbName,
        isHidden,
        description: isHidden ? '隠れ特性。バトルで特別な効果を発揮する。' : '通常特性。',
      };
    });

    if (abilities.length === 0) {
      abilities.push({ name: 'プレッシャー', isHidden: false, description: '相手に威圧感を与える。' });
    }

    const baseStats = {
      hp: Math.min(255, Math.max(1, p.base?.HP || 50)),
      attack: Math.min(255, Math.max(1, p.base?.Attack || 50)),
      defense: Math.min(255, Math.max(1, p.base?.Defense || 50)),
      specialAttack: Math.min(255, Math.max(1, p.base?.['Sp. Attack'] || 50)),
      specialDefense: Math.min(255, Math.max(1, p.base?.['Sp. Defense'] || 50)),
      speed: Math.min(255, Math.max(1, p.base?.Speed || 50)),
    };

    const flavor = flavorMap.get(id) || `${jaName}は、${category}に分類されるポケモン。`;

    // Evolution chain nodes if available
    const evolutionChain = [];
    // If has next evolutions or current, build simple chain
    evolutionChain.push({
      pokemonId: id,
      name: jaName,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });

    if (p.evolution?.next && Array.isArray(p.evolution.next)) {
      for (const [nextIdStr, condition] of p.evolution.next) {
        const nId = parseInt(nextIdStr, 10);
        const nextMeta = namesMap.get(nId);
        const nextJa = nextMeta?.ja || `No.${nId}`;
        evolutionChain.push({
          pokemonId: nId,
          name: nextJa,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nId}.png`,
          condition: condition || undefined,
        });
      }
    }

    // Legendary check overrides
    let isLegendary = meta.is_legendary;
    let isMythical = meta.is_mythical;
    // Explicit known legendaries / mythicals for Gen 1-3
    const gen1Legendary = [144, 145, 146, 150];
    const gen1Mythical = [151];
    const gen2Legendary = [243, 244, 245, 249, 250];
    const gen2Mythical = [251];
    const gen3Legendary = [377, 378, 379, 380, 381, 382, 383, 384];
    const gen3Mythical = [385, 386];

    if (gen1Legendary.includes(id) || gen2Legendary.includes(id) || gen3Legendary.includes(id)) {
      isLegendary = true;
    }
    if (gen1Mythical.includes(id) || gen2Mythical.includes(id) || gen3Mythical.includes(id)) {
      isMythical = true;
    }

    fullDataset.push({
      id,
      pokedexNumber: id,
      name: {
        ja: jaName,
        en: enName,
        kana: jaName,
        romaji: romajiName,
      },
      generation: meta.generation_id || (id <= 151 ? 1 : id <= 251 ? 2 : 3),
      types,
      category,
      height: heightM,
      weight: weightKg,
      abilities,
      baseStats,
      flavorText: flavor,
      sprites: {
        artwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        shinyArtwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
        pixel: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      },
      cryUrl: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`,
      isLegendary,
      isMythical,
      evolutionChain,
    });
  }

  console.log(`Generated ${fullDataset.length} Pokemon! Writing to src/infrastructure/data/pokemon-dataset.ts...`);

  const fileContent = `import { PokemonData } from '../../domain/schemas/pokemon.schema';

export const MOCK_POKEMON_DATASET: PokemonData[] = ${JSON.stringify(fullDataset, null, 2)};
`;

  fs.writeFileSync(path.resolve('./src/infrastructure/data/pokemon-dataset.ts'), fileContent, 'utf-8');
  console.log('Successfully written pokemon-dataset.ts!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

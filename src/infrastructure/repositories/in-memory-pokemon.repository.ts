import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { IPokemonRepository, PokemonFilterCriteria } from '../../domain/repositories/pokemon.repository';
import { PokemonData, PokemonType, POKEMON_TYPES } from '../../domain/schemas/pokemon.schema';

export class InMemoryPokemonRepository implements IPokemonRepository {
  private entities: PokemonEntity[];

  constructor(dataset: PokemonData[]) {
    this.entities = dataset.map((data) => new PokemonEntity(data));
  }

  async findById(id: number): Promise<PokemonEntity | null> {
    const found = this.entities.find((p) => p.id === id);
    return found ? found : null;
  }

  async findByNumber(number: number): Promise<PokemonEntity | null> {
    const found = this.entities.find((p) => p.pokedexNumber === number);
    return found ? found : null;
  }

  async getAll(): Promise<PokemonEntity[]> {
    return [...this.entities];
  }

  async getGenerations(): Promise<number[]> {
    const gens = new Set(this.entities.map((p) => p.generation));
    return Array.from(gens).sort((a, b) => a - b);
  }

  async getTypes(): Promise<PokemonType[]> {
    return [...POKEMON_TYPES];
  }

  async search(criteria: PokemonFilterCriteria): Promise<PokemonEntity[]> {
    let result = [...this.entities];

    // Filter by favorites
    if (criteria.onlyFavorites && criteria.favoriteIds) {
      const favSet = new Set(criteria.favoriteIds);
      result = result.filter((p) => favSet.has(p.id));
    }

    // Filter by Generation
    if (criteria.generation !== undefined) {
      result = result.filter((p) => p.generation === criteria.generation);
    }

    // Filter by Type
    if (criteria.type) {
      result = result.filter((p) => p.hasType(criteria.type!));
    }

    // Filter by Legendary
    if (criteria.isLegendaryOnly) {
      result = result.filter((p) => p.isLegendary || p.isMythical);
    }

    // Filter by minimum total stats
    if (criteria.minTotalStats !== undefined) {
      result = result.filter((p) => p.stats.total >= criteria.minTotalStats!);
    }

    // Filter by search query (Japanese name, English name, Katakana, Romaji, or ID)
    if (criteria.searchQuery && criteria.searchQuery.trim()) {
      const q = criteria.searchQuery.trim().toLowerCase();
      result = result.filter((p) => {
        const idStr = p.pokedexNumber.toString();
        const ja = p.name.ja.toLowerCase();
        const en = p.name.en.toLowerCase();
        const kana = p.name.kana.toLowerCase();
        const romaji = p.name.romaji.toLowerCase();
        const category = p.category.toLowerCase();

        return (
          idStr.includes(q) ||
          ja.includes(q) ||
          en.includes(q) ||
          kana.includes(q) ||
          romaji.includes(q) ||
          category.includes(q)
        );
      });
    }

    // Sorting
    const sort = criteria.sortBy || 'number_asc';
    switch (sort) {
      case 'number_asc':
        result.sort((a, b) => a.pokedexNumber - b.pokedexNumber);
        break;
      case 'number_desc':
        result.sort((a, b) => b.pokedexNumber - a.pokedexNumber);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.ja.localeCompare(b.name.ja, 'ja'));
        break;
      case 'total_stats_desc':
        result.sort((a, b) => b.stats.total - a.stats.total);
        break;
      case 'hp_desc':
        result.sort((a, b) => b.stats.hp - a.stats.hp);
        break;
      case 'attack_desc':
        result.sort((a, b) => b.stats.attack - a.stats.attack);
        break;
      case 'speed_desc':
        result.sort((a, b) => b.stats.speed - a.stats.speed);
        break;
    }

    return result;
  }
}

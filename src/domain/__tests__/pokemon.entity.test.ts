import { describe, it, expect } from 'vitest';
import { PokemonEntity } from '../entities/pokemon.entity';
import type { PokemonType } from '../schemas/pokemon.schema';

describe('Feature: Pokemon Entity domain logic (BDD Scenario)', () => {
  const pikachuData = {
    id: 25,
    pokedexNumber: 25,
    name: {
      ja: 'ピカチュウ',
      en: 'Pikachu',
      kana: 'ピカチュウ',
      romaji: 'Pikachu',
    },
    generation: 1,
    types: ['electric'] as PokemonType[],
    category: 'ねずみポケモン',
    height: 0.4, // m
    weight: 6.0, // kg
    abilities: [
      { name: 'せいでんき', isHidden: false, description: '接触攻撃を受けると30%の確率で相手をまひ状態にする。' },
      { name: 'ひらいしん', isHidden: true, description: 'でんきタイプの技を自身に引き寄せ、特攻を1段階上げる。' },
    ],
    baseStats: {
      hp: 35,
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
    flavorText: 'ほっぺたの りょうがわに ちいさい でんきぶくろを もつ。ピンチのときに ほうでんする。',
    sprites: {
      artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      shinyArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',
      pixel: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    cryUrl: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg',
    isLegendary: false,
    isMythical: false,
  };

  it('Given Pikachu data, When initialized into PokemonEntity, Then formatted pokedex number is "#0025"', () => {
    const pokemon = new PokemonEntity(pikachuData);
    expect(pokemon.formattedNumber).toBe('#0025');
  });

  it('Given Pikachu entity, When checking primary type, Then it is electric', () => {
    const pokemon = new PokemonEntity(pikachuData);
    expect(pokemon.primaryType).toBe('electric');
    expect(pokemon.hasType('electric')).toBe(true);
    expect(pokemon.hasType('water')).toBe(false);
  });

  it('Given Pikachu entity, When calculating weaknesses, Then Ground is a 2.0x weakness', () => {
    const pokemon = new PokemonEntity(pikachuData);
    const weaknesses = pokemon.getWeaknesses();
    expect(weaknesses.find(w => w.type === 'ground')?.multiplier).toBe(2.0);
  });
});

import { describe, it, expect } from 'vitest';
import { MOCK_POKEMON_DATASET } from '../data/pokemon-dataset';
import { PokemonDataSchema } from '../../domain/schemas/pokemon.schema';

describe('Feature: Pokemon Massive Dataset (300+ Pokemon)', () => {
  it('Scenario: Dataset must contain around 300 or more Pokemon across Gen 1 to Gen 3', () => {
    // Given the pokemon dataset
    const count = MOCK_POKEMON_DATASET.length;

    // Then it should have at least 300 pokemon entries
    expect(count).toBeGreaterThanOrEqual(300);
  });

  it('Scenario: Every Pokemon entry in dataset strictly satisfies Zod Schema validation', () => {
    // Given the dataset
    expect(MOCK_POKEMON_DATASET.length).toBeGreaterThan(0);

    // When validated against PokemonDataSchema
    MOCK_POKEMON_DATASET.forEach((entry) => {
      const parsed = PokemonDataSchema.safeParse(entry);
      if (!parsed.success) {
        console.error(`Validation failed for ID ${entry.id} (${entry.name?.ja}):`, parsed.error.format());
      }
      expect(parsed.success).toBe(true);
    });
  });

  it('Scenario: Gen 1, Gen 2, and Gen 3 generations are all adequately populated', () => {
    const gen1 = MOCK_POKEMON_DATASET.filter((p) => p.generation === 1);
    const gen2 = MOCK_POKEMON_DATASET.filter((p) => p.generation === 2);
    const gen3 = MOCK_POKEMON_DATASET.filter((p) => p.generation === 3);

    // Gen 1 has 151 Pokemon
    expect(gen1.length).toBeGreaterThanOrEqual(150);
    // Gen 2 has 100 Pokemon
    expect(gen2.length).toBeGreaterThanOrEqual(99);
    // Gen 3 has at least 50+ Pokemon up to 135
    expect(gen3.length).toBeGreaterThanOrEqual(50);
  });

  it('Scenario: Famous landmark Pokemon are all present and valid', () => {
    const pikachu = MOCK_POKEMON_DATASET.find((p) => p.id === 25);
    const mewtwo = MOCK_POKEMON_DATASET.find((p) => p.id === 150);
    const lugia = MOCK_POKEMON_DATASET.find((p) => p.id === 249);
    const rayquaza = MOCK_POKEMON_DATASET.find((p) => p.id === 384);

    expect(pikachu).toBeDefined();
    expect(pikachu?.name.ja).toBe('ピカチュウ');

    expect(mewtwo).toBeDefined();
    expect(mewtwo?.name.ja).toBe('ミュウツー');

    expect(lugia).toBeDefined();
    expect(lugia?.name.ja).toBe('ルギア');

    expect(rayquaza).toBeDefined();
    expect(rayquaza?.name.ja).toBe('レックウザ');
  });
});

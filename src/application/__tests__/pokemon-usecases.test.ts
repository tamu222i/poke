import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryPokemonRepository } from '../../infrastructure/repositories/in-memory-pokemon.repository';
import { GetPokemonListUseCase } from '../use-cases/get-pokemon-list.usecase';
import { GetPokemonDetailUseCase } from '../use-cases/get-pokemon-detail.usecase';
import { ComparePokemonUseCase } from '../use-cases/compare-pokemon.usecase';
import { MOCK_POKEMON_DATASET } from '../../infrastructure/data/pokemon-dataset';

describe('Feature: Application Use Cases (BDD Scenario)', () => {
  let repository: InMemoryPokemonRepository;
  let getPokemonListUseCase: GetPokemonListUseCase;
  let getPokemonDetailUseCase: GetPokemonDetailUseCase;
  let comparePokemonUseCase: ComparePokemonUseCase;

  beforeEach(() => {
    repository = new InMemoryPokemonRepository(MOCK_POKEMON_DATASET);
    getPokemonListUseCase = new GetPokemonListUseCase(repository);
    getPokemonDetailUseCase = new GetPokemonDetailUseCase(repository);
    comparePokemonUseCase = new ComparePokemonUseCase(repository);
  });

  describe('Scenario: Searching and filtering pokemon list', () => {
    it('Given query "ピカ", When searching pokemon list, Then Pikachu is returned', async () => {
      const result = await getPokemonListUseCase.execute({ searchQuery: 'ピカ' });
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name.ja).toBe('ピカチュウ');
    });

    it('Given filter type "fire" and generation 1, When searching, Then only Gen 1 Fire types are returned', async () => {
      const result = await getPokemonListUseCase.execute({
        generation: 1,
        type: 'fire',
      });
      expect(result.length).toBeGreaterThan(0);
      for (const p of result) {
        expect(p.generation).toBe(1);
        expect(p.hasType('fire')).toBe(true);
      }
    });

    it('Given sort by total stats descending, Then highest total stat pokemon comes first', async () => {
      const result = await getPokemonListUseCase.execute({
        sortBy: 'total_stats_desc',
      });
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].stats.total).toBeGreaterThanOrEqual(result[i + 1].stats.total);
      }
    });
  });

  describe('Scenario: Comparing two pokemon', () => {
    it('Given Charizard (#6) and Blastoise (#9), When comparing, Then calculates stat differences and type advantages', async () => {
      const comparison = await comparePokemonUseCase.execute(6, 9);
      expect(comparison).not.toBeNull();
      expect(comparison?.pokemonA.name.ja).toBe('リザードン');
      expect(comparison?.pokemonB.name.ja).toBe('カメックス');
      // Blastoise (Water) has type advantage against Charizard (Fire/Flying)
      expect(comparison?.advantages.bAgainstA).toBeGreaterThan(1.0);
    });
  });
});

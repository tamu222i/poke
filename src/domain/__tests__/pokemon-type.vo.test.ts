import { describe, it, expect } from 'vitest';
import { PokemonTypeVo, type PokemonType } from '../value-objects/pokemon-type.vo';

describe('Feature: Pokemon Type Effectiveness (BDD Scenario)', () => {
  describe('Scenario: Single type damage multipliers', () => {
    it('Given a pure Water type Pokemon, When attacked by Electric, Then damage multiplier should be 2.0x (Super Effective)', () => {
      const effectiveness = PokemonTypeVo.calculateEffectiveness(['water'], 'electric');
      expect(effectiveness).toBe(2.0);
    });

    it('Given a pure Water type Pokemon, When attacked by Fire, Then damage multiplier should be 0.5x (Not Very Effective)', () => {
      const effectiveness = PokemonTypeVo.calculateEffectiveness(['water'], 'fire');
      expect(effectiveness).toBe(0.5);
    });

    it('Given a pure Normal type Pokemon, When attacked by Ghost, Then damage multiplier should be 0x (Immune)', () => {
      const effectiveness = PokemonTypeVo.calculateEffectiveness(['normal'], 'ghost');
      expect(effectiveness).toBe(0);
    });
  });

  describe('Scenario: Dual type damage multiplier compounding', () => {
    it('Given a Grass/Poison type Pokemon (e.g. Venusaur), When attacked by Psychic, Then multiplier is 2.0x', () => {
      const effectiveness = PokemonTypeVo.calculateEffectiveness(['grass', 'poison'], 'psychic');
      expect(effectiveness).toBe(2.0);
    });

    it('Given a Water/Ground type Pokemon (e.g. Swampert), When attacked by Grass, Then multiplier is 4.0x (Double Super Effective)', () => {
      const effectiveness = PokemonTypeVo.calculateEffectiveness(['water', 'ground'], 'grass');
      expect(effectiveness).toBe(4.0);
    });

    it('Given a Steel/Fairy type Pokemon (e.g. Zacian/Tinkaton), When attacked by Dragon or Poison, Then multiplier is 0x (Immune)', () => {
      expect(PokemonTypeVo.calculateEffectiveness(['steel', 'fairy'], 'dragon')).toBe(0);
      expect(PokemonTypeVo.calculateEffectiveness(['steel', 'fairy'], 'poison')).toBe(0);
    });
  });

  describe('Scenario: Full Weakness/Resistance Map generation', () => {
    it('Given a Fire/Flying type (Charizard), Then weaknesses list should include Rock with 4.0x, Water and Electric with 2.0x', () => {
      const matchupMap = PokemonTypeVo.calculateAllMatchups(['fire', 'flying']);
      expect(matchupMap['rock']).toBe(4.0);
      expect(matchupMap['water']).toBe(2.0);
      expect(matchupMap['electric']).toBe(2.0);
      expect(matchupMap['ground']).toBe(0); // Flying immunity
      expect(matchupMap['grass']).toBe(0.25); // Fire + Flying double resist
    });
  });
});

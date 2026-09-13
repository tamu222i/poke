import { describe, it, expect } from 'vitest';
import { BaseStatsVo } from '../value-objects/base-stats.vo';

describe('Feature: Base Stats calculation and grading (BDD Scenario)', () => {
  it('Given base stats, When calculating total, Then it should sum all 6 parameters', () => {
    const stats = new BaseStatsVo({
      hp: 78,
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    }); // Charizard
    expect(stats.total).toBe(534);
  });

  it('Given base stats, When getting radar chart percentages based on max 255, Then it returns bounded values', () => {
    const stats = new BaseStatsVo({
      hp: 100,
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
    }); // Mew
    const radar = stats.toRadarPercentages();
    expect(radar.hp).toBeCloseTo((100 / 255) * 100, 1);
    expect(radar.speed).toBeCloseTo((100 / 255) * 100, 1);
  });

  it('Given a high total stat, When evaluating tier rank, Then it correctly categorizes S, A, B, C', () => {
    const legend = new BaseStatsVo({ hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 }); // Mewtwo (680)
    expect(legend.getTierRank()).toBe('S');

    const standard = new BaseStatsVo({ hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 }); // Bulbasaur (318)
    expect(standard.getTierRank()).toBe('C');
  });
});

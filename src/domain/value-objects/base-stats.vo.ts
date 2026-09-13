import { BaseStats, BaseStatsSchema } from '../schemas/pokemon.schema';

export class BaseStatsVo {
  readonly hp: number;
  readonly attack: number;
  readonly defense: number;
  readonly specialAttack: number;
  readonly specialDefense: number;
  readonly speed: number;
  readonly total: number;

  constructor(stats: BaseStats) {
    const validated = BaseStatsSchema.parse(stats);
    this.hp = validated.hp;
    this.attack = validated.attack;
    this.defense = validated.defense;
    this.specialAttack = validated.specialAttack;
    this.specialDefense = validated.specialDefense;
    this.speed = validated.speed;
    this.total =
      this.hp +
      this.attack +
      this.defense +
      this.specialAttack +
      this.specialDefense +
      this.speed;
  }

  /**
   * Percentages relative to a practical competitive max (255)
   */
  toRadarPercentages(maxStat: number = 255): Record<keyof BaseStats, number> {
    return {
      hp: Math.min(100, Math.max(0, (this.hp / maxStat) * 100)),
      attack: Math.min(100, Math.max(0, (this.attack / maxStat) * 100)),
      defense: Math.min(100, Math.max(0, (this.defense / maxStat) * 100)),
      specialAttack: Math.min(100, Math.max(0, (this.specialAttack / maxStat) * 100)),
      specialDefense: Math.min(100, Math.max(0, (this.specialDefense / maxStat) * 100)),
      speed: Math.min(100, Math.max(0, (this.speed / maxStat) * 100)),
    };
  }

  getTierRank(): 'S' | 'A' | 'B' | 'C' | 'D' {
    if (this.total >= 600) return 'S'; // Legendary / Pseudo-legendary
    if (this.total >= 500) return 'A'; // Final evolutions / Strong
    if (this.total >= 400) return 'B'; // Mid evolutions / Utility
    if (this.total >= 300) return 'C'; // Starter / Early evolutions (e.g. Bulbasaur 318)
    return 'D';
  }
}

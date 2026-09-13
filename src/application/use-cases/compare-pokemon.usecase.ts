import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { IPokemonRepository } from '../../domain/repositories/pokemon.repository';
import { PokemonTypeVo } from '../../domain/value-objects/pokemon-type.vo';

export interface PokemonComparisonResult {
  pokemonA: PokemonEntity;
  pokemonB: PokemonEntity;
  statDifferences: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    total: number;
  };
  advantages: {
    // Max effectiveness of A's types against B
    aAgainstB: number;
    // Max effectiveness of B's types against A
    bAgainstA: number;
  };
}

export class ComparePokemonUseCase {
  constructor(private readonly pokemonRepository: IPokemonRepository) {}

  async execute(
    pokemonIdA: number,
    pokemonIdB: number
  ): Promise<PokemonComparisonResult | null> {
    const pokemonA =
      (await this.pokemonRepository.findById(pokemonIdA)) ||
      (await this.pokemonRepository.findByNumber(pokemonIdA));
    const pokemonB =
      (await this.pokemonRepository.findById(pokemonIdB)) ||
      (await this.pokemonRepository.findByNumber(pokemonIdB));

    if (!pokemonA || !pokemonB) return null;

    const statDifferences = {
      hp: pokemonA.stats.hp - pokemonB.stats.hp,
      attack: pokemonA.stats.attack - pokemonB.stats.attack,
      defense: pokemonA.stats.defense - pokemonB.stats.defense,
      specialAttack: pokemonA.stats.specialAttack - pokemonB.stats.specialAttack,
      specialDefense: pokemonA.stats.specialDefense - pokemonB.stats.specialDefense,
      speed: pokemonA.stats.speed - pokemonB.stats.speed,
      total: pokemonA.stats.total - pokemonB.stats.total,
    };

    // Calculate maximum STAB type advantage A has against B
    let maxA = 0;
    for (const aType of pokemonA.types) {
      const mult = PokemonTypeVo.calculateEffectiveness(pokemonB.types, aType);
      if (mult > maxA) maxA = mult;
    }

    // Calculate maximum STAB type advantage B has against A
    let maxB = 0;
    for (const bType of pokemonB.types) {
      const mult = PokemonTypeVo.calculateEffectiveness(pokemonA.types, bType);
      if (mult > maxB) maxB = mult;
    }

    return {
      pokemonA,
      pokemonB,
      statDifferences,
      advantages: {
        aAgainstB: maxA,
        bAgainstA: maxB,
      },
    };
  }
}

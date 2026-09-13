import {
  PokemonData,
  PokemonDataSchema,
  PokemonType,
  PokemonName,
  Ability,
  EvolutionNode,
  PokemonSprites,
} from '../schemas/pokemon.schema';
import { BaseStatsVo } from '../value-objects/base-stats.vo';
import { PokemonTypeVo } from '../value-objects/pokemon-type.vo';

export class PokemonEntity {
  readonly id: number;
  readonly pokedexNumber: number;
  readonly name: PokemonName;
  readonly generation: number;
  readonly types: readonly PokemonType[];
  readonly category: string;
  readonly height: number;
  readonly weight: number;
  readonly abilities: readonly Ability[];
  readonly stats: BaseStatsVo;
  readonly flavorText: string;
  readonly sprites: PokemonSprites;
  readonly cryUrl: string;
  readonly isLegendary: boolean;
  readonly isMythical: boolean;
  readonly evolutionChain?: readonly EvolutionNode[];

  constructor(data: PokemonData) {
    const validated = PokemonDataSchema.parse(data);
    this.id = validated.id;
    this.pokedexNumber = validated.pokedexNumber;
    this.name = validated.name;
    this.generation = validated.generation;
    this.types = Object.freeze([...validated.types]);
    this.category = validated.category;
    this.height = validated.height;
    this.weight = validated.weight;
    this.abilities = Object.freeze([...validated.abilities]);
    this.stats = new BaseStatsVo(validated.baseStats);
    this.flavorText = validated.flavorText;
    this.sprites = validated.sprites;
    this.cryUrl = validated.cryUrl;
    this.isLegendary = validated.isLegendary ?? false;
    this.isMythical = validated.isMythical ?? false;
    this.evolutionChain = validated.evolutionChain
      ? Object.freeze([...validated.evolutionChain])
      : undefined;
  }

  get formattedNumber(): string {
    return `#${this.pokedexNumber.toString().padStart(4, '0')}`;
  }

  get primaryType(): PokemonType {
    return this.types[0];
  }

  get secondaryType(): PokemonType | null {
    return this.types[1] ?? null;
  }

  hasType(type: PokemonType): boolean {
    return this.types.includes(type);
  }

  /**
   * Calculate all weaknesses (damage multiplier > 1)
   */
  getWeaknesses(): { type: PokemonType; multiplier: number }[] {
    const matchups = PokemonTypeVo.calculateAllMatchups(this.types);
    return Object.entries(matchups)
      .filter(([_, multiplier]) => multiplier > 1.0)
      .map(([type, multiplier]) => ({
        type: type as PokemonType,
        multiplier,
      }))
      .sort((a, b) => b.multiplier - a.multiplier);
  }

  /**
   * Calculate all resistances and immunities (damage multiplier < 1)
   */
  getResistances(): { type: PokemonType; multiplier: number }[] {
    const matchups = PokemonTypeVo.calculateAllMatchups(this.types);
    return Object.entries(matchups)
      .filter(([_, multiplier]) => multiplier < 1.0)
      .map(([type, multiplier]) => ({
        type: type as PokemonType,
        multiplier,
      }))
      .sort((a, b) => a.multiplier - b.multiplier);
  }

  /**
   * Raw matchup multipliers for all 18 types
   */
  getAllMatchups(): Record<PokemonType, number> {
    return PokemonTypeVo.calculateAllMatchups(this.types);
  }

  /**
   * Convert entity to plain JSON representation
   */
  toJSON(): PokemonData {
    return {
      id: this.id,
      pokedexNumber: this.pokedexNumber,
      name: { ...this.name },
      generation: this.generation,
      types: [...this.types],
      category: this.category,
      height: this.height,
      weight: this.weight,
      abilities: [...this.abilities],
      baseStats: {
        hp: this.stats.hp,
        attack: this.stats.attack,
        defense: this.stats.defense,
        specialAttack: this.stats.specialAttack,
        specialDefense: this.stats.specialDefense,
        speed: this.stats.speed,
      },
      flavorText: this.flavorText,
      sprites: { ...this.sprites },
      cryUrl: this.cryUrl,
      isLegendary: this.isLegendary,
      isMythical: this.isMythical,
      evolutionChain: this.evolutionChain ? [...this.evolutionChain] : undefined,
    };
  }
}

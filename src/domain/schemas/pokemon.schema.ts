import { z } from 'zod';

export const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const;

export const PokemonTypeSchema = z.enum(POKEMON_TYPES);
export type PokemonType = z.infer<typeof PokemonTypeSchema>;

export const PokemonNameSchema = z.object({
  ja: z.string().min(1),
  en: z.string().min(1),
  kana: z.string().min(1),
  romaji: z.string().min(1),
});
export type PokemonName = z.infer<typeof PokemonNameSchema>;

export const BaseStatsSchema = z.object({
  hp: z.number().int().min(1).max(255),
  attack: z.number().int().min(1).max(255),
  defense: z.number().int().min(1).max(255),
  specialAttack: z.number().int().min(1).max(255),
  specialDefense: z.number().int().min(1).max(255),
  speed: z.number().int().min(1).max(255),
});
export type BaseStats = z.infer<typeof BaseStatsSchema>;

export const AbilitySchema = z.object({
  name: z.string(),
  isHidden: z.boolean().default(false),
  description: z.string(),
});
export type Ability = z.infer<typeof AbilitySchema>;

export const EvolutionNodeSchema = z.object({
  pokemonId: z.number().int().positive(),
  name: z.string(),
  sprite: z.string().url(),
  condition: z.string().optional(),
});
export type EvolutionNode = z.infer<typeof EvolutionNodeSchema>;

export const PokemonSpritesSchema = z.object({
  artwork: z.string().url(),
  shinyArtwork: z.string().url(),
  pixel: z.string().url(),
});
export type PokemonSprites = z.infer<typeof PokemonSpritesSchema>;

export const PokemonDataSchema = z.object({
  id: z.number().int().positive(),
  pokedexNumber: z.number().int().positive(),
  name: PokemonNameSchema,
  generation: z.number().int().min(1).max(9),
  types: z.array(PokemonTypeSchema).min(1).max(2),
  category: z.string(),
  height: z.number().positive(), // in meters
  weight: z.number().positive(), // in kg
  abilities: z.array(AbilitySchema),
  baseStats: BaseStatsSchema,
  flavorText: z.string(),
  sprites: PokemonSpritesSchema,
  cryUrl: z.string().url(),
  isLegendary: z.boolean().default(false),
  isMythical: z.boolean().default(false),
  evolutionChain: z.array(EvolutionNodeSchema).optional(),
});
export type PokemonData = z.infer<typeof PokemonDataSchema>;

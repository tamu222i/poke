import { PokemonEntity } from '../entities/pokemon.entity';
import { PokemonType } from '../schemas/pokemon.schema';

export interface PokemonFilterCriteria {
  searchQuery?: string;
  generation?: number;
  type?: PokemonType;
  minTotalStats?: number;
  isLegendaryOnly?: boolean;
  sortBy?: 'number_asc' | 'number_desc' | 'name_asc' | 'total_stats_desc' | 'hp_desc' | 'attack_desc' | 'speed_desc';
  favoriteIds?: number[];
  onlyFavorites?: boolean;
}

export interface IPokemonRepository {
  findById(id: number): Promise<PokemonEntity | null>;
  findByNumber(number: number): Promise<PokemonEntity | null>;
  search(criteria: PokemonFilterCriteria): Promise<PokemonEntity[]>;
  getAll(): Promise<PokemonEntity[]>;
  getGenerations(): Promise<number[]>;
  getTypes(): Promise<PokemonType[]>;
}

import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { IPokemonRepository, PokemonFilterCriteria } from '../../domain/repositories/pokemon.repository';

export class GetPokemonListUseCase {
  constructor(private readonly pokemonRepository: IPokemonRepository) {}

  async execute(criteria: PokemonFilterCriteria = {}): Promise<PokemonEntity[]> {
    return this.pokemonRepository.search(criteria);
  }
}

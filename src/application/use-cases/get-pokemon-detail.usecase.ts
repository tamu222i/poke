import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { IPokemonRepository } from '../../domain/repositories/pokemon.repository';

export class GetPokemonDetailUseCase {
  constructor(private readonly pokemonRepository: IPokemonRepository) {}

  async execute(idOrNumber: number): Promise<PokemonEntity | null> {
    const byId = await this.pokemonRepository.findById(idOrNumber);
    if (byId) return byId;
    return this.pokemonRepository.findByNumber(idOrNumber);
  }
}

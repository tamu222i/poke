import { IFavoriteStorageService } from '../../infrastructure/storage/local-storage-favorite.service';

export class ToggleFavoriteUseCase {
  constructor(private readonly favoriteService: IFavoriteStorageService) {}

  execute(pokemonId: number): boolean {
    return this.favoriteService.toggleFavorite(pokemonId);
  }

  getFavorites(): number[] {
    return this.favoriteService.getFavoriteIds();
  }

  isFavorite(pokemonId: number): boolean {
    return this.favoriteService.isFavorite(pokemonId);
  }
}

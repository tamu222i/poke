export interface IFavoriteStorageService {
  getFavoriteIds(): number[];
  toggleFavorite(pokemonId: number): boolean; // returns new status (true: added, false: removed)
  isFavorite(pokemonId: number): boolean;
}

export class LocalStorageFavoriteService implements IFavoriteStorageService {
  private readonly STORAGE_KEY = 'pokedex_favorite_ids_v1';

  getFavoriteIds(): number[] {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  toggleFavorite(pokemonId: number): boolean {
    const current = this.getFavoriteIds();
    const index = current.indexOf(pokemonId);
    let updated: number[];
    let isNowFav = false;

    if (index >= 0) {
      updated = current.filter((id) => id !== pokemonId);
      isNowFav = false;
    } else {
      updated = [...current, pokemonId];
      isNowFav = true;
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
      }
    } catch {
      // ignore
    }

    return isNowFav;
  }

  isFavorite(pokemonId: number): boolean {
    return this.getFavoriteIds().includes(pokemonId);
  }
}

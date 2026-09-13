import { useState, useEffect, useMemo, useCallback } from 'react';
import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { PokemonFilterCriteria } from '../../domain/repositories/pokemon.repository';
import { PokemonType } from '../../domain/schemas/pokemon.schema';
import { InMemoryPokemonRepository } from '../../infrastructure/repositories/in-memory-pokemon.repository';
import { MOCK_POKEMON_DATASET } from '../../infrastructure/data/pokemon-dataset';
import { GetPokemonListUseCase } from '../../application/use-cases/get-pokemon-list.usecase';
import { GetPokemonDetailUseCase } from '../../application/use-cases/get-pokemon-detail.usecase';
import { ComparePokemonUseCase, PokemonComparisonResult } from '../../application/use-cases/compare-pokemon.usecase';
import { LocalStorageFavoriteService } from '../../infrastructure/storage/local-storage-favorite.service';
import { ToggleFavoriteUseCase } from '../../application/use-cases/toggle-favorite.usecase';
import { PokemonAudioService } from '../utils/audio-player';

export function usePokedex() {
  // Dependency Injection setup (DDD container-like pattern)
  const repository = useMemo(() => new InMemoryPokemonRepository(MOCK_POKEMON_DATASET), []);
  const favoriteService = useMemo(() => new LocalStorageFavoriteService(), []);

  const getListUseCase = useMemo(() => new GetPokemonListUseCase(repository), [repository]);
  const getDetailUseCase = useMemo(() => new GetPokemonDetailUseCase(repository), [repository]);
  const compareUseCase = useMemo(() => new ComparePokemonUseCase(repository), [repository]);
  const toggleFavoriteUseCase = useMemo(() => new ToggleFavoriteUseCase(favoriteService), [favoriteService]);

  // State
  const [pokemonList, setPokemonList] = useState<PokemonEntity[]>([]);
  const [allPokemon, setAllPokemon] = useState<PokemonEntity[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonEntity | null>(null);

  // Comparison State
  const [comparePokemonA, setComparePokemonA] = useState<PokemonEntity | null>(null);
  const [comparePokemonB, setComparePokemonB] = useState<PokemonEntity | null>(null);
  const [comparisonResult, setComparisonResult] = useState<PokemonComparisonResult | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<PokemonType | undefined>(undefined);
  const [selectedGeneration, setSelectedGeneration] = useState<number | undefined>(undefined);
  const [sortBy, setSortBy] = useState<PokemonFilterCriteria['sortBy']>('number_asc');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [isLegendaryOnly, setIsLegendaryOnly] = useState<boolean>(false);

  // Audio playing state
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Initialize
  useEffect(() => {
    setFavoriteIds(toggleFavoriteUseCase.getFavorites());
    repository.getAll().then((all) => setAllPokemon(all));
  }, [repository, toggleFavoriteUseCase]);

  // Query execution
  const fetchList = useCallback(async () => {
    const criteria: PokemonFilterCriteria = {
      searchQuery,
      type: selectedType,
      generation: selectedGeneration,
      sortBy,
      onlyFavorites,
      favoriteIds,
      isLegendaryOnly,
    };
    const list = await getListUseCase.execute(criteria);
    setPokemonList(list);
  }, [
    getListUseCase,
    searchQuery,
    selectedType,
    selectedGeneration,
    sortBy,
    onlyFavorites,
    favoriteIds,
    isLegendaryOnly,
  ]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  // Compare effect
  useEffect(() => {
    if (comparePokemonA && comparePokemonB) {
      compareUseCase.execute(comparePokemonA.id, comparePokemonB.id).then((result) => {
        setComparisonResult(result);
      });
    } else {
      setComparisonResult(null);
    }
  }, [comparePokemonA, comparePokemonB, compareUseCase]);

  // Actions
  const handleToggleFavorite = useCallback(
    (pokemonId: number) => {
      toggleFavoriteUseCase.execute(pokemonId);
      setFavoriteIds(toggleFavoriteUseCase.getFavorites());
    },
    [toggleFavoriteUseCase]
  );

  const handlePlayCry = useCallback(async (pokemon: PokemonEntity) => {
    setPlayingId(pokemon.id);
    try {
      await PokemonAudioService.playCry(pokemon.cryUrl, pokemon.id);
    } finally {
      setTimeout(() => {
        setPlayingId((current) => (current === pokemon.id ? null : current));
      }, 1000);
    }
  }, []);

  const handleSelectPokemon = useCallback(
    async (idOrNumber: number) => {
      const detail = await getDetailUseCase.execute(idOrNumber);
      if (detail) {
        setSelectedPokemon(detail);
      }
    },
    [getDetailUseCase]
  );

  const handleRandomPick = useCallback(async () => {
    if (allPokemon.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allPokemon.length);
    const randomPokemon = allPokemon[randomIndex];
    setSelectedPokemon(randomPokemon);
    handlePlayCry(randomPokemon);
  }, [allPokemon, handlePlayCry]);

  const handleStartCompare = useCallback((pokemon: PokemonEntity) => {
    setComparePokemonA(pokemon);
    // Auto-select another Pokemon for immediate comparison comparison convenience
    const other = allPokemon.find((p) => p.id !== pokemon.id) || null;
    setComparePokemonB(other);
    setIsCompareOpen(true);
  }, [allPokemon]);

  return {
    pokemonList,
    allPokemon,
    favoriteIds,
    selectedPokemon,
    setSelectedPokemon,
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    selectedGeneration,
    setSelectedGeneration,
    sortBy,
    setSortBy,
    onlyFavorites,
    setOnlyFavorites,
    isLegendaryOnly,
    setIsLegendaryOnly,
    playingId,
    handlePlayCry,
    handleToggleFavorite,
    handleSelectPokemon,
    handleRandomPick,
    // Compare
    isCompareOpen,
    setIsCompareOpen,
    comparePokemonA,
    setComparePokemonA,
    comparePokemonB,
    setComparePokemonB,
    comparisonResult,
    handleStartCompare,
  };
}

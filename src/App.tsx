import { useState, useEffect } from 'react';
import { usePokedex } from './presentation/hooks/usePokedex';
import { PokedexHeader } from './presentation/components/PokedexHeader';
import { TypeFilterBar } from './presentation/components/TypeFilterBar';
import { PokemonCard } from './presentation/components/PokemonCard';
import { PokemonDetailModal } from './presentation/components/PokemonDetailModal';
import { PokemonCompareModal } from './presentation/components/PokemonCompareModal';
import { PokedexFooter } from './presentation/components/PokedexFooter';
import { SearchX, ChevronDown, Eye } from 'lucide-react';

const PAGE_SIZE = 48;

export default function App() {
  const {
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
  } = usePokedex();

  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // Reset pagination when filter criteria change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, selectedType, selectedGeneration, sortBy, onlyFavorites, isLegendaryOnly]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType(undefined);
    setSelectedGeneration(undefined);
    setSortBy('number_asc');
    setOnlyFavorites(false);
    setIsLegendaryOnly(false);
    setVisibleCount(PAGE_SIZE);
  };

  const visiblePokemonList = pokemonList.slice(0, visibleCount);
  const remainingCount = pokemonList.length - visibleCount;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* 1. Hardware Pokedex Top Header */}
      <PokedexHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onRandomPick={handleRandomPick}
        onOpenCompare={() => {
          if (allPokemon.length >= 2) {
            setComparePokemonA(allPokemon[0]);
            setComparePokemonB(allPokemon[1]);
            setIsCompareOpen(true);
          }
        }}
        favoriteCount={favoriteIds.length}
        totalPokemonCount={allPokemon.length}
      />

      {/* 2. Type & Generation Filter Bar */}
      <TypeFilterBar
        selectedType={selectedType}
        onSelectType={setSelectedType}
        selectedGeneration={selectedGeneration}
        onSelectGeneration={setSelectedGeneration}
        sortBy={sortBy}
        onSelectSort={setSortBy}
        onlyFavorites={onlyFavorites}
        onToggleOnlyFavorites={() => setOnlyFavorites(!onlyFavorites)}
        isLegendaryOnly={isLegendaryOnly}
        onToggleLegendaryOnly={() => setIsLegendaryOnly(!isLegendaryOnly)}
        favoriteCount={favoriteIds.length}
        totalCount={allPokemon.length}
        filteredCount={pokemonList.length}
        onResetFilters={handleResetFilters}
      />

      {/* 3. Main Content: Pokemon Grid */}
      <main id="pokedex-main-grid" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {visiblePokemonList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visiblePokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  isFavorite={favoriteIds.includes(pokemon.id)}
                  isPlayingCry={playingId === pokemon.id}
                  onSelect={handleSelectPokemon}
                  onToggleFavorite={handleToggleFavorite}
                  onPlayCry={handlePlayCry}
                  onCompare={handleStartCompare}
                />
              ))}
            </div>

            {/* Load More / Show All Bar */}
            {remainingCount > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="load-more-btn"
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-102 transition-all cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span>さらに表示する（残り {remainingCount} 匹）</span>
                </button>

                <button
                  id="show-all-btn"
                  type="button"
                  onClick={() => setVisibleCount(pokemonList.length)}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>全 {pokemonList.length} 匹を一括表示</span>
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-500">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">一致するポケモンが見つかりません</h3>
            <p className="text-sm text-slate-400 max-w-md mb-5">
              検索条件（名前・世代・タイプ・お気に入り）を変更して、再度お試しください。
            </p>
            <button
              id="empty-state-reset-btn"
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-md shadow-red-600/30"
            >
              フィルターを初期化する
            </button>
          </div>
        )}
      </main>

      {/* 4. Detail Modal */}
      {selectedPokemon && (
        <PokemonDetailModal
          pokemon={selectedPokemon}
          allPokemon={allPokemon}
          isFavorite={favoriteIds.includes(selectedPokemon.id)}
          isPlayingCry={playingId === selectedPokemon.id}
          onClose={() => setSelectedPokemon(null)}
          onSelectPokemon={handleSelectPokemon}
          onToggleFavorite={handleToggleFavorite}
          onPlayCry={handlePlayCry}
          onCompare={(p) => {
            setSelectedPokemon(null);
            handleStartCompare(p);
          }}
        />
      )}

      {/* 5. Compare Modal */}
      {isCompareOpen && (
        <PokemonCompareModal
          isOpen={isCompareOpen}
          onClose={() => setIsCompareOpen(false)}
          allPokemon={allPokemon}
          pokemonA={comparePokemonA}
          pokemonB={comparePokemonB}
          comparisonResult={comparisonResult}
          onSelectPokemonA={setComparePokemonA}
          onSelectPokemonB={setComparePokemonB}
        />
      )}

      {/* 6. Footer */}
      <PokedexFooter totalCount={allPokemon.length} />
    </div>
  );
}

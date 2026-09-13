import { usePokedex } from './presentation/hooks/usePokedex';
import { PokedexHeader } from './presentation/components/PokedexHeader';
import { TypeFilterBar } from './presentation/components/TypeFilterBar';
import { PokemonCard } from './presentation/components/PokemonCard';
import { PokemonDetailModal } from './presentation/components/PokemonDetailModal';
import { PokemonCompareModal } from './presentation/components/PokemonCompareModal';
import { PokedexFooter } from './presentation/components/PokedexFooter';
import { SearchX, Sparkles } from 'lucide-react';

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

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType(undefined);
    setSelectedGeneration(undefined);
    setSortBy('number_asc');
    setOnlyFavorites(false);
    setIsLegendaryOnly(false);
  };

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
        {pokemonList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {pokemonList.map((pokemon) => (
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

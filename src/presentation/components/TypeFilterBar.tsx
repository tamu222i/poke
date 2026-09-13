import { PokemonType, POKEMON_TYPES } from '../../domain/schemas/pokemon.schema';
import { TYPE_STYLES } from '../styles/type-colors';
import { PokemonFilterCriteria } from '../../domain/repositories/pokemon.repository';
import { Sparkles, Star, RefreshCw } from 'lucide-react';

interface TypeFilterBarProps {
  selectedType?: PokemonType;
  onSelectType: (type: PokemonType | undefined) => void;
  selectedGeneration?: number;
  onSelectGeneration: (gen: number | undefined) => void;
  sortBy?: PokemonFilterCriteria['sortBy'];
  onSelectSort: (sort: PokemonFilterCriteria['sortBy']) => void;
  onlyFavorites: boolean;
  onToggleOnlyFavorites: () => void;
  isLegendaryOnly: boolean;
  onToggleLegendaryOnly: () => void;
  favoriteCount: number;
  totalCount: number;
  filteredCount: number;
  onResetFilters: () => void;
}

export function TypeFilterBar({
  selectedType,
  onSelectType,
  selectedGeneration,
  onSelectGeneration,
  sortBy,
  onSelectSort,
  onlyFavorites,
  onToggleOnlyFavorites,
  isLegendaryOnly,
  onToggleLegendaryOnly,
  favoriteCount,
  totalCount,
  filteredCount,
  onResetFilters,
}: TypeFilterBarProps) {
  const generationList = [
    { gen: 1, name: 'カントー', count: 151 },
    { gen: 2, name: 'ジョウト', count: 100 },
    { gen: 3, name: 'ホウエン', count: 135 },
  ];

  const hasActiveFilters =
    selectedType !== undefined ||
    selectedGeneration !== undefined ||
    onlyFavorites ||
    isLegendaryOnly ||
    sortBy !== 'number_asc';

  return (
    <div id="type-filter-bar" className="bg-slate-900/90 border-b border-slate-800 backdrop-blur-md sticky top-[73px] z-20 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Controls row: Generation pills, Favorites toggle, Legendary toggle, Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Generation selector */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full scrollbar-none">
            <span className="text-slate-400 font-medium whitespace-nowrap mr-1">世代:</span>
            <button
              id="gen-filter-all"
              type="button"
              onClick={() => onSelectGeneration(undefined)}
              className={`px-2.5 py-1 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedGeneration === undefined
                  ? 'bg-red-600 text-white shadow-sm shadow-red-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              すべて
            </button>
            {generationList.map(({ gen, name, count }) => (
              <button
                key={gen}
                id={`gen-filter-${gen}`}
                type="button"
                onClick={() => onSelectGeneration(selectedGeneration === gen ? undefined : gen)}
                className={`px-2.5 py-1 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedGeneration === gen
                    ? 'bg-red-600 text-white shadow-sm shadow-red-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>第{gen}世代 ({name})</span>
                <span className="text-[10px] opacity-75 font-mono">
                  {count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick filter switches & Sort */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Favorites filter toggle */}
            <button
              id="filter-favorites-toggle"
              type="button"
              onClick={onToggleOnlyFavorites}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                onlyFavorites
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
              <span>お気に入り</span>
              <span className="bg-slate-900/80 px-1.5 py-0.5 rounded text-[10px] text-slate-400 font-mono">
                {favoriteCount}
              </span>
            </button>

            {/* Legendary filter toggle */}
            <button
              id="filter-legendary-toggle"
              type="button"
              onClick={onToggleLegendaryOnly}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                isLegendaryOnly
                  ? 'bg-purple-500/20 text-purple-300 border-purple-400 shadow-sm shadow-purple-500/20'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isLegendaryOnly ? 'text-purple-300' : 'text-slate-400'}`} />
              <span>伝説・幻</span>
            </button>

            {/* Sort Select */}
            <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 rounded-lg px-2.5 py-1">
              <span className="text-slate-400 text-[11px]">並び順:</span>
              <select
                id="pokedex-sort-select"
                value={sortBy}
                onChange={(e) => onSelectSort(e.target.value as PokemonFilterCriteria['sortBy'])}
                className="bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="number_asc" className="bg-slate-800 text-slate-100">図鑑番号 (昇順)</option>
                <option value="number_desc" className="bg-slate-800 text-slate-100">図鑑番号 (降順)</option>
                <option value="name_asc" className="bg-slate-800 text-slate-100">五十音順</option>
                <option value="total_stats_desc" className="bg-slate-800 text-slate-100">合計種族値 (高い順)</option>
                <option value="speed_desc" className="bg-slate-800 text-slate-100">素早さ (高い順)</option>
                <option value="attack_desc" className="bg-slate-800 text-slate-100">こうげき (高い順)</option>
                <option value="hp_desc" className="bg-slate-800 text-slate-100">HP (高い順)</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                id="reset-filters-btn"
                type="button"
                onClick={onResetFilters}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"
                title="フィルターをリセット"
              >
                <RefreshCw className="w-3 h-3" />
                <span>リセット</span>
              </button>
            )}
          </div>
        </div>

        {/* Type Filter row: 18 Types badge chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            id="type-filter-all"
            type="button"
            onClick={() => onSelectType(undefined)}
            className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
              selectedType === undefined
                ? 'bg-slate-200 text-slate-900 border-white shadow-sm'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200 hover:border-slate-600'
            }`}
          >
            全タイプ
          </button>
          {POKEMON_TYPES.map((type) => {
            const style = TYPE_STYLES[type];
            const isSelected = selectedType === type;
            return (
              <button
                key={type}
                id={`type-filter-${type}`}
                type="button"
                onClick={() => onSelectType(isSelected ? undefined : type)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all border cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? `${style.bg} ${style.text} ${style.border} shadow-md ${style.glow} scale-105 font-bold`
                    : 'bg-slate-800/60 text-slate-300 border-slate-700/80 hover:border-slate-500'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : style.bg}`} />
                <span>{style.ja}</span>
              </button>
            );
          })}
        </div>

        {/* Results count display */}
        <div className="flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
          <span>表示中: <strong className="text-white font-mono">{filteredCount}</strong> 匹 / 全 {totalCount} 匹</span>
          {selectedType && (
            <span className="text-slate-300">
              タイプ選択中: <span className="font-semibold text-white">{TYPE_STYLES[selectedType].ja}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

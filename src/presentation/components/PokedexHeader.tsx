import React from 'react';
import { Search, Dices, Scale, Star, X } from 'lucide-react';

interface PokedexHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRandomPick: () => void;
  onOpenCompare: () => void;
  favoriteCount: number;
  totalPokemonCount: number;
}

export function PokedexHeader({
  searchQuery,
  onSearchChange,
  onRandomPick,
  onOpenCompare,
  favoriteCount,
  totalPokemonCount,
}: PokedexHeaderProps) {
  return (
    <header
      id="pokedex-main-header"
      className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 border-b-4 border-red-900 shadow-xl sticky top-0 z-30 px-4 sm:px-6 py-3"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Hardware Pokedex Lights & Branding */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            {/* Big Blue Camera / Sensor Lens */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-700 border-4 border-white shadow-lg shadow-cyan-500/50 flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 rounded-full bg-cyan-100 opacity-80" />
              </div>
            </div>

            {/* Red / Yellow / Green Small LEDs */}
            <div className="flex items-center gap-1.5 ml-1">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-200 shadow-xs" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-200 shadow-xs" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-200 shadow-xs" />
            </div>

            {/* App Title */}
            <div className="ml-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-wider drop-shadow-sm flex items-center gap-2">
                <span>ポケモン図鑑</span>
                <span className="text-xs font-mono font-bold bg-red-900/80 px-2 py-0.5 rounded text-red-200 border border-red-800">
                  Pokédex OS
                </span>
              </h1>
            </div>
          </div>

          {/* Mobile quick actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="header-mobile-random-btn"
              type="button"
              onClick={onRandomPick}
              className="p-2 rounded-xl bg-red-800/80 text-white hover:bg-red-900 cursor-pointer"
              title="ランダム選出"
            >
              <Dices className="w-4 h-4" />
            </button>
            <button
              id="header-mobile-compare-btn"
              type="button"
              onClick={onOpenCompare}
              className="p-2 rounded-xl bg-red-800/80 text-white hover:bg-red-900 cursor-pointer"
              title="能力比較"
            >
              <Scale className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center/Right: Search Bar & Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              id="pokedex-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="名前・番号・分類で検索 (例: ピカチュウ, 25)"
              className="w-full bg-slate-900/90 hover:bg-slate-900 focus:bg-slate-900 text-white placeholder-slate-400 text-xs sm:text-sm pl-9 pr-8 py-2 rounded-xl border border-red-900/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                id="search-clear-btn"
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Random Pick Button */}
            <button
              id="header-random-btn"
              type="button"
              onClick={onRandomPick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-800/90 hover:bg-red-900 text-white text-xs font-bold border border-red-700/60 cursor-pointer transition-all hover:scale-102 shadow-sm"
              title="ランダムにポケモンを選出"
            >
              <Dices className="w-4 h-4 text-amber-300" />
              <span>おまかせ</span>
            </button>

            {/* Compare Button */}
            <button
              id="header-compare-btn"
              type="button"
              onClick={onOpenCompare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-800/90 hover:bg-red-900 text-white text-xs font-bold border border-red-700/60 cursor-pointer transition-all hover:scale-102 shadow-sm"
              title="2匹のポケモン能力を比較"
            >
              <Scale className="w-4 h-4 text-cyan-300" />
              <span>ステータス比較</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

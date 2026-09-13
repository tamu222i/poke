import React, { useState } from 'react';
import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { TYPE_STYLES } from '../styles/type-colors';
import { Volume2, Heart, Scale, Sparkles } from 'lucide-react';

interface PokemonCardProps {
  pokemon: PokemonEntity;
  isFavorite: boolean;
  isPlayingCry: boolean;
  onSelect: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onPlayCry: (pokemon: PokemonEntity) => void;
  onCompare: (pokemon: PokemonEntity) => void;
}

export const PokemonCard = React.memo(function PokemonCard({
  pokemon,
  isFavorite,
  isPlayingCry,
  onSelect,
  onToggleFavorite,
  onPlayCry,
  onCompare,
}: PokemonCardProps) {
  const [imageError, setImageError] = useState(false);
  const primaryTypeStyle = TYPE_STYLES[pokemon.primaryType];
  const tier = pokemon.stats.getTierRank();

  const tierColors = {
    S: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    A: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    B: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    C: 'bg-stone-500/20 text-stone-300 border-stone-500/40',
    D: 'bg-slate-700 text-slate-400 border-slate-600',
  };

  return (
    <div
      id={`pokemon-card-${pokemon.id}`}
      onClick={() => onSelect(pokemon.id)}
      className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between cursor-pointer overflow-hidden"
    >
      {/* Background subtle radial gradient based on primary type */}
      <div
        className={`absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-15 blur-2xl pointer-events-none ${primaryTypeStyle.bg}`}
      />

      {/* Top bar: Pokedex Number, Tier, Favorite & Compare */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
            {pokemon.formattedNumber}
          </span>
          {pokemon.isLegendary && (
            <span
              className="flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30"
              title="伝説のポケモン"
            >
              <Sparkles className="w-2.5 h-2.5" />
              伝説
            </span>
          )}
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${tierColors[tier]}`}
            title={`総合ランク: ${tier} (種族値: ${pokemon.stats.total})`}
          >
            {tier}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
          {/* Quick cry button */}
          <button
            id={`cry-btn-${pokemon.id}`}
            type="button"
            onClick={() => onPlayCry(pokemon)}
            title="鳴き声を再生"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isPlayingCry
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-700/80'
            }`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Quick compare button */}
          <button
            id={`compare-btn-${pokemon.id}`}
            type="button"
            onClick={() => onCompare(pokemon)}
            title="比較リストに追加"
            className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-700/80 transition-colors cursor-pointer"
          >
            <Scale className="w-4 h-4" />
          </button>

          {/* Favorite button */}
          <button
            id={`fav-btn-${pokemon.id}`}
            type="button"
            onClick={() => onToggleFavorite(pokemon.id)}
            title={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
            className="p-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition-transform ${
                isFavorite
                  ? 'fill-rose-500 text-rose-500 scale-110'
                  : 'text-slate-400 hover:text-rose-400'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Center: Pokemon Artwork */}
      <div className="relative my-3 flex items-center justify-center h-36">
        <img
          src={imageError ? pokemon.sprites.pixel : pokemon.sprites.artwork}
          alt={pokemon.name.ja}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="max-h-32 max-w-[85%] object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300 pointer-events-none"
        />
      </div>

      {/* Bottom Info: Name, English Name, Types & Stat summary */}
      <div className="z-10 flex flex-col gap-2">
        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-base font-bold text-slate-100 tracking-tight">
              {pokemon.name.ja}
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              {pokemon.name.en}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">{pokemon.category}</p>
        </div>

        {/* Type pills */}
        <div className="flex items-center gap-1.5">
          {pokemon.types.map((type) => {
            const style = TYPE_STYLES[type];
            return (
              <span
                key={type}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${style.bg} ${style.text} shadow-xs`}
              >
                {style.ja}
              </span>
            );
          })}
        </div>

        {/* Quick Base Stats Mini-Bar */}
        <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
          <span>種族値計: <strong className="text-slate-200 font-mono">{pokemon.stats.total}</strong></span>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span>H: {pokemon.stats.hp}</span>
            <span>A: {pokemon.stats.attack}</span>
            <span>S: {pokemon.stats.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

import { useState, useEffect } from 'react';
import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { TYPE_STYLES } from '../styles/type-colors';
import { PokemonType, POKEMON_TYPES } from '../../domain/schemas/pokemon.schema';
import {
  X,
  Volume2,
  Heart,
  Scale,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface PokemonDetailModalProps {
  pokemon: PokemonEntity | null;
  allPokemon: PokemonEntity[];
  isFavorite: boolean;
  isPlayingCry: boolean;
  onClose: () => void;
  onSelectPokemon: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onPlayCry: (pokemon: PokemonEntity) => void;
  onCompare: (pokemon: PokemonEntity) => void;
}

export function PokemonDetailModal({
  pokemon,
  allPokemon,
  isFavorite,
  isPlayingCry,
  onClose,
  onSelectPokemon,
  onToggleFavorite,
  onPlayCry,
  onCompare,
}: PokemonDetailModalProps) {
  const [spriteMode, setSpriteMode] = useState<'normal' | 'shiny' | 'pixel'>('normal');

  useEffect(() => {
    // Reset sprite mode on pokemon change
    setSpriteMode('normal');
  }, [pokemon?.id]);

  // Keyboard navigation (Esc: close, ArrowLeft: prev, ArrowRight: next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && prevPokemon) {
        onSelectPokemon(prevPokemon.id);
      } else if (e.key === 'ArrowRight' && nextPokemon) {
        onSelectPokemon(nextPokemon.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pokemon, allPokemon, onClose, onSelectPokemon]);

  if (!pokemon) return null;

  // Previous & Next navigation
  const currentIndex = allPokemon.findIndex((p) => p.id === pokemon.id);
  const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
  const nextPokemon = currentIndex < allPokemon.length - 1 ? allPokemon[currentIndex + 1] : null;

  const primaryStyle = TYPE_STYLES[pokemon.primaryType];
  const weaknesses = pokemon.getWeaknesses();
  const resistances = pokemon.getResistances();
  const matchups = pokemon.getAllMatchups();

  // Current sprite URL based on selected mode
  const currentSprite =
    spriteMode === 'shiny'
      ? pokemon.sprites.shinyArtwork
      : spriteMode === 'pixel'
      ? pokemon.sprites.pixel
      : pokemon.sprites.artwork;

  // Stats definition for rendering
  const statList = [
    { label: 'HP', value: pokemon.stats.hp, max: 255, color: 'bg-emerald-500' },
    { label: 'こうげき', value: pokemon.stats.attack, max: 190, color: 'bg-orange-500' },
    { label: 'ぼうぎょ', value: pokemon.stats.defense, max: 230, color: 'bg-amber-500' },
    { label: 'とくこう', value: pokemon.stats.specialAttack, max: 194, color: 'bg-cyan-500' },
    { label: 'とくぼう', value: pokemon.stats.specialDefense, max: 230, color: 'bg-blue-500' },
    { label: 'すばやさ', value: pokemon.stats.speed, max: 200, color: 'bg-pink-500' },
  ];

  return (
    <div
      id="pokemon-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="pokemon-detail-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-red-400 bg-red-950/50 px-2.5 py-1 rounded-md border border-red-800/60">
              {pokemon.formattedNumber}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>{pokemon.name.ja}</span>
                <span className="text-xs font-mono font-medium text-slate-400">
                  {pokemon.name.en}
                </span>
              </h2>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2">
            <button
              id="detail-cry-btn"
              type="button"
              onClick={() => onPlayCry(pokemon)}
              title="鳴き声を再生"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                isPlayingCry
                  ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/40 animate-pulse'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>鳴き声</span>
            </button>

            <button
              id="detail-compare-btn"
              type="button"
              onClick={() => onCompare(pokemon)}
              title="他のポケモンと比較"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer transition-all"
            >
              <Scale className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">比較</span>
            </button>

            <button
              id="detail-favorite-btn"
              type="button"
              onClick={() => onToggleFavorite(pokemon.id)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 cursor-pointer transition-all"
              title={isFavorite ? 'お気に入りから外す' : 'お気に入りに追加'}
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-400'
                }`}
              />
            </button>

            <button
              id="detail-close-btn"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-900/60 hover:text-red-300 border border-slate-700 text-slate-400 cursor-pointer transition-colors ml-1"
              title="閉じる (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two column layout on larger screens */}
        <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (5 cols): Artwork showcase & Sprite modes & Bio */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Visual stage */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
              {/* Type aura */}
              <div
                className={`absolute w-52 h-52 rounded-full opacity-25 blur-3xl pointer-events-none ${primaryStyle.bg}`}
              />

              {/* Artwork */}
              <img
                src={currentSprite}
                alt={pokemon.name.ja}
                referrerPolicy="no-referrer"
                className={`max-h-56 max-w-[90%] object-contain drop-shadow-2xl transition-all duration-300 ${
                  spriteMode === 'pixel' ? 'image-pixelated scale-125' : ''
                }`}
              />

              {/* Sprite switch controls */}
              <div className="absolute bottom-3 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setSpriteMode('normal')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                    spriteMode === 'normal'
                      ? 'bg-slate-700 text-white font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  通常
                </button>
                <button
                  type="button"
                  onClick={() => setSpriteMode('shiny')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
                    spriteMode === 'shiny'
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  色違い
                </button>
                <button
                  type="button"
                  onClick={() => setSpriteMode('pixel')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                    spriteMode === 'pixel'
                      ? 'bg-slate-700 text-white font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ドット絵
                </button>
              </div>
            </div>

            {/* Retro Pokedex Text Display (Flavor text) */}
            <div className="bg-emerald-950/25 border border-emerald-800/40 rounded-2xl p-4 font-mono text-emerald-300 text-xs sm:text-sm leading-relaxed relative">
              <div className="absolute top-2 right-2 text-[10px] text-emerald-600 uppercase font-bold tracking-widest">
                ROTOM POKÉDEX
              </div>
              <p className="mt-1 font-sans">{pokemon.flavorText}</p>
            </div>

            {/* Physical Attributes Matrix */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
                <span className="text-slate-400 block text-[11px] mb-1">たかさ</span>
                <span className="font-bold text-white text-base">{pokemon.height} m</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
                <span className="text-slate-400 block text-[11px] mb-1">おもさ</span>
                <span className="font-bold text-white text-base">{pokemon.weight} kg</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
                <span className="text-slate-400 block text-[11px] mb-1">分類</span>
                <span className="font-bold text-white text-sm">{pokemon.category}</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
                <span className="text-slate-400 block text-[11px] mb-1">世代</span>
                <span className="font-bold text-white text-sm">第{pokemon.generation}世代</span>
              </div>
            </div>

            {/* Abilities */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                特性 (Abilities)
              </h4>
              <div className="flex flex-col gap-2">
                {pokemon.abilities.map((ability) => (
                  <div
                    key={ability.name}
                    className="bg-slate-900/60 border border-slate-700/80 rounded-xl p-2.5 text-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white">{ability.name}</span>
                      {ability.isHidden && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/60">
                          夢特性
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {ability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Base Stats, Weakness Matrix, Evolution Chain */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Types display */}
            <div>
              <span className="text-xs font-medium text-slate-400 block mb-1.5">タイプ:</span>
              <div className="flex items-center gap-2">
                {pokemon.types.map((type) => {
                  const style = TYPE_STYLES[type];
                  return (
                    <span
                      key={type}
                      className={`text-sm font-bold px-3 py-1 rounded-lg ${style.bg} ${style.text} shadow-md flex items-center gap-1.5`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white" />
                      {style.ja} ({style.en})
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Base Stats Section */}
            <div className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  種族値 (Base Stats)
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">合計:</span>
                  <span className="text-base font-black font-mono text-white">
                    {pokemon.stats.total}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-600 text-white">
                    Rank {pokemon.stats.getTierRank()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {statList.map((stat) => {
                  const percent = Math.min(100, Math.round((stat.value / stat.max) * 100));
                  return (
                    <div key={stat.label} className="flex items-center text-xs">
                      <span className="w-16 text-slate-400 font-medium">{stat.label}</span>
                      <span className="w-10 text-right font-mono font-bold text-white mr-3">
                        {stat.value}
                      </span>
                      <div className="flex-1 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 relative">
                        <div
                          className={`h-full ${stat.color} transition-all duration-500 rounded-full`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Defensive Type Matchups (Weakness & Resistances) */}
            <div className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                タイプ相性・被ダメージ倍率 (Defense Matchups)
              </h4>

              {/* Weaknesses (> 1x) */}
              <div className="mb-3">
                <span className="text-[11px] text-rose-300 font-semibold block mb-1.5">
                  弱点 (効果抜群):
                </span>
                {weaknesses.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {weaknesses.map(({ type, multiplier }) => {
                      const style = TYPE_STYLES[type];
                      return (
                        <div
                          key={type}
                          className="flex items-center gap-1 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded-lg text-xs"
                        >
                          <span className={`w-2 h-2 rounded-full ${style.bg}`} />
                          <span className="text-slate-200 font-medium">{style.ja}</span>
                          <span
                            className={`font-mono font-bold px-1 rounded text-[10px] ${
                              multiplier === 4
                                ? 'bg-rose-600 text-white'
                                : 'bg-rose-950 text-rose-300 border border-rose-800'
                            }`}
                          >
                            {multiplier}x
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">弱点なし</span>
                )}
              </div>

              {/* Resistances (< 1x) */}
              <div>
                <span className="text-[11px] text-emerald-300 font-semibold block mb-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  耐性・無効 (いまひとつ / 効果なし):
                </span>
                {resistances.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {resistances.map(({ type, multiplier }) => {
                      const style = TYPE_STYLES[type];
                      return (
                        <div
                          key={type}
                          className="flex items-center gap-1 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded-lg text-xs"
                        >
                          <span className={`w-2 h-2 rounded-full ${style.bg}`} />
                          <span className="text-slate-200 font-medium">{style.ja}</span>
                          <span
                            className={`font-mono font-bold px-1 rounded text-[10px] ${
                              multiplier === 0
                                ? 'bg-slate-700 text-stone-200'
                                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            }`}
                          >
                            {multiplier === 0 ? '0x 無効' : `${multiplier}x`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">耐性なし</span>
                )}
              </div>
            </div>

            {/* Evolution Chain */}
            {pokemon.evolutionChain && pokemon.evolutionChain.length > 1 && (
              <div className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  進化系統 (Evolution Chain)
                </h4>
                <div className="flex items-center justify-around gap-2 flex-wrap">
                  {pokemon.evolutionChain.map((evo, idx) => {
                    const isCurrent = evo.pokemonId === pokemon.id;
                    return (
                      <div key={evo.pokemonId} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectPokemon(evo.pokemonId)}
                          className={`flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-red-600/20 border-2 border-red-500 shadow-md scale-105'
                              : 'bg-slate-900/80 border border-slate-700 hover:border-slate-500'
                          }`}
                        >
                          <img
                            src={evo.sprite}
                            alt={evo.name}
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 object-contain"
                          />
                          <span
                            className={`text-xs font-bold mt-1 ${
                              isCurrent ? 'text-red-400' : 'text-slate-300'
                            }`}
                          >
                            {evo.name}
                          </span>
                        </button>
                        {idx < pokemon.evolutionChain!.length - 1 && (
                          <div className="flex flex-col items-center px-1 text-slate-400">
                            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                              {pokemon.evolutionChain![idx + 1].condition || '進化'}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between z-20 text-xs">
          {prevPokemon ? (
            <button
              id="detail-prev-btn"
              type="button"
              onClick={() => onSelectPokemon(prevPokemon.id)}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>
                {prevPokemon.formattedNumber} {prevPokemon.name.ja}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextPokemon ? (
            <button
              id="detail-next-btn"
              type="button"
              onClick={() => onSelectPokemon(nextPokemon.id)}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <span>
                {nextPokemon.name.ja} {nextPokemon.formattedNumber}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

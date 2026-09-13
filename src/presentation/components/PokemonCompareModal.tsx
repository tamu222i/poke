import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { PokemonComparisonResult } from '../../application/use-cases/compare-pokemon.usecase';
import { TYPE_STYLES } from '../styles/type-colors';
import { X, Scale, Swords, CheckCircle } from 'lucide-react';

interface PokemonCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  allPokemon: PokemonEntity[];
  pokemonA: PokemonEntity | null;
  pokemonB: PokemonEntity | null;
  comparisonResult: PokemonComparisonResult | null;
  onSelectPokemonA: (pokemon: PokemonEntity) => void;
  onSelectPokemonB: (pokemon: PokemonEntity) => void;
}

export function PokemonCompareModal({
  isOpen,
  onClose,
  allPokemon,
  pokemonA,
  pokemonB,
  comparisonResult,
  onSelectPokemonA,
  onSelectPokemonB,
}: PokemonCompareModalProps) {
  if (!isOpen || !pokemonA || !pokemonB || !comparisonResult) return null;

  const statsKeys: { key: keyof typeof comparisonResult.statDifferences; label: string }[] = [
    { key: 'hp', label: 'HP' },
    { key: 'attack', label: 'こうげき' },
    { key: 'defense', label: 'ぼうぎょ' },
    { key: 'specialAttack', label: 'とくこう' },
    { key: 'specialDefense', label: 'とくぼう' },
    { key: 'speed', label: 'すばやさ' },
    { key: 'total', label: '総合種族値' },
  ];

  return (
    <div
      id="compare-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="compare-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              ポケモン能力比較 (Compare)
            </h2>
          </div>
          <button
            id="compare-close-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-6">
          {/* Top selector and preview cards */}
          <div className="grid grid-cols-2 gap-4 items-center relative">
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center border-2 border-slate-900 shadow-lg">
              VS
            </div>

            {/* Left Pokemon A */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col items-center text-center">
              <select
                id="select-compare-a"
                value={pokemonA.id}
                onChange={(e) => {
                  const found = allPokemon.find((p) => p.id === Number(e.target.value));
                  if (found) onSelectPokemonA(found);
                }}
                className="mb-2 bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1 max-w-full focus:outline-none"
              >
                {allPokemon.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.formattedNumber} {p.name.ja}
                  </option>
                ))}
              </select>

              <img
                src={pokemonA.sprites.artwork}
                alt={pokemonA.name.ja}
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-md my-1"
              />
              <h3 className="font-bold text-white text-base sm:text-lg">{pokemonA.name.ja}</h3>
              <div className="flex gap-1 mt-1">
                {pokemonA.types.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] px-2 py-0.5 rounded ${TYPE_STYLES[t].bg} ${TYPE_STYLES[t].text}`}
                  >
                    {TYPE_STYLES[t].ja}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Pokemon B */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col items-center text-center">
              <select
                id="select-compare-b"
                value={pokemonB.id}
                onChange={(e) => {
                  const found = allPokemon.find((p) => p.id === Number(e.target.value));
                  if (found) onSelectPokemonB(found);
                }}
                className="mb-2 bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1 max-w-full focus:outline-none"
              >
                {allPokemon.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.formattedNumber} {p.name.ja}
                  </option>
                ))}
              </select>

              <img
                src={pokemonB.sprites.artwork}
                alt={pokemonB.name.ja}
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-md my-1"
              />
              <h3 className="font-bold text-white text-base sm:text-lg">{pokemonB.name.ja}</h3>
              <div className="flex gap-1 mt-1">
                {pokemonB.types.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] px-2 py-0.5 rounded ${TYPE_STYLES[t].bg} ${TYPE_STYLES[t].text}`}
                  >
                    {TYPE_STYLES[t].ja}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Type Advantage Overview */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Swords className="w-4 h-4 text-amber-400" />
              タイプ一致攻撃の相性対決
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px]">
                  {pokemonA.name.ja} → {pokemonB.name.ja} 最大倍率:
                </span>
                <span
                  className={`text-base font-bold font-mono ${
                    comparisonResult.advantages.aAgainstB > 1
                      ? 'text-rose-400 font-black'
                      : comparisonResult.advantages.aAgainstB < 1
                      ? 'text-slate-400'
                      : 'text-slate-200'
                  }`}
                >
                  {comparisonResult.advantages.aAgainstB}x
                </span>
                {comparisonResult.advantages.aAgainstB > 1 && (
                  <span className="text-[10px] text-rose-300 block">効果抜群の技を所持！</span>
                )}
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px]">
                  {pokemonB.name.ja} → {pokemonA.name.ja} 最大倍率:
                </span>
                <span
                  className={`text-base font-bold font-mono ${
                    comparisonResult.advantages.bAgainstA > 1
                      ? 'text-rose-400 font-black'
                      : comparisonResult.advantages.bAgainstA < 1
                      ? 'text-slate-400'
                      : 'text-slate-200'
                  }`}
                >
                  {comparisonResult.advantages.bAgainstA}x
                </span>
                {comparisonResult.advantages.bAgainstA > 1 && (
                  <span className="text-[10px] text-rose-300 block">効果抜群の技を所持！</span>
                )}
              </div>
            </div>
          </div>

          {/* Stats Breakdown Comparison */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              種族値パラメータ比較
            </h4>

            <div className="flex flex-col gap-2.5">
              {statsKeys.map(({ key, label }) => {
                const valA = key === 'total' ? pokemonA.stats.total : pokemonA.stats[key];
                const valB = key === 'total' ? pokemonB.stats.total : pokemonB.stats[key];
                const diff = comparisonResult.statDifferences[key];
                const isAWin = diff > 0;
                const isBWin = diff < 0;

                return (
                  <div
                    key={key}
                    className={`grid grid-cols-12 items-center text-xs p-2 rounded-xl transition-colors ${
                      key === 'total' ? 'bg-slate-900/90 border border-slate-700' : 'bg-slate-900/40'
                    }`}
                  >
                    {/* Val A */}
                    <div className="col-span-3 text-right flex items-center justify-end gap-1.5 font-mono">
                      {isAWin && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                      <span
                        className={`font-bold ${
                          isAWin ? 'text-emerald-400 text-sm' : 'text-slate-300'
                        }`}
                      >
                        {valA}
                      </span>
                    </div>

                    {/* Label & Diff in center */}
                    <div className="col-span-6 flex flex-col items-center text-center">
                      <span className="font-semibold text-slate-300 text-[11px]">{label}</span>
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          diff > 0
                            ? 'text-emerald-400'
                            : diff < 0
                            ? 'text-cyan-400'
                            : 'text-slate-500'
                        }`}
                      >
                        {diff > 0 ? `+${diff} (${pokemonA.name.ja})` : diff < 0 ? `+${Math.abs(diff)} (${pokemonB.name.ja})` : '同値'}
                      </span>
                    </div>

                    {/* Val B */}
                    <div className="col-span-3 text-left flex items-center justify-start gap-1.5 font-mono">
                      <span
                        className={`font-bold ${
                          isBWin ? 'text-cyan-400 text-sm' : 'text-slate-300'
                        }`}
                      >
                        {valB}
                      </span>
                      {isBWin && <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

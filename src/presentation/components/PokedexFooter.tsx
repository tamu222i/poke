import React from 'react';
import { Database, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

interface PokedexFooterProps {
  totalCount: number;
}

export function PokedexFooter({ totalCount }: PokedexFooterProps) {
  return (
    <footer
      id="pokedex-footer"
      className="mt-12 border-t border-slate-800 bg-slate-950/80 py-6 px-4 sm:px-6 text-xs text-slate-400"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* DDD & Schema-Driven Architecture badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono font-medium text-[11px]">Architecture: 簡易DDD + Clean</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono font-medium text-[11px]">Schema: Zod-Driven</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono font-medium text-[11px]">Testing: BDD + TDD (Vitest)</span>
          </div>
        </div>

        {/* Right credits */}
        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>全 {totalCount} 匹登録完了 (PokeAPI Official CDN連携)</span>
        </div>
      </div>
    </footer>
  );
}

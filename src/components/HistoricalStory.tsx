import React from 'react';
import { EraGarment } from '../data/eras';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface HistoricalStoryProps {
  garment: EraGarment;
  onGoToGame: () => void;
  onGoToRemix: () => void;
}

export const HistoricalStory: React.FC<HistoricalStoryProps> = ({
  garment,
  onGoToGame,
  onGoToRemix,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4 py-4 flex flex-col items-center">
      {/* Era Kicker & Accession Meta */}
      <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-stone-400 mb-2">
        <span className="text-[#D4AF37] font-medium">{garment.eraName}</span>
        <span className="text-stone-600">·</span>
        <span>{garment.dynastyName}</span>
        <span className="text-stone-600">·</span>
        <span className="font-mono text-stone-400">{garment.period}</span>
      </div>

      {/* Garment Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-2">
        {garment.garmentName}
      </h2>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-serif italic text-stone-400 tracking-wide mb-4">
        {garment.subtitle}
      </p>

      {/* Editorial Description (1-3 sentences) */}
      <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-xl mx-auto mb-6">
        {garment.description}
      </p>

      {/* Action Triggers: Exhibition to Interactive Story and to Remix */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
        <button
          onClick={onGoToGame}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900/90 hover:bg-stone-800 border border-stone-700 hover:border-[#D4AF37] text-xs uppercase tracking-widest text-stone-200 hover:text-white transition-all cursor-pointer group"
        >
          <BookOpen className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#D4AF37] transition-colors" />
          <span>TRẢI NGHIỆM KHÔNG GIAN NGHỆ THUẬT</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-200 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={onGoToRemix}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-stone-900/40 border border-stone-800 hover:border-stone-600 text-xs uppercase tracking-widest text-stone-400 hover:text-stone-200 transition-all cursor-pointer group"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>REMIX PHONG CÁCH NÀY</span>
        </button>
      </div>
    </div>
  );
};

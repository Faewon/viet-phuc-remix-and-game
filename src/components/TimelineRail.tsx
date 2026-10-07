import React from 'react';
import { EraGarment } from '../data/eras';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineRailProps {
  eras: EraGarment[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const TimelineRail: React.FC<TimelineRailProps> = ({
  eras,
  currentIndex,
  onSelectIndex,
  onPrev,
  onNext,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 sm:py-6 flex flex-col gap-4 border-t border-stone-900/90 select-none">
      {/* Upper Timeline track with historical eras */}
      <div className="relative flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
        {/* Continuous horizontal hairline track */}
        <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-stone-900 -translate-y-1/2 pointer-events-none hidden sm:block" />

        {eras.map((era, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={era.id}
              onClick={() => onSelectIndex(index)}
              className="relative z-10 flex flex-col items-center gap-1.5 px-3 sm:px-6 py-2 transition-all cursor-pointer group text-center shrink-0"
            >
              {/* Timeline node point */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D4AF37] scale-125 ring-4 ring-[#D4AF37]/20'
                    : 'bg-stone-700 group-hover:bg-stone-400'
                }`}
              />

              {/* Era label */}
              <span
                className={`text-xs sm:text-sm font-serif tracking-wider transition-colors ${
                  isActive ? 'text-white font-medium' : 'text-stone-400 group-hover:text-stone-200'
                }`}
              >
                {era.eraName}
              </span>

              {/* Period subtitle */}
              <span className="text-[10px] text-stone-500 font-mono tracking-tight hidden sm:inline">
                {era.period}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation Controls: Previous / Next buttons & Era Progress */}
      <div className="flex items-center justify-between text-xs tracking-widest uppercase text-stone-400 pt-1">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-3 py-2 transition-all cursor-pointer ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed text-stone-600'
              : 'hover:text-white hover:-translate-x-0.5 text-stone-300'
          }`}
          aria-label="Thời kỳ trước"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">THỜI KỲ TRƯỚC</span>
          <span className="sm:hidden">TRƯỚC</span>
        </button>

        <div className="flex items-center gap-2 text-stone-400 font-mono text-[11px]">
          <span>{eras[currentIndex].garmentName}</span>
          <span className="text-stone-600">·</span>
          <span>{eras[currentIndex].period}</span>
        </div>

        <button
          onClick={onNext}
          disabled={currentIndex === eras.length - 1}
          className={`flex items-center gap-1.5 px-3 py-2 transition-all cursor-pointer ${
            currentIndex === eras.length - 1
              ? 'opacity-30 cursor-not-allowed text-stone-600'
              : 'hover:text-white hover:translate-x-0.5 text-stone-300'
          }`}
          aria-label="Thời kỳ tiếp theo"
        >
          <span className="hidden sm:inline">THỜI KỲ TIẾP THEO</span>
          <span className="sm:hidden">TIẾP</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { EraGarment } from '../data/eras';
import { ArrowLeft, ArrowRight, Sparkles, Compass } from 'lucide-react';

interface GameInstallationRoomProps {
  garment: EraGarment;
  onBackToExhibition: () => void;
  onGoToRemix: () => void;
}

export const GameInstallationRoom: React.FC<GameInstallationRoomProps> = ({
  garment,
  onBackToExhibition,
  onGoToRemix,
}) => {
  return (
    <div className="relative min-h-screen w-full bg-black text-[#F5F5F0] flex flex-col justify-between p-4 sm:p-8 select-none overflow-hidden">
      {/* Background architectural gallery lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.05) 0%, rgba(5, 5, 5, 0.8) 70%, rgba(0, 0, 0, 1) 100%)'
        }}
      />

      {/* Top minimal navigation as specified: VIỆT PHỤC REMIX  <- BACK TO EXHIBITION */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-stone-900/80">
        <button
          onClick={onBackToExhibition}
          className="font-serif text-lg tracking-wider text-stone-200 hover:text-white transition-colors cursor-pointer"
        >
          VIỆT PHỤC REMIX
        </button>

        <button
          onClick={onBackToExhibition}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-stone-500 group-hover:text-stone-200 group-hover:-translate-x-1 transition-transform" />
          <span>QUAY LẠI TRIỂN LÃM</span>
        </button>
      </header>

      {/* Center Dedicated Installation Viewport */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto py-8 sm:py-12 flex flex-col items-center text-center">
        {/* Curatorial Header */}
        <div className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
          KHÔNG GIAN LẮP ĐẶT NGHỆ THUẬT TƯƠNG TÁC
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#FBF9F5] tracking-tight mb-3">
          Dấu Ấn {garment.eraName}
        </h1>

        <p className="text-xs sm:text-sm font-serif italic text-stone-400 max-w-md mx-auto mb-8">
          {garment.garmentName} ({garment.period})
        </p>

        {/* Dedicated Game Slot - Left clean and unencumbered as requested */}
        <div className="w-full max-w-2xl h-64 sm:h-80 border border-stone-900 bg-stone-950/80 flex flex-col items-center justify-center p-6 relative overflow-hidden group">
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Central silent installation focus */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            <div className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center mb-4 text-[#D4AF37]">
              <Compass className="w-4 h-4" />
            </div>

            <p className="text-sm font-serif text-stone-300 mb-2">
              Không gian trải nghiệm tương tác số
            </p>

            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Ô tương tác này được bố trí tĩnh tại theo không gian trưng bày của triển lãm, phản ánh dòng thời gian lịch sử của triều đại {garment.dynastyName}.
            </p>
          </div>

          {/* Minimalist framing corners */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-stone-700 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-stone-700 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-stone-700 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-stone-700 pointer-events-none" />
        </div>

        {/* Narrative continuity after the installation */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">
            HÀNH TRÌNH TIẾP NỐI
          </p>
          <p className="text-base sm:text-lg font-serif italic text-stone-200 mb-6">
            Bạn đã khám phá quá khứ. Hôm nay bạn sẽ mặc gì?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGoToRemix}
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/60 hover:border-[#D4AF37] text-xs uppercase tracking-widest font-medium text-[#F5F5F0] transition-all cursor-pointer group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>REMIX PHONG CÁCH</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBackToExhibition}
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-800 hover:border-stone-600 text-xs uppercase tracking-widest text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
            >
              <span>VỀ TRIỂN LÃM</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer minimal signature */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] text-stone-600 py-3 border-t border-stone-900/60 font-mono">
        <span>AI ARENA · VIỆT PHỤC REMIX</span>
        <span>MẶC LÊN MỘT PHẦN LỊCH SỬ</span>
      </footer>
    </div>
  );
};

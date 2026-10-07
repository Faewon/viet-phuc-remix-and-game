import React from 'react';
import { QrCode, Sparkles, Compass } from 'lucide-react';

interface NavigationProps {
  currentView: 'exhibition' | 'game' | 'remix';
  onSelectView: (view: 'exhibition' | 'game' | 'remix') => void;
  onOpenExhibitQr: () => void;
  currentEraIndex: string;
  totalEras: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSelectView,
  onOpenExhibitQr,
  currentEraIndex,
  totalEras,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/85 backdrop-blur-md border-b border-stone-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title, single line text element wordmark */}
        <button
          onClick={() => onSelectView('exhibition')}
          className="text-left font-serif text-lg tracking-wider text-stone-100 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          VIỆT PHỤC REMIX
        </button>

        {/* Zone 2: 4 nav links, single line text with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-400">
          <button
            onClick={() => onSelectView('exhibition')}
            className={`transition-colors hover:text-stone-200 cursor-pointer pb-0.5 ${
              currentView === 'exhibition'
                ? 'text-[#F5F5F0] border-b border-[#D4AF37]'
                : 'border-b border-transparent'
            }`}
          >
            Gian Triển Lãm
          </button>

          <button
            onClick={() => onSelectView('game')}
            className={`transition-colors hover:text-stone-200 cursor-pointer pb-0.5 ${
              currentView === 'game'
                ? 'text-[#F5F5F0] border-b border-[#D4AF37]'
                : 'border-b border-transparent'
            }`}
          >
            Lắp Đặt Tương Tác
          </button>

          <button
            onClick={() => onSelectView('remix')}
            className={`transition-colors hover:text-stone-200 cursor-pointer pb-0.5 ${
              currentView === 'remix'
                ? 'text-[#F5F5F0] border-b border-[#D4AF37]'
                : 'border-b border-transparent'
            }`}
          >
            Remix Gen Z
          </button>

          <button
            onClick={onOpenExhibitQr}
            className="transition-colors hover:text-stone-200 cursor-pointer pb-0.5 border-b border-transparent inline-flex items-center gap-1.5"
          >
            Mã Tham Quan
          </button>
        </nav>

        {/* Zone 3: 1 to 2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-xs tracking-widest text-stone-400 font-mono tabular-nums pr-2 hidden sm:block">
            {currentEraIndex} / {totalEras}
          </div>

          <button
            onClick={onOpenExhibitQr}
            className="p-2 text-stone-400 hover:text-stone-100 transition-colors md:hidden cursor-pointer"
            title="Xem mã hiện vật"
            aria-label="Xem mã hiện vật"
          >
            <QrCode className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectView(currentView === 'remix' ? 'exhibition' : 'remix')}
            className="px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase text-stone-200 hover:text-white border border-stone-800 hover:border-stone-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            {currentView === 'remix' ? 'Về Triển Lãm' : 'Remix Ngay'}
          </button>
        </div>
      </div>
    </header>
  );
};

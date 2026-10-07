import React, { useState } from 'react';
import { EraGarment } from '../data/eras';
import { Maximize2, Minimize2, Sparkles } from 'lucide-react';

interface GarmentViewerProps {
  garment: EraGarment;
  isInspecting: boolean;
  onToggleInspect: () => void;
}

export const GarmentViewer: React.FC<GarmentViewerProps> = ({
  garment,
  isInspecting,
  onToggleInspect,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] select-none">
      {/* Overhead museum gallery spotlight beam */}
      <div 
        className="absolute -top-16 inset-x-0 h-[480px] pointer-events-none opacity-90 transition-opacity duration-700 gallery-spotlight"
      />

      {/* Floor pedestal radial glow */}
      <div 
        className="absolute bottom-4 inset-x-8 h-28 pointer-events-none opacity-80 pedestal-glow"
      />

      {/* Garment Mannequin Presentation Area */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-h-[70vh]">
        {!imageError ? (
          <div className="relative group w-auto h-auto max-h-[50vh] sm:max-h-[58vh] flex items-center justify-center">
            {/* Soft backdrop vignette frame */}
            <div className="relative overflow-hidden rounded-sm transition-transform duration-700 ease-out hover:scale-[1.015]">
              <img
                key={garment.id}
                src={garment.image}
                alt={`${garment.garmentName} - ${garment.eraName}`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className={`w-auto h-auto max-h-[46vh] sm:max-h-[56vh] object-contain shadow-2xl transition-all duration-700 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] ${
                  isInspecting ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Museum glass reflection gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* Inspect / Zoom toggle button */}
            <button
              onClick={onToggleInspect}
              className="absolute bottom-3 right-3 p-2 bg-stone-950/80 hover:bg-stone-900 border border-stone-800 hover:border-stone-600 text-stone-300 hover:text-white transition-all duration-200 cursor-pointer opacity-80 hover:opacity-100"
              title={isInspecting ? 'Thu nhỏ hiển thị' : 'Xem chi tiết cận cảnh'}
              aria-label={isInspecting ? 'Thu nhỏ hiển thị' : 'Xem chi tiết cận cảnh'}
            >
              {isInspecting ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        ) : (
          /* Styled Museum Fallback Container (Zero Broken Image) */
          <div className="w-72 h-96 border border-stone-800 bg-stone-950/70 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-24 border border-dashed border-stone-700 rounded-t-full mb-4 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-stone-600" />
            </div>
            <p className="font-serif text-lg text-stone-200">{garment.garmentName}</p>
            <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{garment.eraName}</p>
            <p className="text-xs text-stone-600 mt-3 font-mono">{garment.accessionNumber}</p>
          </div>
        )}

        {/* Minimal pedestal line & shadow */}
        <div className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent mt-3 opacity-60" />
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone-600 font-mono mt-1.5">
          {garment.accessionNumber}
        </div>
      </div>
    </div>
  );
};

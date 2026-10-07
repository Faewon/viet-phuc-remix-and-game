import React from 'react';
import { GarmentDetail } from '../data/eras';

interface FloatingEditorialLabelsProps {
  details: GarmentDetail[];
}

export const FloatingEditorialLabels: React.FC<FloatingEditorialLabelsProps> = ({ details }) => {
  const leftDetails = details.filter((d) => d.direction === 'left');
  const rightDetails = details.filter((d) => d.direction === 'right');

  return (
    <>
      {/* Desktop floating annotations - Left column */}
      <div className="hidden lg:flex flex-col gap-8 w-64 xl:w-72 text-right">
        {leftDetails.map((item, idx) => (
          <div
            key={item.id}
            className="group relative transition-all duration-500 hover:translate-x-1"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-1">
              {item.label}
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              {item.text}
            </p>
            {/* Hairline connector line to garment */}
            <div className="w-12 h-[1px] bg-stone-800 ml-auto mt-2.5 group-hover:bg-stone-600 transition-colors" />
          </div>
        ))}
      </div>

      {/* Desktop floating annotations - Right column */}
      <div className="hidden lg:flex flex-col gap-8 w-64 xl:w-72 text-left">
        {rightDetails.map((item, idx) => (
          <div
            key={item.id}
            className="group relative transition-all duration-500 hover:-translate-x-1"
            style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
          >
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-1">
              {item.label}
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              {item.text}
            </p>
            {/* Hairline connector line from garment */}
            <div className="w-12 h-[1px] bg-stone-800 mr-auto mt-2.5 group-hover:bg-stone-600 transition-colors" />
          </div>
        ))}
      </div>

      {/* Mobile & Tablet stacked editorial cards grid */}
      <div className="lg:hidden w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 px-2">
        {details.map((item) => (
          <div
            key={item.id}
            className="p-3.5 border border-stone-900 bg-stone-950/60 backdrop-blur-xs transition-colors hover:border-stone-800"
          >
            <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-1">
              {item.label}
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LandingScreenProps {
  onEnter: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 py-12 md:py-16 bg-black text-[#F5F5F0] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 0.4) 60%, rgba(0, 0, 0, 1) 100%)'
        }}
      />

      {/* Top minimal museum identifier */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between text-xs tracking-widest uppercase text-stone-400">
        <span className="font-medium text-stone-300">AI ARENA</span>
        <span className="text-stone-500 hidden sm:inline">KHÔNG GIAN TRIỂN LÃM SỐ · MÙA 01</span>
        <span className="text-stone-400">HÀ NỘI / HUẾ / SÀI GÒN</span>
      </div>

      {/* Central Hero Statement */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl my-auto py-12">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
          <span className="w-6 h-[1px] bg-stone-700" />
          <span>TRIỂN LÃM DI SẢN VĂN HÓA VÀ THỜI TRANG</span>
          <span className="w-6 h-[1px] bg-stone-700" />
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#FBF9F5] leading-none mb-6">
          VIỆT PHỤC
          <span className="block italic text-stone-400 font-light mt-1">REMIX</span>
        </h1>

        <div className="space-y-2 mb-10 text-stone-300 font-serif text-lg sm:text-2xl tracking-wide max-w-xl">
          <p className="opacity-90">MỘT DÒNG CHẢY</p>
          <p className="opacity-90">MỘT DI SẢN</p>
          <p className="text-[#D4AF37] font-medium">MỘT CÁCH MẶC MỚI</p>
        </div>

        <p className="text-stone-400 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed mb-12">
          Bước vào không gian triển lãm bóng tối để chiêm ngưỡng dòng thời gian của trang phục truyền thống Việt qua các triều đại Lý, Trần, Lê, Nguyễn.
        </p>

        {/* Enter CTA */}
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-stone-700 hover:border-[#D4AF37] text-sm tracking-[0.2em] uppercase font-medium text-stone-200 hover:text-white transition-all duration-300 rounded-none cursor-pointer"
        >
          <span className="relative z-10">BƯỚC VÀO TRIỂN LÃM</span>
          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Bottom curatorial footer */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light pt-8 border-t border-stone-900/60">
        <div>
          <span>TRIỂN LÃM NGHỆ THUẬT SỐ</span>
          <span className="mx-2">·</span>
          <span>MẶC LÊN MỘT PHẦN LỊCH SỬ</span>
        </div>
        <div className="text-stone-600">
          Ấn phím cách hoặc nhấp để bắt đầu trải nghiệm
        </div>
      </div>
    </div>
  );
};

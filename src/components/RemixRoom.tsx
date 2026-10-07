import React, { useState } from 'react';
import { EraGarment } from '../data/eras';
import { ArrowLeft, Sparkles, RefreshCw, Check, Layers, Sliders, Palette, Share2 } from 'lucide-react';

interface RemixRoomProps {
  currentGarment: EraGarment;
  onBackToExhibition: () => void;
  onSelectEraById: (id: string) => void;
  allEras: EraGarment[];
}

type StyleMode = 'STREETWEAR' | 'NEO_TRADITIONAL' | 'CYBER_SILK' | 'MINIMAL_EDITORIAL';

interface RemixState {
  style: StyleMode;
  colorIndex: number;
  selectedAccessories: string[];
  silhouetteCut: 'CROPPED' | 'OVERSIZED' | 'STRUCTURED';
}

export const RemixRoom: React.FC<RemixRoomProps> = ({
  currentGarment,
  onBackToExhibition,
  onSelectEraById,
  allEras,
}) => {
  const [remixState, setRemixState] = useState<RemixState>({
    style: 'STREETWEAR',
    colorIndex: 0,
    selectedAccessories: ['khan-van', 'sneakers'],
    silhouetteCut: 'OVERSIZED',
  });

  const [copiedNotification, setCopiedNotification] = useState(false);

  const styleDescriptions: Record<StyleMode, { title: string; desc: string }> = {
    STREETWEAR: {
      title: 'Phố Thị Đương Đại',
      desc: 'Kết hợp tà áo truyền thống với áo hoodie hoặc thun trắng, phối cùng quần cargo và giày thể thao phá cách.',
    },
    NEO_TRADITIONAL: {
      title: 'Tân Cổ Điển Tối Giản',
      desc: 'Giữ nguyên cấu trúc giao lĩnh hoặc nhật bình nhưng may bằng chất liệu linen thô, tông màu trung tính nhã nhặn.',
    },
    CYBER_SILK: {
      title: 'Lụa Tơ Vị Lai',
      desc: 'Giao thoa giữa lụa tơ tằm cổ truyền và chất liệu phản quang, chi tiết khóa kim loại kỹ thuật hiện đại.',
    },
    MINIMAL_EDITORIAL: {
      title: 'Thời Trang Tạp Chí Tối Giản',
      desc: 'Dáng áo khoác không cổ dệt mộc, ve áo sắc gọn tạo ấn tượng thị giác tinh giản và sang trọng.',
    },
  };

  const accessoriesList = [
    { id: 'khan-van', name: 'Khăn vấn cách tân' },
    { id: 'guoc-moc', name: 'Guốc mộc đế xuồng' },
    { id: 'tui-gam', name: 'Túi chéo gấm Thăng Long' },
    { id: 'sneakers', name: 'Sneakers đế thô trắng' },
    { id: 'kinh-ram', name: 'Kính râm gọng kim loại' },
  ];

  const toggleAccessory = (id: string) => {
    setRemixState((prev) => ({
      ...prev,
      selectedAccessories: prev.selectedAccessories.includes(id)
        ? prev.selectedAccessories.filter((item) => item !== id)
        : [...prev.selectedAccessories, id],
    }));
  };

  const handleShareLook = () => {
    navigator.clipboard?.writeText(
      `Việt Phục Remix: ${currentGarment.garmentName} remix phong cách ${styleDescriptions[remixState.style].title}.`
    );
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const activeColor = currentGarment.colors[remixState.colorIndex] || currentGarment.colors[0];

  return (
    <div className="min-h-screen w-full bg-black text-[#F5F5F0] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-stone-900">
        <button
          onClick={onBackToExhibition}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VỀ GIAN TRIỂN LÃM</span>
        </button>

        <div className="text-center hidden sm:block">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
            GEN Z STYLING LAB
          </div>
          <div className="text-sm font-serif text-stone-200">
            Việt Phục Remix Studio
          </div>
        </div>

        <button
          onClick={handleShareLook}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs uppercase tracking-wider text-stone-300 hover:text-white border border-stone-800 hover:border-stone-600 transition-colors cursor-pointer"
        >
          {copiedNotification ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span>ĐÃ LƯU</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-stone-400" />
              <span>CHIA SẺ</span>
            </>
          )}
        </button>
      </header>

      {/* Main Studio Grid */}
      <main className="w-full max-w-7xl mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Era Selector & Traditional Context */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="border border-stone-900 bg-stone-950/60 p-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              BƯỚC 01: NỀN TẢNG DI SẢN
            </div>
            <h3 className="font-serif text-xl text-stone-100 mb-3">
              Chọn Cổ Phục Làm Gốc
            </h3>

            {/* Era choice buttons */}
            <div className="grid grid-cols-2 gap-2">
              {allEras.map((era) => {
                const isSelected = era.id === currentGarment.id;
                return (
                  <button
                    key={era.id}
                    onClick={() => onSelectEraById(era.id)}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                        : 'border-stone-800 hover:border-stone-700 text-stone-400 bg-black/40'
                    }`}
                  >
                    <div className="text-[10px] text-stone-500 font-mono">
                      {era.eraName}
                    </div>
                    <div className="text-xs font-serif font-medium text-stone-200">
                      {era.garmentName}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-900/80 text-xs text-stone-400 font-light leading-relaxed">
              <span className="text-[#D4AF37] font-medium">Gợi ý cách điệu: </span>
              {currentGarment.modernRemixNote}
            </div>
          </div>

          {/* Style Mode Selector */}
          <div className="border border-stone-900 bg-stone-950/60 p-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              BƯỚC 02: PHONG CÁCH REMIX
            </div>
            <h3 className="font-serif text-xl text-stone-100 mb-3">
              Định Hình Ngôn Ngữ Thời Trang
            </h3>

            <div className="flex flex-col gap-2">
              {(
                [
                  'STREETWEAR',
                  'NEO_TRADITIONAL',
                  'CYBER_SILK',
                  'MINIMAL_EDITORIAL',
                ] as StyleMode[]
              ).map((mode) => {
                const isActive = remixState.style === mode;
                return (
                  <button
                    key={mode}
                    onClick={() =>
                      setRemixState((prev) => ({ ...prev, style: mode }))
                    }
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-stone-800 hover:border-stone-700 bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-wider uppercase text-stone-200">
                        {styleDescriptions[mode].title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone-400 font-light mt-1">
                      {styleDescriptions[mode].desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center Column: Live Outfit Mockup Preview */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full relative border border-stone-800 bg-stone-950/80 p-6 flex flex-col items-center min-h-[460px] sm:min-h-[520px] justify-between overflow-hidden">
            {/* Ambient spotlight overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 50% 40%, ${activeColor.hex}22 0%, rgba(0,0,0,0.85) 75%)`,
              }}
            />

            {/* Top preview specs */}
            <div className="relative z-10 w-full flex items-center justify-between text-xs text-stone-400 border-b border-stone-900 pb-3 font-mono">
              <span>{currentGarment.garmentName} REMIX</span>
              <span className="text-[#D4AF37]">{styleDescriptions[remixState.style].title}</span>
            </div>

            {/* Garment visualization with layered styling highlights */}
            <div className="relative z-10 my-auto flex flex-col items-center">
              <div className="relative w-48 sm:w-64 max-h-[340px] flex items-center justify-center">
                <img
                  src={currentGarment.image}
                  alt={currentGarment.garmentName}
                  className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] opacity-90 transition-all duration-500 hover:opacity-100"
                />

                {/* Modern styling overlay accents */}
                <div
                  className="absolute inset-0 border border-dashed rounded pointer-events-none transition-colors duration-500 opacity-60"
                  style={{ borderColor: activeColor.hex }}
                />
              </div>

              {/* Formula readout */}
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-[#FBF9F5]">
                  {currentGarment.garmentName} / {styleDescriptions[remixState.style].title}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Màu chủ đạo: <span className="text-white font-medium">{activeColor.name}</span>
                </p>
              </div>
            </div>

            {/* Bottom active accessory tags */}
            <div className="relative z-10 w-full pt-3 border-t border-stone-900 flex flex-wrap items-center justify-center gap-2 text-[11px] text-stone-400 font-mono">
              {remixState.selectedAccessories.map((accId) => {
                const item = accessoriesList.find((a) => a.id === accId);
                return item ? (
                  <span key={accId} className="text-stone-300">
                    + {item.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Palette, Silhouette, & Accessories Controls */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Palette Selector */}
          <div className="border border-stone-900 bg-stone-950/60 p-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              BƯỚC 03: PHỐI MÀU CỔ ĐIỂN
            </div>
            <h3 className="font-serif text-base text-stone-100 mb-3">
              Màu Sắc Lấy Từ Di Sản
            </h3>

            <div className="flex items-center gap-3">
              {currentGarment.colors.map((color, index) => {
                const isSelected = remixState.colorIndex === index;
                return (
                  <button
                    key={color.name}
                    onClick={() =>
                      setRemixState((prev) => ({ ...prev, colorIndex: index }))
                    }
                    className={`group relative flex flex-col items-center gap-1.5 cursor-pointer`}
                    title={color.name}
                  >
                    <div
                      className={`w-7 h-7 rounded-full border transition-all ${
                        isSelected
                          ? 'border-white scale-110 ring-2 ring-white/40'
                          : 'border-stone-700 hover:border-stone-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] text-stone-400 group-hover:text-stone-200">
                      {color.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Silhouette Cut */}
          <div className="border border-stone-900 bg-stone-950/60 p-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              BƯỚC 04: ĐƯỜNG CẮT PHOM DÁNG
            </div>
            <h3 className="font-serif text-base text-stone-100 mb-3">
              Tỷ Lệ Thể Hình
            </h3>

            <div className="grid grid-cols-3 gap-1.5">
              {(['CROPPED', 'OVERSIZED', 'STRUCTURED'] as const).map((cut) => {
                const isSelected = remixState.silhouetteCut === cut;
                const cutLabels = {
                  CROPPED: 'Lửng Gọn',
                  OVERSIZED: 'Rộng Buông',
                  STRUCTURED: 'Đứng Phom',
                };
                return (
                  <button
                    key={cut}
                    onClick={() =>
                      setRemixState((prev) => ({ ...prev, silhouetteCut: cut }))
                    }
                    className={`py-2 px-1 text-center border text-[11px] font-medium uppercase tracking-tight transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white'
                        : 'border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    {cutLabels[cut]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accessories Checklist */}
          <div className="border border-stone-900 bg-stone-950/60 p-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              BƯỚC 05: PHỤ KIỆN TƯƠNG TÁC
            </div>
            <h3 className="font-serif text-base text-stone-100 mb-3">
              Điểm Nhấn Gen Z
            </h3>

            <div className="flex flex-col gap-2">
              {accessoriesList.map((item) => {
                const isChecked = remixState.selectedAccessories.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleAccessory(item.id)}
                    className="flex items-center justify-between p-2 text-left text-xs border border-stone-900 hover:border-stone-800 transition-colors cursor-pointer group"
                  >
                    <span className={isChecked ? 'text-stone-200' : 'text-stone-500'}>
                      {item.name}
                    </span>
                    <div
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                          : 'border-stone-700'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
        <div>
          <span>VIỆT PHỤC REMIX</span>
          <span className="mx-2">·</span>
          <span>BẢO TỒN VĂN HÓA BẰNG NGÔN NGỮ THỜI TRANG ĐƯƠNG ĐẠI</span>
        </div>
        <button
          onClick={onBackToExhibition}
          className="text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          QUAY LẠI GIAN TRIỂN LÃM →
        </button>
      </footer>
    </div>
  );
};

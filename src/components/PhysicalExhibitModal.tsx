import React, { useState } from 'react';
import { EraGarment } from '../data/eras';
import { X, Copy, Check, QrCode, ExternalLink } from 'lucide-react';

interface PhysicalExhibitModalProps {
  garment: EraGarment;
  isOpen: boolean;
  onClose: () => void;
  onSelectEraBySlug: (slug: string) => void;
  allEras: EraGarment[];
}

export const PhysicalExhibitModal: React.FC<PhysicalExhibitModalProps> = ({
  garment,
  isOpen,
  onClose,
  onSelectEraBySlug,
  allEras,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const exhibitUrl = `${window.location.origin}/#exhibit/${garment.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(exhibitUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-stone-950 border border-stone-800 p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-200 transition-colors cursor-pointer"
          aria-label="Đóng bảng mã hiện vật"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Curatorial Header */}
        <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
          <span>THẺ ĐỊNH DANH HIỆN VẬT TRIỂN LÃM THỰC TẾ</span>
        </div>

        <h3 className="font-serif text-2xl text-[#FBF9F5] mb-1">
          {garment.garmentName}
        </h3>
        <p className="text-xs font-serif italic text-stone-400 mb-6">
          {garment.eraName} · {garment.period} · {garment.accessionNumber}
        </p>

        {/* QR Code Graphic Frame */}
        <div className="w-48 h-48 bg-white p-3 flex flex-col items-center justify-between border-4 border-stone-900 shadow-inner mb-6">
          {/* Simulated clean QR SVG */}
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            <svg
              className="w-full h-full text-black"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Corner 1 */}
              <rect x="5" y="5" width="28" height="28" />
              <rect x="9" y="9" width="20" height="20" fill="white" />
              <rect x="13" y="13" width="12" height="12" />

              {/* Corner 2 */}
              <rect x="67" y="5" width="28" height="28" />
              <rect x="71" y="9" width="20" height="20" fill="white" />
              <rect x="75" y="13" width="12" height="12" />

              {/* Corner 3 */}
              <rect x="5" y="67" width="28" height="28" />
              <rect x="9" y="71" width="20" height="20" fill="white" />
              <rect x="13" y="75" width="12" height="12" />

              {/* Data points matrix */}
              <rect x="38" y="10" width="6" height="6" />
              <rect x="48" y="10" width="6" height="6" />
              <rect x="38" y="22" width="6" height="6" />
              <rect x="54" y="22" width="6" height="6" />
              <rect x="10" y="38" width="6" height="6" />
              <rect x="22" y="38" width="6" height="6" />
              <rect x="38" y="38" width="8" height="8" />
              <rect x="52" y="38" width="6" height="6" />
              <rect x="64" y="38" width="6" height="6" />
              <rect x="78" y="38" width="6" height="6" />
              <rect x="10" y="50" width="6" height="6" />
              <rect x="26" y="50" width="6" height="6" />
              <rect x="40" y="52" width="6" height="6" />
              <rect x="56" y="50" width="6" height="6" />
              <rect x="70" y="52" width="8" height="8" />
              <rect x="84" y="50" width="6" height="6" />
              <rect x="38" y="68" width="6" height="6" />
              <rect x="50" y="72" width="6" height="6" />
              <rect x="68" y="68" width="8" height="8" />
              <rect x="82" y="72" width="6" height="6" />
              <rect x="42" y="84" width="6" height="6" />
              <rect x="56" y="84" width="8" height="8" />
              <rect x="74" y="84" width="6" height="6" />
            </svg>
          </div>
        </div>

        {/* Curatorial museum note */}
        <p className="text-xs text-stone-400 font-light max-w-sm mb-4 leading-relaxed">
          Quét mã này tại bảo tàng hoặc bảng trưng bày vật lý để mở trực tiếp chi tiết hiện vật số trên thiết bị di động.
        </p>

        {/* Direct link copy */}
        <div className="w-full flex items-center justify-between p-2.5 bg-black border border-stone-800 text-xs text-stone-300 font-mono mb-6">
          <span className="truncate pr-2">{`/exhibit/${garment.slug}`}</span>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span>Đã Chép</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Sao Chép</span>
              </>
            )}
          </button>
        </div>

        {/* Quick select other museum pieces */}
        <div className="w-full pt-4 border-t border-stone-900 text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            CHUYỂN MÃ HIỆN VẬT KHÁC
          </div>
          <div className="grid grid-cols-2 gap-2">
            {allEras.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectEraBySlug(item.slug)}
                className={`p-2 text-left text-xs border transition-colors cursor-pointer ${
                  item.id === garment.id
                    ? 'border-[#D4AF37] text-white bg-[#D4AF37]/10'
                    : 'border-stone-900 text-stone-400 hover:border-stone-700'
                }`}
              >
                <div className="font-serif">{item.garmentName}</div>
                <div className="text-[10px] text-stone-500 font-mono">{item.eraName}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

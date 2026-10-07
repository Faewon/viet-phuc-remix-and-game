import React, { useState, useEffect, useRef } from 'react';
import { EraGarment } from '../data/eras';
import { GarmentViewer } from './GarmentViewer';
import { FloatingEditorialLabels } from './FloatingEditorialLabels';
import { HistoricalStory } from './HistoricalStory';
import { TimelineRail } from './TimelineRail';

interface ExhibitionRoomProps {
  eras: EraGarment[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onGoToGame: () => void;
  onGoToRemix: () => void;
}

export const ExhibitionRoom: React.FC<ExhibitionRoomProps> = ({
  eras,
  currentIndex,
  onSelectIndex,
  onGoToGame,
  onGoToRemix,
}) => {
  const [isInspecting, setIsInspecting] = useState(false);
  const currentGarment = eras[currentIndex];
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < eras.length - 1) {
      onSelectIndex(currentIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, eras.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen w-full bg-black text-[#F5F5F0] flex flex-col justify-between pt-16 sm:pt-20 pb-4 overflow-x-hidden"
    >
      {/* Background gallery atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(5, 5, 5, 0.95) 75%)'
        }}
      />

      {/* Main Exhibition Hall */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 my-auto flex flex-col items-center justify-center">
        {/* Gallery composition: Left Floating Notes - Center Garment - Right Floating Notes */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 my-2 sm:my-4">
          <FloatingEditorialLabels details={currentGarment.details} />

          {/* Central focal garment */}
          <div className="order-first lg:order-none w-full max-w-md lg:max-w-lg flex flex-col items-center">
            <GarmentViewer
              garment={currentGarment}
              isInspecting={isInspecting}
              onToggleInspect={() => setIsInspecting(!isInspecting)}
            />
          </div>
        </div>

        {/* Historical Story Narrative & Primary Action CTAs */}
        <HistoricalStory
          garment={currentGarment}
          onGoToGame={onGoToGame}
          onGoToRemix={onGoToRemix}
        />
      </main>

      {/* Bottom Timeline rail */}
      <div className="relative z-10 w-full mt-auto">
        <TimelineRail
          eras={eras}
          currentIndex={currentIndex}
          onSelectIndex={onSelectIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

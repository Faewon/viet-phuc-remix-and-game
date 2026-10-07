import React, { useState, useEffect } from 'react';
import { ERAS_DATA } from './data/eras';
import { LandingScreen } from './components/LandingScreen';
import { Navigation } from './components/Navigation';
import { ExhibitionRoom } from './components/ExhibitionRoom';
import { GameInstallationRoom } from './components/GameInstallationRoom';
import { RemixRoom } from './components/RemixRoom';
import { PhysicalExhibitModal } from './components/PhysicalExhibitModal';

type AppView = 'landing' | 'exhibition' | 'game' | 'remix';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [currentEraIndex, setCurrentEraIndex] = useState<number>(0);
  const [isExhibitQrOpen, setIsExhibitQrOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Handle URL hash routing on initial load and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('exhibit/')) {
        const slug = hash.replace('exhibit/', '');
        const foundIndex = ERAS_DATA.findIndex(
          (era) => era.slug === slug || era.id === slug
        );
        if (foundIndex !== -1) {
          setCurrentEraIndex(foundIndex);
          setCurrentView('exhibition');
        }
      } else if (hash === 'game') {
        setCurrentView('game');
      } else if (hash === 'remix') {
        setCurrentView('remix');
      } else if (hash === 'exhibition') {
        setCurrentView('exhibition');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when era changes in exhibition
  const handleSelectEraIndex = (index: number) => {
    if (index >= 0 && index < ERAS_DATA.length) {
      setCurrentEraIndex(index);
      const selected = ERAS_DATA[index];
      window.history.replaceState(null, '', `#exhibit/${selected.slug}`);
    }
  };

  const handleSelectEraById = (id: string) => {
    const foundIndex = ERAS_DATA.findIndex((era) => era.id === id);
    if (foundIndex !== -1) {
      handleSelectEraIndex(foundIndex);
    }
  };

  const handleSelectEraBySlug = (slug: string) => {
    const foundIndex = ERAS_DATA.findIndex(
      (era) => era.slug === slug || era.id === slug
    );
    if (foundIndex !== -1) {
      handleSelectEraIndex(foundIndex);
      setIsExhibitQrOpen(false);
    }
  };

  // Cinematic view transition helper
  const navigateWithTransition = (view: AppView) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      if (view === 'exhibition') {
        const current = ERAS_DATA[currentEraIndex];
        window.history.replaceState(null, '', `#exhibit/${current.slug}`);
      } else if (view === 'game') {
        window.history.replaceState(null, '', '#game');
      } else if (view === 'remix') {
        window.history.replaceState(null, '', '#remix');
      }
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 280);
  };

  const currentGarment = ERAS_DATA[currentEraIndex];

  return (
    <div className="relative min-h-screen bg-black text-[#F5F5F0] selection:bg-[#F5F5F0] selection:text-black">
      {/* Screen transition veil */}
      <div
        className={`fixed inset-0 z-50 bg-black pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Primary views */}
      {currentView === 'landing' && (
        <LandingScreen onEnter={() => navigateWithTransition('exhibition')} />
      )}

      {currentView !== 'landing' && (
        <>
          {/* Top navigation header */}
          <Navigation
            currentView={currentView}
            onSelectView={(v) => navigateWithTransition(v)}
            onOpenExhibitQr={() => setIsExhibitQrOpen(true)}
            currentEraIndex={currentGarment.index}
            totalEras={`0${ERAS_DATA.length}`}
          />

          {/* Exhibition View */}
          {currentView === 'exhibition' && (
            <ExhibitionRoom
              eras={ERAS_DATA}
              currentIndex={currentEraIndex}
              onSelectIndex={handleSelectEraIndex}
              onGoToGame={() => navigateWithTransition('game')}
              onGoToRemix={() => navigateWithTransition('remix')}
            />
          )}

          {/* Dedicated Game Installation View */}
          {currentView === 'game' && (
            <GameInstallationRoom
              garment={currentGarment}
              onBackToExhibition={() => navigateWithTransition('exhibition')}
              onGoToRemix={() => navigateWithTransition('remix')}
            />
          )}

          {/* Modern Remix Styling Lab View */}
          {currentView === 'remix' && (
            <RemixRoom
              currentGarment={currentGarment}
              onBackToExhibition={() => navigateWithTransition('exhibition')}
              onSelectEraById={handleSelectEraById}
              allEras={ERAS_DATA}
            />
          )}
        </>
      )}

      {/* Physical Exhibit QR / NFC identifier modal */}
      <PhysicalExhibitModal
        garment={currentGarment}
        isOpen={isExhibitQrOpen}
        onClose={() => setIsExhibitQrOpen(false)}
        onSelectEraBySlug={handleSelectEraBySlug}
        allEras={ERAS_DATA}
      />
    </div>
  );
}

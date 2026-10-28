import React, { useState, useRef, useCallback } from 'react';
import { Eye, MoveHorizontal, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  type: 'defect' | 'flawless';
  description: string;
  cause: string;
  fix: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'back-ion',
    x: 28,
    y: 35,
    title: 'Back-Ionization Craters',
    type: 'defect',
    description: 'Starry micro-pinholes and sandpaper texture on the flat face.',
    cause: 'Conveyor hook resistance > 10 Megohms causing trapped electrostatic charge to spark back out through powder layer.',
    fix: 'Scrape hooks to bare metal and drop gun voltage to 45 kV / 18 µA.',
  },
  {
    id: 'orange-peel',
    x: 42,
    y: 70,
    title: 'Heavy Orange Peel (6.2 Mils)',
    type: 'defect',
    description: 'Rippled, textured surface resembling citrus peel with excessive mil build.',
    cause: 'High powder feed air velocity and slow operator stroke speed dumping too much powder on first pass.',
    fix: 'Lower feed pump air, maintain 10" standoff, and target 2.8–3.2 mils.',
  },
  {
    id: 'faraday',
    x: 20,
    y: 80,
    title: 'Faraday Cage Edge Starvation',
    type: 'defect',
    description: 'Powder repelling out of the 90° inner recess and piling up on outer lip.',
    cause: 'Electrostatic field lines shorting to closest grounded perimeter.',
    fix: 'Angle gun 45°, lower kV to 35 kV, and use conical deflector.',
  },
  {
    id: 'flawless-cure',
    x: 78,
    y: 45,
    title: 'Uniform Satin Cure (2.9 Mils)',
    type: 'flawless',
    description: 'Smooth, glass-like flow with zero orange peel and uniform edge wrap.',
    cause: 'Balanced earth grounding (< 0.1 MΩ), proper wash surface energy (> 48 dynes), and verified PMT cure curve.',
    fix: 'Achieved by dialing in grounding, wash titration, and gun microamps.',
  },
];

export const FinishInspector: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full bg-[#454543]/40 border border-white/10 rounded-2xl p-4 sm:p-8 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white">
            The Finish Inspector
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Drag the divider to compare a defective coating against a dialed-in finish. Tap pins for diagnostics.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[#D9A56B]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A56B]/30 border border-[#D9A56B]" />
            <span>Defective (Left)</span>
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8905A]" />
            <span>Flawless (Right)</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Comparison Viewport */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl bg-[#2E2B26]"
      >
        {/* Right (Flawless) Image Base Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/finish-flawless.jpg"
            alt="Flawless powder coated metal finish showing smooth satin sheen and uniform film build"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#2E2B26]/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md border border-[#B8905A]/40 flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8905A]" />
            <span>DIALED-IN CURE (2.9 MILS)</span>
          </div>
        </div>

        {/* Left (Defective) Image Clipped Layer */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
            <img
              src="/images/finish-defective.jpg"
              alt="Defective powder coated metal finish showing orange peel, pinholes, and back-ionization craters"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#2E2B26]/85 backdrop-blur-md text-[#D9A56B] text-xs px-3 py-1.5 rounded-md border border-[#D9A56B]/40 flex items-center gap-2 font-mono">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D9A56B]" />
              <span>DEFECTIVE / REJECT</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
          style={{
            left: `${sliderPosition}%`,
            boxShadow: '0 0 10px rgba(184, 144, 90, 0.8), 0 0 2px white',
          }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#423E37] border-2 border-white flex items-center justify-center shadow-lg text-[#B8905A] hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Interactive Hotspot Pins */}
        {HOTSPOTS.map((hotspot) => {
          const isVisible =
            hotspot.type === 'defect'
              ? hotspot.x < sliderPosition
              : hotspot.x > sliderPosition;

          if (!isVisible) return null;

          return (
            <button
              key={hotspot.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(hotspot);
              }}
              style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
              aria-label={`Inspect ${hotspot.title}`}
            >
              <div
                className={`relative flex items-center justify-center w-7 h-7 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-125 ${
                  hotspot.type === 'defect'
                    ? 'bg-[#D9A56B]/90 border-white text-[#2E2B26]'
                    : 'bg-[#B8905A]/90 border-white text-white'
                }`}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 bg-white" />
                <Info className="w-3.5 h-3.5" />
              </div>

              {/* Tooltip on hover */}
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#2E2B26]/95 border border-white/20 p-2 rounded text-left text-xs shadow-xl backdrop-blur-lg">
                <p className="font-semibold text-white">{hotspot.title}</p>
                <p className="text-white/70 text-[11px] mt-0.5">{hotspot.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Hotspot Detail Drawer / Panel */}
      {activeHotspot && (
        <div className="mt-4 p-4 sm:p-5 rounded-xl bg-[#2E2B26] border border-[#B8905A]/40 text-left transition-all animate-fadeIn">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`tech-tag px-2 py-0.5 rounded text-[11px] font-semibold ${
                    activeHotspot.type === 'defect'
                      ? 'bg-[#D9A56B]/20 text-[#D9A56B] border border-[#D9A56B]/30'
                      : 'bg-[#B8905A]/20 text-[#B8905A] border border-[#B8905A]/30'
                  }`}
                >
                  {activeHotspot.type === 'defect' ? 'DIAGNOSED DEFECT' : 'OPTIMAL FINISH'}
                </span>
                <h4 className="font-semibold text-white text-base">
                  {activeHotspot.title}
                </h4>
              </div>
              <p className="text-sm text-white/80">{activeHotspot.description}</p>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-white/50 hover:text-white text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/10 text-xs sm:text-sm">
            <div>
              <span className="text-[#D9A56B] font-mono text-xs uppercase block mb-1">
                Likely Root Cause
              </span>
              <p className="text-white/75">{activeHotspot.cause}</p>
            </div>
            <div>
              <span className="text-[#B8905A] font-mono text-xs uppercase block mb-1">
                Practical Resolution
              </span>
              <p className="text-white/90 font-medium">{activeHotspot.fix}</p>
            </div>
          </div>
        </div>
      )}

      {/* Quick helper legend */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
        <p className="italic">
          Tip: Grab the center bar or drag horizontally to reveal the surface difference.
        </p>
        <span className="font-mono text-[#B8905A]">
          Terry Petterson Troubleshooting Lab
        </span>
      </div>
    </div>
  );
};

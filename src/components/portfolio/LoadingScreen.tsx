import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setFading(true);
        setTimeout(() => setVisible(false), 500);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Pulsing ring */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-[#00D9FF]/20" />
          <span className="absolute inset-0 animate-ping rounded-full border border-[#00D9FF]/30" />
          <span
            className="absolute inset-2 rounded-full border border-[#00D9FF]/40"
            style={{ animation: "spin 4s linear infinite" }}
          />
          <span
            className="absolute inset-4 rounded-full border-t border-[#00D9FF]"
            style={{ animation: "spin 2s linear infinite reverse" }}
          />
          <span className="font-display text-2xl font-bold tracking-widest text-white">
            RV
          </span>
        </div>

        {/* Branding */}
        <div className="text-center">
          <p className="font-display text-lg font-semibold tracking-[0.25em] text-white">
            RAGHU VAMSHI
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00D9FF]">
            Initializing Experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Loading</span>
            <span className="text-[#00D9FF]">{progress}%</span>
          </div>
          <div className="mt-2 h-0.5 w-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Music, Pause } from "lucide-react";
import { config } from "@/data/stars";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      el.volume = volume;
      await el.play();
      setPlaying(true);
      setOpen(true);
    } catch {
      /* bloqueado pelo navegador */
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Troque a música em src/data/stars.ts (config.musicUrl) */}
      <audio ref={audioRef} src={config.musicUrl} loop preload="none" />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center overflow-hidden rounded-full border border-border/70 bg-panel/70 px-3 py-2 backdrop-blur-md"
          >
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="Volume"
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-6 w-24"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={toggle}
        onDoubleClick={() => setOpen((v) => !v)}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border/70 bg-panel/70 text-star backdrop-blur-md transition-colors hover:border-star/50"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
      </button>
    </div>
  );
}
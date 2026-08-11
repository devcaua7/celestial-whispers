import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Music, Pause, Upload, Volume1, Volume2, VolumeX } from "lucide-react";
import { config } from "@/data/stars";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [muted, setMuted] = useState(false);
  const [src, setSrc] = useState(config.musicUrl);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = muted ? 0 : volume;
    el.muted = muted;
  }, [volume, muted]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      el.volume = muted ? 0 : volume;
      await el.play();
      setPlaying(true);
      setOpen(true);
    } catch {
      /* bloqueado pelo navegador */
    }
  };

  const onPickFile = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSrc(url);
    const el = audioRef.current;
    if (el) {
      el.load();
      window.setTimeout(() => {
        el.volume = muted ? 0 : volume;
        void el.play().then(() => setPlaying(true)).catch(() => undefined);
      }, 60);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Troque a música em src/data/stars.ts (config.musicUrl) */}
      <audio ref={audioRef} src={src} loop preload="none" />
      <input
        ref={fileRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={(e) => onPickFile(e.target.files?.[0])}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center gap-2 overflow-hidden rounded-full border border-border/70 bg-panel/70 px-3 py-2 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className="text-star/80 transition-colors hover:text-star"
            >
              {muted ? (
                <VolumeX className="h-4 w-4" />
              ) : volume > 0.5 ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <Volume1 className="h-4 w-4" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="Volume"
              onChange={(e) => {
                setVolume(Number(e.target.value));
                setMuted(false);
              }}
              className="h-6 w-24 accent-[var(--star)]"
            />
            <span className="w-8 shrink-0 text-right text-[0.6rem] tabular-nums text-muted-foreground">
              {Math.round((muted ? 0 : volume) * 100)}
            </span>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              aria-label="Escolher música do dispositivo"
              className="text-muted-foreground transition-colors hover:text-star"
            >
              <Upload className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={toggle}
        onContextMenu={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border/70 bg-panel/70 text-star backdrop-blur-md transition-colors hover:border-star/50"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
      </button>
    </div>
  );
}
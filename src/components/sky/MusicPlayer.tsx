import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Music, Pause, Play, Upload, Volume1, Volume2, VolumeX } from "lucide-react";
import { config } from "@/data/stars";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [muted, setMuted] = useState(false);
  const [src, setSrc] = useState(config.musicUrl);
  const [label, setLabel] = useState("Trilha do céu");

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = muted ? 0 : volume;
    el.muted = muted;
  }, [volume, muted]);

  const play = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.volume = muted ? 0 : volume;
      await el.play();
      setPlaying(true);
    } catch {
      /* bloqueado pelo navegador */
    }
  };

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    await play();
  };

  const onPickFile = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSrc(url);
    setLabel(file.name.replace(/\.[^.]+$/, ""));
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
    <div className="flex items-end gap-2">
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
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className="flex w-[15rem] flex-col gap-3 rounded-2xl border border-border/70 bg-panel/85 p-4 shadow-panel backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pausar música" : "Tocar música"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-star/15 text-star ring-1 ring-star/40"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <span className="min-w-0 flex-1 truncate text-[0.68rem] tracking-[0.12em] text-muted-foreground">
                {label}
              </span>
            </div>
            <div className="flex items-center gap-2">
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
              className="h-6 flex-1 accent-[var(--star)]"
            />
            <span className="w-8 shrink-0 text-right text-[0.6rem] tabular-nums text-muted-foreground">
              {Math.round((muted ? 0 : volume) * 100)}
            </span>
            </div>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex min-h-10 items-center justify-center gap-2 rounded-full border border-border/70 px-3 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-star/50 hover:text-star"
            >
              <Upload className="h-3.5 w-3.5" />
              Escolher música
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          if (!open && !playing) void play();
        }}
        aria-label="Controles de música"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border/70 bg-panel/70 text-star backdrop-blur-md transition-colors hover:border-star/50"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
      </button>
    </div>
  );
}
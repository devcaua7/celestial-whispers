import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import type { SpecialStar } from "@/data/stars";

type Props = {
  star: SpecialStar | null;
  onClose: () => void;
  onNext: () => void;
  hasNext: boolean;
};

export function StarMessage({ star, onClose, onNext, hasNext }: Props) {
  return (
    <AnimatePresence>
      {star && (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-void/70 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Estrela ${String(star.id).padStart(2, "0")}`}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/70 bg-panel/85 p-7 shadow-panel backdrop-blur-xl sm:p-9"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-star-glow blur-3xl"
            />
            <div className="relative">
              <motion.p
                className="text-[0.7rem] uppercase tracking-[0.4em] text-star/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 }}
              >
                ⭐ Estrela #{String(star.id).padStart(2, "0")}
              </motion.p>
              <motion.h2
                className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {star.title}
              </motion.h2>
              <motion.p
                className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground sm:text-lg"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.7 }}
              >
                {star.message}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-11 rounded-full border border-border px-6 py-2.5 text-sm text-muted-foreground transition-colors hover:border-star/50 hover:text-foreground"
                >
                  <X className="mr-2 inline h-3.5 w-3.5" />
                  Fechar
                </button>
                {hasNext && (
                  <button
                    type="button"
                    onClick={onNext}
                    className="min-h-11 rounded-full bg-star/15 px-6 py-2.5 text-sm text-star ring-1 ring-star/40 transition-all hover:bg-star/25"
                  >
                    Próxima estrela
                    <ArrowRight className="ml-2 inline h-3.5 w-3.5" />
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
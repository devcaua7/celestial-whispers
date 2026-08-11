import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { completion, finalStar } from "@/data/stars";
import { StarShape } from "./StarShape";

type Props = {
  /** "hidden" | "invite" (12/12) | "dismissed" | "star" (estrela final no céu) | "reveal" */
  stage: "hidden" | "invite" | "dismissed" | "star" | "reveal";
  onDiscover: () => void;
  onDismiss: () => void;
  onOpenFinal: () => void;
  onCloseReveal: () => void;
  onRestart: () => void;
};

export function FinalStar({
  stage,
  onDiscover,
  onDismiss,
  onOpenFinal,
  onCloseReveal,
  onRestart,
}: Props) {
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (stage !== "reveal") {
      setLine(0);
      return;
    }
    const timers = finalStar.lines.map((_, i) =>
      window.setTimeout(() => setLine(i + 1), 900 + i * 3200),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [stage]);

  return (
    <>
      {/* Convite ao completar 12/12 */}
      <AnimatePresence>
        {stage === "invite" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-void/80 backdrop-blur-md" />
            <motion.div
              className="relative max-w-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <motion.span
                aria-hidden
                className="mx-auto mb-8 block w-fit"
                animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7], rotate: [0, 12, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                <StarShape points={4} className="h-7 w-7 text-star drop-shadow-[0_0_14px_var(--star)]" />
              </motion.span>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                {completion.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {completion.subtitle}
              </p>
              <button
                type="button"
                onClick={onDiscover}
                className="mt-9 min-h-12 rounded-full bg-star/15 px-9 py-3 text-sm uppercase tracking-[0.25em] text-star ring-1 ring-star/40 transition-all hover:bg-star/25"
              >
                {completion.cta}
              </button>
              <div>
                <button
                  type="button"
                  onClick={onDismiss}
                  className="mt-5 min-h-11 px-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Continuar explorando
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* A última estrela, no centro do céu */}
      <AnimatePresence>
        {stage === "star" && (
          <motion.button
            type="button"
            onClick={onOpenFinal}
            aria-label="A última estrela"
            className="fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-8"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative block">
              <motion.span
                aria-hidden
                className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-star-glow blur-2xl"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.span
                aria-hidden
                className="relative block"
                animate={{ scale: [1, 1.12, 1], rotate: [0, 360] }}
                transition={{
                  scale: { duration: 2.4, repeat: Infinity },
                  rotate: { duration: 90, repeat: Infinity, ease: "linear" },
                }}
              >
                <StarShape
                  points={5}
                  className="h-12 w-12 text-star drop-shadow-[0_0_18px_var(--star)]"
                />
              </motion.span>
            </span>
            <motion.span
              className="absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.35em] text-star/70"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.2, repeat: Infinity }}
            >
              a última estrela
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Experiência final */}
      <AnimatePresence>
        {stage === "reveal" && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center px-7 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }}
          >
            <div className="absolute inset-0 bg-void/95" />
            <motion.span
              aria-hidden
              className="relative mb-12 block"
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <StarShape points={5} className="h-9 w-9 text-star drop-shadow-[0_0_16px_var(--star)]" />
            </motion.span>
            <div className="relative flex max-w-xl flex-col gap-6">
              {finalStar.lines.slice(0, line).map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4 }}
                  className={
                    i === finalStar.lines.length - 1
                      ? "font-display text-2xl text-star sm:text-3xl"
                      : "text-lg leading-relaxed text-muted-foreground sm:text-xl"
                  }
                >
                  {text}
                </motion.p>
              ))}
            </div>
            {line >= finalStar.lines.length && (
              <motion.div
                className="relative mt-14 flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.2 }}
              >
                {finalStar.signature && (
                  <p className="text-xs tracking-[0.3em] text-muted-foreground">
                    {finalStar.signature}
                  </p>
                )}
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={onCloseReveal}
                    className="min-h-11 rounded-full border border-border px-7 py-2.5 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:border-star/50 hover:text-foreground"
                  >
                    Voltar ao céu
                  </button>
                  <button
                    type="button"
                    onClick={onRestart}
                    className="min-h-11 rounded-full bg-star/10 px-7 py-2.5 text-xs uppercase tracking-[0.25em] text-star ring-1 ring-star/40 transition-colors hover:bg-star/20"
                  >
                    Voltar ao início
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
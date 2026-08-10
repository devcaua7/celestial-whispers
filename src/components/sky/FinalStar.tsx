import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { completion, finalStar } from "@/data/stars";

type Props = {
  /** "hidden" | "invite" (12/12) | "star" (estrela final no céu) | "reveal" */
  stage: "hidden" | "invite" | "star" | "reveal";
  onDiscover: () => void;
  onOpenFinal: () => void;
  onCloseReveal: () => void;
};

export function FinalStar({ stage, onDiscover, onOpenFinal, onCloseReveal }: Props) {
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
                className="mx-auto mb-8 block h-2.5 w-2.5 rounded-full bg-star shadow-star"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              />
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
                className="relative block h-4 w-4 rounded-full bg-star shadow-star"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
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
              className="relative mb-12 block h-3 w-3 rounded-full bg-star shadow-star"
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
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
                <button
                  type="button"
                  onClick={onCloseReveal}
                  className="min-h-11 rounded-full border border-border px-7 py-2.5 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:border-star/50 hover:text-foreground"
                >
                  Voltar ao céu
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
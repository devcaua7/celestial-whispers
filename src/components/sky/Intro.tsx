import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { config, intro } from "@/data/stars";

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setStep(1), 2200);
    const t2 = window.setTimeout(() => setStep(2), 4600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center px-7 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="absolute inset-0 bg-void/85 backdrop-blur-[2px]" />
      <div className="relative flex max-w-xl flex-col items-center gap-6">
        <motion.h1
          className="font-display text-2xl leading-snug text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          {intro.line1}
        </motion.h1>

        {step >= 1 && (
          <motion.p
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            {intro.line2}
          </motion.p>
        )}

        {step >= 2 && (
          <motion.button
            type="button"
            onClick={onEnter}
            className="mt-6 min-h-12 rounded-full bg-star/15 px-10 py-3 text-xs uppercase tracking-[0.35em] text-star ring-1 ring-star/40 transition-all hover:bg-star/25"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {intro.cta}
          </motion.button>
        )}
      </div>

      <motion.p
        className="absolute bottom-8 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.6 }}
      >
        {config.signature}
      </motion.p>
    </motion.div>
  );
}
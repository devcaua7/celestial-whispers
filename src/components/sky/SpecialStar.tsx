import { motion } from "motion/react";
import type { SpecialStar as SpecialStarData } from "@/data/stars";
import { StarShape } from "./StarShape";

type Props = {
  star: SpecialStarData;
  index: number;
  discovered: boolean;
  active: boolean;
  onSelect: () => void;
};

export function SpecialStar({ star, index, discovered, active, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={`Estrela ${String(star.id).padStart(2, "0")}${discovered ? " (descoberta)" : ""}`}
      className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer touch-manipulation rounded-full p-5 outline-none sm:p-4"
      style={{ left: `${star.x}%`, top: `${star.y}%` }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: active ? 1.35 : 1 }}
      transition={{ delay: 0.15 + index * 0.09, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="relative block">
        <motion.span
          aria-hidden
          className={
            discovered
              ? "absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-star-soft blur-lg"
              : "absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-star-glow blur-lg"
          }
          animate={{ opacity: active ? 0.95 : [0.3, 0.7, 0.3], scale: active ? 1.6 : [1, 1.18, 1] }}
          transition={{ duration: 3.4 + (index % 4) * 0.5, repeat: active ? 0 : Infinity }}
        />
        <motion.span
          aria-hidden
          className="relative block"
          animate={{ opacity: [0.75, 1, 0.75], rotate: discovered ? 0 : [0, 8, 0] }}
          transition={{ duration: 2.4 + (index % 5) * 0.35, repeat: Infinity }}
        >
          <StarShape
            points={index % 3 === 0 ? 5 : 4}
            className={
              discovered
                ? "h-5 w-5 text-star-soft drop-shadow-[0_0_8px_var(--star-soft)] sm:h-4 sm:w-4"
                : "h-7 w-7 text-star drop-shadow-[0_0_10px_var(--star)] sm:h-6 sm:w-6"
            }
          />
        </motion.span>
        {discovered && (
          <span
            aria-hidden
            className="absolute -right-1.5 -top-1.5 h-1 w-1 rounded-full bg-accent/80"
          />
        )}
      </span>
    </motion.button>
  );
}
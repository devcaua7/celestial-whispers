import { motion } from "motion/react";

export function ProgressCounter({ count, total }: { count: number; total: number }) {
  return (
    <motion.div
      className="pointer-events-none flex items-center gap-3"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <span className="text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
        {count} / {total} estrelas descobertas
      </span>
      <span className="hidden h-px w-16 overflow-hidden bg-border sm:block">
        <motion.span
          className="block h-px bg-star"
          initial={false}
          animate={{ width: `${(count / total) * 100}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </span>
    </motion.div>
  );
}
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { config } from "@/data/stars";

function remaining(now: number) {
  const target = new Date(
    config.birthday.year,
    config.birthday.month - 1,
    config.birthday.day,
    0,
    0,
    0,
  );
  const diff = target.getTime() - now;
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
  };
}

export function DateBadge() {
  const [left, setLeft] = useState<{ d: number; h: number; m: number } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tick = () => setLeft(remaining(Date.now()));
    tick();
    setReady(true);
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  const label = `${String(config.birthday.day).padStart(2, "0")}.${String(
    config.birthday.month,
  ).padStart(2, "0")}`;

  return (
    <motion.div
      className="pointer-events-none text-right"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.9 }}
    >
      <p className="font-display text-sm tracking-[0.3em] text-star/90">{label}</p>
      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
        {ready && left ? `faltam ${left.d}d ${left.h}h ${left.m}m` : "Uma data especial."}
      </p>
    </motion.div>
  );
}
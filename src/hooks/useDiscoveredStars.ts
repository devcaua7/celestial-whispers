import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ceu-interativo:descobertas";

export function useDiscoveredStars(total: number) {
  const [discovered, setDiscovered] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setDiscovered(parsed.filter((n) => typeof n === "number"));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(discovered));
    } catch {
      /* ignore */
    }
  }, [discovered, hydrated]);

  const discover = useCallback((id: number) => {
    setDiscovered((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const reset = useCallback(() => setDiscovered([]), []);

  return {
    discovered,
    discover,
    reset,
    hydrated,
    count: discovered.length,
    total,
    isComplete: hydrated && discovered.length >= total,
    has: (id: number) => discovered.includes(id),
  };
}
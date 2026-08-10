import { useCallback, useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { StarField } from "@/components/sky/StarField";
import { SpecialStar } from "@/components/sky/SpecialStar";
import { StarMessage } from "@/components/sky/StarMessage";
import { ProgressCounter } from "@/components/sky/ProgressCounter";
import { MusicPlayer } from "@/components/sky/MusicPlayer";
import { DateBadge } from "@/components/sky/DateBadge";
import { FinalStar } from "@/components/sky/FinalStar";
import { Intro } from "@/components/sky/Intro";
import { useDiscoveredStars } from "@/hooks/useDiscoveredStars";
import { stars } from "@/data/stars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Um céu para você — 04.09" },
      {
        name: "description",
        content:
          "Um céu interativo: cada estrela guarda uma pequena coisa que eu gostaria de dizer para você.",
      },
      { property: "og:title", content: "Um céu para você — 04.09" },
      {
        property: "og:description",
        content: "Doze estrelas, doze mensagens e uma última estrela que não estava aqui antes.",
      },
    ],
  }),
  component: Index,
});

type FinalStage = "hidden" | "invite" | "star" | "reveal";

function Index() {
  const [entered, setEntered] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [finalStage, setFinalStage] = useState<FinalStage>("hidden");
  const { discovered, discover, has, count, total, isComplete, hydrated } = useDiscoveredStars(
    stars.length,
  );

  const activeStar = useMemo(() => stars.find((s) => s.id === activeId) ?? null, [activeId]);

  // Ao completar as 12, convida para a última estrela.
  useEffect(() => {
    if (!entered || !isComplete || activeId !== null) return;
    if (finalStage === "hidden") {
      const t = window.setTimeout(() => setFinalStage("invite"), 1200);
      return () => window.clearTimeout(t);
    }
  }, [entered, isComplete, activeId, finalStage]);

  const openStar = useCallback(
    (id: number) => {
      setActiveId(id);
      discover(id);
    },
    [discover],
  );

  const next = useCallback(() => {
    const undiscovered = stars.find((s) => s.id !== activeId && !discovered.includes(s.id));
    const fallbackIndex = stars.findIndex((s) => s.id === activeId);
    const target = undiscovered ?? stars[(fallbackIndex + 1) % stars.length];
    if (target) {
      setActiveId(null);
      window.setTimeout(() => openStar(target.id), 260);
    }
  }, [activeId, discovered, openStar]);

  const hasNext = count < total || stars.length > 1;

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-void">
      <StarField brightness={isComplete ? 1 : count / Math.max(total, 1) * 0.35} />

      {/* Camada de estrelas especiais */}
      <div className="fixed inset-0 z-20">
        {entered &&
          hydrated &&
          finalStage !== "star" &&
          finalStage !== "reveal" &&
          stars.map((star, i) => (
            <SpecialStar
              key={star.id}
              star={star}
              index={i}
              discovered={has(star.id)}
              active={activeId === star.id}
              onSelect={() => openStar(star.id)}
            />
          ))}
      </div>

      {/* HUD */}
      {entered && (
        <>
          <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between gap-4 px-5 pt-6 sm:px-8">
            <div className="min-w-0">
              <ProgressCounter count={count} total={total} />
            </div>
            <div className="shrink-0">
              <DateBadge />
            </div>
          </div>

          <div className="fixed bottom-6 right-5 z-30 sm:right-8">
            <MusicPlayer />
          </div>

          <motion.p
            className="pointer-events-none fixed bottom-8 left-5 z-30 max-w-[55%] text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground/80 sm:left-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.4 }}
          >
            Explore o céu. Toque nas estrelas que brilham.
          </motion.p>
        </>
      )}

      <StarMessage
        star={activeStar}
        onClose={() => setActiveId(null)}
        onNext={next}
        hasNext={hasNext}
      />

      <FinalStar
        stage={finalStage}
        onDiscover={() => setFinalStage("star")}
        onOpenFinal={() => setFinalStage("reveal")}
        onCloseReveal={() => setFinalStage("star")}
      />

      <AnimatePresence>{!entered && <Intro onEnter={() => setEntered(true)} />}</AnimatePresence>
    </main>
  );
}

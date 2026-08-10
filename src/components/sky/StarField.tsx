import { useEffect, useRef } from "react";

/**
 * Céu estrelado (canvas) — evolução do céu original:
 * nebulosa, poeira cósmica, estrelas em deriva e meteoros ocasionais.
 * Puramente decorativo: não é clicável.
 */
type Props = {
  /** 0..1 — intensidade extra do céu (usado ao completar as 12 estrelas) */
  brightness?: number;
};

const starColors = ["255,255,255", "255,233,166", "166,216,255", "196,181,253"];

export function StarField({ brightness = 0 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const brightnessRef = useRef(brightness);
  brightnessRef.current = brightness;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    type Star = { x: number; y: number; z: number; color: string; tw: number; sp: number };
    type Dust = { x: number; y: number; z: number; o: number };
    type Meteor = { x: number; y: number; vx: number; vy: number };

    let stars: Star[] = [];
    let dust: Dust[] = [];
    let meteors: Meteor[] = [];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.round((w * h) / 2600);
      const count = Math.max(220, Math.min(density, 700));

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * w,
        color: starColors[Math.floor(Math.random() * starColors.length)]!,
        tw: Math.random() * Math.PI * 2,
        sp: 0.5 + Math.random() * 1.2,
      }));

      dust = Array.from({ length: Math.round(count / 6) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * w,
        o: Math.random() * 0.1,
      }));
    };

    build();

    const meteorTimer = window.setInterval(() => {
      if (meteors.length < 1 && Math.random() > 0.35) {
        meteors.push({ x: Math.random() * w, y: -180, vx: 1.6, vy: 2.4 });
      }
    }, 9000);

    const drawNebula = (boost: number) => {
      const paint = (cx: number, cy: number, r: number, c1: string, c2: string) => {
        const g = ctx.createRadialGradient(cx, cy, 20, cx, cy, r);
        g.addColorStop(0, c1);
        g.addColorStop(0.55, c2);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      };
      const r = Math.max(w, h) * 0.75;
      paint(
        w * 0.28,
        h * 0.34,
        r,
        `rgba(109,60,190,${0.16 + boost * 0.14})`,
        `rgba(40,90,190,${0.05 + boost * 0.05})`,
      );
      paint(
        w * 0.78,
        h * 0.72,
        r * 0.8,
        `rgba(30,80,170,${0.12 + boost * 0.12})`,
        `rgba(20,40,110,${0.04 + boost * 0.05})`,
      );
    };

    let frame = 0;
    let raf = 0;
    const cxOf = () => w / 2;
    const cyOf = () => h / 2;

    const animate = () => {
      frame += 1;
      const boost = brightnessRef.current;

      ctx.fillStyle = "#02030a";
      ctx.fillRect(0, 0, w, h);
      drawNebula(boost);

      const cx = cxOf();
      const cy = cyOf();

      for (const p of dust) {
        p.z -= 0.35;
        if (p.z <= 0) p.z = w;
        const k = w / p.z;
        ctx.fillStyle = `rgba(255,255,255,${p.o * (1 + boost)})`;
        ctx.beginPath();
        ctx.arc((p.x - cx) * k + cx, (p.y - cy) * k + cy, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of stars) {
        s.z -= 0.5 * s.sp;
        if (s.z <= 0) {
          s.z = w;
          s.x = Math.random() * w;
          s.y = Math.random() * h;
        }
        const k = w / s.z;
        const sx = (s.x - cx) * k + cx;
        const sy = (s.y - cy) * k + cy;
        const size = (1 - s.z / w) * 1.9 + 0.2;
        const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(s.tw + frame * 0.012 * s.sp));
        ctx.fillStyle = `rgba(${s.color},${Math.min(1, twinkle * (0.75 + boost * 0.35))})`;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fill();
      }

      meteors = meteors.filter((m) => m.y < h + 320);
      for (const m of meteors) {
        m.x += m.vx;
        m.y += m.vy;
        const g = ctx.createLinearGradient(m.x, m.y, m.x - 180, m.y - 180);
        g.addColorStop(0, "rgba(255,255,255,0.9)");
        g.addColorStop(0.35, "rgba(255,225,160,0.5)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - 190, m.y - 190);
        ctx.stroke();
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(meteorTimer);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  );
}
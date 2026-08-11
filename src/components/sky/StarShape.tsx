type Props = {
  className?: string;
  /** número de pontas */
  points?: number;
};

/** Estrela de 4 ou 5 pontas em SVG (usada nas estrelas clicáveis). */
export function StarShape({ className, points = 4 }: Props) {
  const path =
    points === 5
      ? "M50 3 L61.8 35.5 L96 37.5 L69 59 L78.5 92 L50 73 L21.5 92 L31 59 L4 37.5 L38.2 35.5 Z"
      : "M50 0 C54 32 68 46 100 50 C68 54 54 68 50 100 C46 68 32 54 0 50 C32 46 46 32 50 0 Z";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden focusable="false">
      <path d={path} fill="currentColor" />
    </svg>
  );
}
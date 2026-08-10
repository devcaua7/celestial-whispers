/**
 * ============================================================
 *  PERSONALIZAÇÃO — edite tudo por aqui.
 * ============================================================
 */

export const config = {
  /** Nome dela (usado em textos discretos) */
  herName: "Sthephanie",
  /** Assinatura discreta */
  signature: "Cauã & Sthephanie",
  /** Data do aniversário (mês começa em 1) */
  birthday: { day: 4, month: 9, year: 2026 },
  /** Música de fundo — troque a URL por qualquer arquivo .mp3 */
  musicUrl:
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5c2dbb6c38.mp3?filename=space-atmosphere-ambient-110397.mp3",
};

/** Abertura (misteriosa) */
export const intro = {
  line1: "Você já conhece esse céu...",
  line2: "Mas talvez ainda não tenha visto tudo que existe nele.",
  cta: "Explorar",
};

export type SpecialStar = {
  id: number;
  title: string;
  message: string;
  /** posição em % da tela (x, y) — ajuste livremente */
  x: number;
  y: number;
};

/**
 * As 12 estrelas especiais.
 * Para adicionar/remover estrelas basta editar esta lista:
 * o contador, o céu e a progressão se ajustam automaticamente.
 */
export const stars: SpecialStar[] = [
  {
    id: 1,
    title: "Seu sorriso",
    message:
      "Tem alguma coisa no seu sorriso que consegue mudar completamente o meu dia. Parece pequeno, mas muda tudo de lugar aqui dentro.",
    x: 16,
    y: 24,
  },
  {
    id: 2,
    title: "O seu jeito",
    message:
      "Você tem um jeito bem seu de falar as coisas — meio devagar, meio de lado — e eu acho que já me acostumei a esperar por isso.",
    x: 33,
    y: 15,
  },
  {
    id: 3,
    title: "Teimosa do bem",
    message:
      "Você é teimosa quando acredita em algo, e eu gosto disso. É bonito ver alguém defender o que pensa sem precisar levantar a voz.",
    x: 52,
    y: 22,
  },
  {
    id: 4,
    title: "Uma lembrança",
    message:
      "Eu lembro de uma conversa nossa que não tinha assunto nenhum e mesmo assim durou horas. Foi ali que eu entendi que não era só conversa.",
    x: 71,
    y: 17,
  },
  {
    id: 5,
    title: "O que eu admiro",
    message:
      "Você continua indo, mesmo nos dias em que ninguém veria se você parasse. Isso é coragem, e quase nunca é reconhecido.",
    x: 86,
    y: 30,
  },
  {
    id: 6,
    title: "Detalhe favorito",
    message:
      "Aquele silêncio de meio segundo antes de você rir. É o meu detalhe favorito, e você nem sabe que ele existe.",
    x: 12,
    y: 48,
  },
  {
    id: 7,
    title: "Coisas que te entregam",
    message:
      "Certas músicas, certos horários da noite, certas frases jogadas. Nenhuma delas fala de você e todas me lembram você.",
    x: 29,
    y: 58,
  },
  {
    id: 8,
    title: "Sobre estrelas",
    message:
      "A luz das estrelas que a gente vê saiu de lá muito antes da gente existir. Gosto de pensar que algumas coisas simplesmente estavam a caminho.",
    x: 48,
    y: 52,
  },
  {
    id: 9,
    title: "Suspense",
    message:
      "Você gosta de histórias em que nada é o que parece. Eu gosto de te ver descobrindo — você lê como quem interroga o livro.",
    x: 66,
    y: 60,
  },
  {
    id: 10,
    title: "Do jeito que você é",
    message:
      "Não precisa ser mais leve, mais calma nem mais nada. Do jeito que você é já é a versão que eu escolheria de novo.",
    x: 84,
    y: 55,
  },
  {
    id: 11,
    title: "Se eu fosse sincero",
    message:
      "Tem dias em que eu queria conseguir dizer isso olhando pra você, sem rodeio: você virou uma das melhores partes da minha rotina.",
    x: 24,
    y: 76,
  },
  {
    id: 12,
    title: "A décima segunda",
    message:
      "Eu poderia ter escrito uma carta. Mas achei que você merecia algo que ninguém mais tivesse — então fiz um céu, e coloquei você nele.",
    x: 62,
    y: 80,
  },
];

/** Mensagens da tela de conclusão (12/12) */
export const completion = {
  title: "Você encontrou todas.",
  subtitle: "Mas ainda existe uma estrela que não estava aqui antes.",
  cta: "Descobrir",
};

/**
 * ESTRELA FINAL — edite livremente.
 * Cada string aparece em sequência, com fade.
 * Escreva aqui a sua própria mensagem final.
 */
export const finalStar = {
  lines: [
    "Algumas coisas são difíceis de colocar em palavras.",
    "Então eu preferi criar um lugar para elas.",
    "Feliz aniversário. ⭐",
  ],
  /** Assinatura final (opcional — deixe "" para esconder) */
  signature: "",
};
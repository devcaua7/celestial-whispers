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
    "/music/musica-sthepahanie.mp3",
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
    title: "Seu olhar",
    message:
      "Seu olhar tem um jeito estranho de ficar na minha cabeça. Às vezes eu lembro de como você me olhou e, mesmo depois, parece que aquele momento ainda ficou aqui comigo.",
    x: 16,
    y: 24,
  },
  {
    id: 2,
    title: "O seu jeito",
    message:
      "Você tem um jeito que é só seu, difícil de entender e impossível de ignorar. Às vezes eu acho que já descobri como você funciona, aí você faz alguma coisa diferente e me deixa tentando te entender de novo. Acho que você virou uma historia  que eu gosto de tentar decifrar.",
    x: 33,
    y: 15,
  },
  {
    id: 3,
    title: "Suas implicâncias",
    message:
      "Você discorda de quase tudo que eu falo, e eu ainda não descobri se é porque você realmente pensa diferente ou se essa é só a sua maneira de flertar comigo implicando.",
    x: 52,
    y: 22,
  },
  {
    id: 4,
    title: "Uma lembrança",
    message:
      "Eu lembro certinho da primeira vez que te vi, lá no Poly. Lembro de olhar pra você e pensar, quase na mesma hora: “essa é a menina mais linda que eu já vi”. E o mais engraçado é que, mesmo depois de tanto tempo, eu ainda acho que aquele primeiro pensamento estava certo.",
    x: 71,
    y: 17,
  },
  {
    id: 5,
    title: "O que eu admiro",
    message:
      "Talvez seja por isso que você escolheu a enfermagem. Você tem um coração bom, e acho que cuidar das pessoas combina muito com você. gosto de perceber que aquilo que você é por dentro também aparece no caminho que escolheu seguir.",
    x: 86,
    y: 30,
  },
  {
    id: 6,
    title: "Detalhe favorito",
    message:
      "Acho que um dos meus detalhes favoritos em você é a sua voz. Eu gosto muito de ouvir você falando, quando vc manda um audio simples. Tem alguma coisa no seu jeito de falar que eu gosto de ficar ouvindo.",
    x: 12,
    y: 48,
  },
  {
    id: 7,
    title: "Coisas que te entregam",
    message:
      "Certas músicas, alguns gostos parecidos e qualquer coisa doce já são suficientes pra me fazer lembrar de vc bb . Acho que você deixou um pouco de você em coisas que eu nem imaginava.",
    x: 29,
    y: 58,
  },
  {
    id: 8,
    title: "Sobre estrelas",
    message:
      "Eu sempre soube que você gosta de estrelas. Talvez seja porque você também gosta dessas coisas que não precisam fazer barulho pra chamar atenção.",
    x: 48,
    y: 52,
  },
  {
    id: 9,
    title: "Suspense",
    message:
      "Acho que entendo por que você gosta de suspense. Tem sempre alguma coisa para descobrir, e você parece gostar justamente disso.",
    x: 66,
    y: 60,
  },
  {
    id: 10,
    title: "Do jeito que você é",
    message:
      "Você tem um jeito único. Não sei explicar exatamente o que é, mas tem alguma coisa em você que simplesmente não se encontra em qualquer pessoa.",
    x: 84,
    y: 55,
  },
  {
    id: 11,
    title: "Se eu fosse sincero",
    message:
      "Tem dias em que eu queria conseguir dizer isso olhando pra você, você virou uma das melhores partes da minha rotina.",
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
  signature: "cauã ",
};
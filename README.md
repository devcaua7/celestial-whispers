# Celestial Whispers

Quero aperfeiçoar o projeto atual que já existe neste workspace.

IMPORTANTE:

- NÃO recrie o projeto do zero.

- NÃO substitua a identidade visual atual.

- NÃO remova funcionalidades que já estão funcionando.

- Aproveite a estrutura, componentes, animações e estética que já existem.

- Faça uma evolução do projeto atual.

- O projeto é um presente de aniversário pessoal e romântico, então quero uma experiência elegante, cinematográfica e emocional, sem ficar infantil ou exageradamente romântica.

- O site deve funcionar perfeitamente em desktop e principalmente em celular.

## CONCEITO

O projeto é um "céu interativo".

Já existe um céu estrelado como plano de fundo, com estrelas, uma estética escura e uma experiência relacionada a uma viagem.

Agora quero transformar esse céu em uma experiência interativa.

A ideia principal é:

"Cada estrela guarda uma pequena coisa que eu gostaria de dizer para ela."

Ela poderá explorar o céu e clicar em estrelas especiais.

As estrelas comuns continuam existindo apenas como decoração.

Algumas estrelas serão especiais e poderão ser clicadas.

---

# 1. VISUAL

Mantenha a estética atual do projeto:

- fundo preto/azul muito escuro;

- céu estrelado;

- tons de azul escuro;

- pequenos detalhes roxos;

- estrelas douradas/brancas;

- aparência elegante;

- sensação de espaço;

- animações suaves;

- visual cinematográfico.

Não quero:

- excesso de corações;

- excesso de rosa;

- visual infantil;

- aparência de template genérico;

- grandes textos românticos ocupando a tela.

Quero algo sofisticado, como uma experiência digital personalizada.

A interface deve parecer um pequeno universo interativo.

---

# 2. ESTRELAS DE FUNDO

Mantenha as estrelas pequenas que já existem.

Elas devem continuar se movimentando ou piscando suavemente.

Não deixe todas as estrelas clicáveis.

Crie uma diferenciação clara:

ESTRELAS NORMAIS:

- pequenas;

- discretas;

- apenas decorativas.

ESTRELAS ESPECIAIS:

- ligeiramente maiores;

- brilho dourado ou branco;

- animação de pulsação;

- pequeno efeito de glow;

- cursor indicando interação;

- devem chamar atenção naturalmente.

Tenha aproximadamente 10 a 15 estrelas especiais.

---

# 3. ESTRELAS CLICÁVEIS

Cada estrela especial deve possuir uma mensagem diferente.

Quando a pessoa clicar em uma estrela:

1. A estrela aumenta levemente.

2. Surge um brilho ao redor dela.

3. Uma linha ou pequeno efeito visual conecta a estrela ao painel.

4. Abre um painel/modal elegante.

5. O painel mostra:

"⭐ Estrela #01"

Título da mensagem

Texto personalizado.

Exemplo:

Estrela #01

"Seu sorriso"

"Tem alguma coisa no seu sorriso que consegue mudar completamente o meu dia."

O texto deve aparecer com uma animação suave.

Adicionar botão:

"Fechar"

e opcionalmente:

"Próxima estrela →"

---

# 4. MENSAGENS

Crie inicialmente 12 estrelas especiais.

Use mensagens diferentes e naturais.

Não quero frases extremamente genéricas de internet.

As mensagens devem abordar temas diferentes:

1. sorriso

2. jeito dela

3. personalidade

4. uma lembrança

5. algo que admiro

6. algo que gosto nela

7. uma coisa que me faz lembrar dela

8. algo relacionado às estrelas

9. algo relacionado aos livros/suspense

10. algo relacionado ao jeito dela

11. uma mensagem mais emocional

12. uma mensagem especial final

IMPORTANTE:

Deixe todas as mensagens organizadas em um único arquivo/estrutura de dados para que eu possa editar facilmente depois.

Por exemplo:

const stars = [

  {

    id: 1,

    title: "...",

    message: "..."

  }

]

Não espalhe os textos pelo código.

---

# 5. CONTADOR DE ESTRELAS

Adicionar discretamente na interface:

"0 / 12 estrelas descobertas"

Quando ela clicar:

"1 / 12 estrelas descobertas"

Depois:

"2 / 12 estrelas descobertas"

e assim por diante.

O contador deve atualizar automaticamente.

Guardar o progresso no localStorage para que, se ela fechar o navegador e voltar, as estrelas descobertas continuem marcadas.

---

# 6. ESTRELAS DESCOBERTAS

Quando uma estrela for descoberta:

- ela pode mudar levemente de aparência;

- ficar com um brilho diferente;

- mostrar um pequeno indicador de descoberta.

Não deixe isso poluir a interface.

---

# 7. PROGRESSÃO

Quando ela encontrar todas as 12 estrelas:

12 / 12 estrelas descobertas

Deve acontecer uma pequena animação especial.

O céu pode ficar um pouco mais brilhante.

Uma nova estrela deve aparecer.

Essa estrela será diferente das outras.

Ela representa a "última estrela".

Mostrar uma mensagem:

"Você encontrou todas."

Depois:

"Mas ainda existe uma estrela que não estava aqui antes."

Botão:

"Descobrir"

---

# 8. ESTRELA FINAL

A última estrela deve abrir uma experiência diferente.

A tela pode escurecer suavemente.

A estrela fica no centro.

Depois aparece uma mensagem:

"Algumas coisas são difíceis de colocar em palavras."

Depois:

"Então eu preferi criar um lugar para elas."

Depois:

"Feliz aniversário. ⭐"

Deixe essa parte preparada para que eu possa editar o texto final posteriormente.

Não coloque "eu te amo" automaticamente.

Quero poder escrever minha própria mensagem.

---

# 9. DATA 04.09

A data do aniversário é:

04 de setembro.

Adicionar discretamente uma referência à data.

Pode existir um pequeno elemento:

"04.09"

"Uma data especial."

Não transforme o site em um contador gigante.

Se possível, criar uma pequena área que mostre uma contagem regressiva até 04/09/2026 quando a data ainda não tiver chegado.

Depois do aniversário, mostrar apenas:

"04.09"

---

# 10. MÚSICA

Adicionar controle de música discreto.

Interface:

♫

Ao clicar:

- iniciar música;

- mostrar controle de volume;

- permitir pausar.

Não iniciar música automaticamente.

Usar a API de áudio do navegador ou uma biblioteca leve.

Deixar o arquivo da música fácil de substituir posteriormente.

---

# 11. ANIMAÇÕES

Usar Framer Motion para animações.

Quero:

- estrelas piscando;

- estrelas especiais pulsando;

- modal aparecendo suavemente;

- textos aparecendo com fade;

- transições suaves;

- brilho quando clicar;

- animação especial ao completar 12 estrelas;

- animação da estrela final.

Evitar animações exageradas.

Tudo deve parecer elegante.

---

# 12. RESPONSIVIDADE

Prioridade máxima para celular.

No celular:

- céu deve ocupar a tela inteira;

- estrelas devem continuar bem posicionadas;

- estrelas clicáveis devem ser fáceis de tocar;

- não colocar elementos pequenos demais;

- modal deve ocupar boa parte da tela;

- textos devem ser legíveis;

- controles devem ser fáceis de tocar.

Também deve funcionar bem em:

- celular vertical;

- celular horizontal;

- tablet;

- notebook;

- desktop.

---

# 13. TECNOLOGIAS

Utilizar preferencialmente:

- React

- TypeScript

- Vite

- Tailwind CSS

- Framer Motion

- Lucide React

Não adicionar backend.

Não criar banco de dados.

Não criar autenticação.

Não criar API desnecessária.

O projeto deve ser totalmente frontend.

Usar localStorage apenas para salvar o progresso das estrelas.

---

# 14. ESTRUTURA DO CÓDIGO

Organizar o projeto de maneira limpa.

Sugestão:

src/

  components/

    StarField

    SpecialStar

    StarMessage

    MusicPlayer

    ProgressCounter

    FinalStar

  data/

    stars.ts

  pages/

    Home.tsx

  hooks/

    useDiscoveredStars.ts

Não precisa seguir exatamente essa estrutura se o projeto atual tiver uma organização melhor.

O mais importante é manter o código organizado e fácil de editar.

---

# 15. EXPERIÊNCIA

O fluxo final deve ser:

ABRIR SITE

↓

CÉU ESTRELADO

↓

MENSAGEM DE BOAS-VINDAS

↓

"Explore o céu."

↓

ELA COMEÇA A CLICAR NAS ESTRELAS

↓

CADA ESTRELA REVELA UMA MENSAGEM

↓

CONTADOR 1/12, 2/12, 3/12...

↓

12/12

↓

SURGE A ESTRELA FINAL

↓

EXPERIÊNCIA ESPECIAL

↓

MENSAGEM DE ANIVERSÁRIO

---

# 16. IMPORTANTE SOBRE O PROJETO EXISTENTE

Antes de alterar qualquer coisa:

1. Analise a estrutura atual do projeto.

2. Identifique como o céu estrelado foi implementado.

3. Identifique os componentes existentes.

4. Preserve o que já funciona.

5. Reutilize componentes quando possível.

6. Faça alterações incrementais.

7. Não apague código existente sem necessidade.

Se já existir uma implementação de estrelas, adapte-a em vez de criar outra completamente diferente.

---

# 17. PERSONALIZAÇÃO

Quero que o código fique preparado para eu personalizar depois.

Deixe fácil alterar:

- nome dela;

- mensagens;

- títulos das estrelas;

- número de estrelas;

- data;

- mensagem final;

- música;

- cores;

- posição das estrelas.

Principalmente as mensagens.

---

# 18. RESULTADO ESPERADO

O resultado deve parecer um presente digital feito por um programador especificamente para uma pessoa.

Não quero que pareça:

"um site romântico pronto".

Quero que pareça:

"alguém criou um pequeno universo interativo exclusivamente para mim."

A experiência deve ser bonita, misteriosa, delicada e emocional.

Priorize qualidade visual, fluidez das animações, responsividade e facilidade de personalização.

Antes de finalizar, teste:

- clique nas estrelas;

- contador;

- localStorage;

- modal;

- estrela final;

- música;

- responsividade;

- funcionamento no celular;

- funcionamento no desktop.                                Eu faria ainda uma pequena mudança no seu conceito

Como você já mostrou para ela o projeto da viagem, eu não colocaria uma tela inicial do tipo “Bem-vinda ao nosso céu” novamente.

Eu faria algo mais misterioso:

"Você já conhece esse céu..."

Depois de 2 segundos:

"Mas talvez ainda não tenha visto tudo que existe nele."

E então:

[ EXPLORAR ]

Isso cria uma ligação direta com o projeto que ela já conhece, mas faz parecer que você transformou aquele projeto em uma segunda versão, feita especialmente para o aniversário.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f116401-0887-482b-9d7a-0a75dff15316).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# Programação com Agentes de IA: Treinamento Completo

> **Versão:** 2.0 (Edição Profunda) | **Data:** Abril 2026
> **Público-alvo:** Desenvolvedores de software que desejam dominar a programação assistida por IA
> **Formato de entrega:** Site interativo (gerado a partir deste documento)
>
> **Novo na v2.0:** módulos sobre Deep Thinking / Reasoning Models, Alinhamento e Segurança, Avaliação de Modelos, Embeddings e RAG; seções adicionadas sobre Scaling Laws, Mixture of Experts, KV Cache, RoPE e FlashAttention; tabelas de modelos atualizadas com Claude Opus 4.6, GPT-5, o3/o4, Gemini 2.5, Grok 4, Llama 4 e DeepSeek R1.

---

## Sumário Geral

**Trilha Fundacional (Teoria Profunda)**
- [Módulo 0 — História e Fundamentos de IA](#módulo-0--história-e-fundamentos-de-ia) *(pré-requisito opcional)*
- [Módulo 1 — Fundamentos: Como uma LLM Funciona](#módulo-1--fundamentos-como-uma-llm-funciona)
- [Módulo 1.5 — Matemática Essencial para LLMs](#módulo-15--matemática-essencial-para-llms)
- [Módulo 2 — Tokens: A Unidade Fundamental da IA](#módulo-2--tokens-a-unidade-fundamental-da-ia)
- [Módulo 3 — Janela de Contexto](#módulo-3--janela-de-contexto)

**Trilha de Técnicas**
- [Módulo 4 — Engenharia de Contexto](#módulo-4--engenharia-de-contexto)
- [Módulo 5 — Prompt Engineering](#módulo-5--prompt-engineering)
- [Módulo 6 — Spec-Driven Design](#módulo-6--spec-driven-design)

**Trilha de Ferramentas e Ecossistema**
- [Módulo 7 — Panorama das Ferramentas de Programação com IA](#módulo-7--panorama-das-ferramentas-de-programação-com-ia)
- [Módulo 8 — Rules e Arquivos de Configuração](#módulo-8--rules-e-arquivos-de-configuração)
- [Módulo 9 — Skills e Hooks](#módulo-9--skills-e-hooks)
- [Módulo 10 — MCP (Model Context Protocol)](#módulo-10--mcp-model-context-protocol)
- [Módulo 11 — Agentes Autônomos e Sistemas Multi-Agentes](#módulo-11--agentes-autônomos-e-sistemas-multi-agentes)

**Trilha Avançada (novos na v2.0)**
- [Módulo 12 — Deep Thinking e Reasoning Models](#módulo-12--deep-thinking-e-reasoning-models)
- [Módulo 13 — Alinhamento, Segurança e Red-Teaming](#módulo-13--alinhamento-segurança-e-red-teaming)
- [Módulo 14 — Avaliação de Modelos e Benchmarks](#módulo-14--avaliação-de-modelos-e-benchmarks)
- [Módulo 15 — Embeddings, Retrieval e RAG Avançado](#módulo-15--embeddings-retrieval-e-rag-avançado)

**Apêndices**
- [Apêndice A — Ferramentas Práticas e Simuladores](#apêndice-a--ferramentas-práticas-e-simuladores)
- [Apêndice B — Referências Bibliográficas Completas](#apêndice-b--referências-bibliográficas-completas)
- [Apêndice C — Glossário](#apêndice-c--glossário)
- [Apêndice D — Leitura Recomendada por Módulo](#apêndice-d--leitura-recomendada-por-módulo)

---

## Árvore de Dependências dos Módulos

A estrutura deste treinamento segue uma progressão lógica onde cada módulo constrói sobre os anteriores. Abaixo está a árvore de dependências que governa a ordem de apresentação:

```
NÍVEL 0 — FUNDAÇÃO TEÓRICA
┌─────────────────────────────────────────────┐
│  Módulo 1: Fundamentos — Como uma LLM       │
│  Funciona                                    │
│  (Transformer, Atenção, Treinamento,         │
│   Inferência)                                │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 1 — MECÂNICA FUNDAMENTAL
┌─────────────────────────────────────────────┐
│  Módulo 2: Tokens — A Unidade Fundamental    │
│  (Tokenização, BPE, Custos, Contagem)        │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 2 — O ESPAÇO DE TRABALHO
┌─────────────────────────────────────────────┐
│  Módulo 3: Janela de Contexto                │
│  (Limites, Evolução, Impacto Prático)        │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 3 — TÉCNICAS DE OTIMIZAÇÃO
┌─────────────────────────────────────────────┐
│  Módulo 4: Engenharia de Contexto            │
│  (Gerenciamento, Seleção, Compressão)        │
├─────────────────────────────────────────────┤
│              │                               │
│              ▼                               │
│  Módulo 5: Prompt Engineering                │
│  (Técnicas, Padrões, Boas Práticas)         │
│              │                               │
│              ▼                               │
│  Módulo 6: Spec-Driven Design                │
│  (Especificações para Agentes de IA)         │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 4 — FERRAMENTAS E ECOSSISTEMA
┌─────────────────────────────────────────────┐
│  Módulo 7: Panorama das Ferramentas          │
│  (Claude Code, Copilot, Codex, Cursor)       │
│              │                               │
│              ▼                               │
│  Módulo 8: Rules e Arquivos de Configuração  │
│  (CLAUDE.md, agents.md, .cursorrules)        │
│              │                               │
│              ▼                               │
│  Módulo 9: Skills e Hooks                    │
│  (Extensões e Automações)                    │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 5 — INTEGRAÇÃO E PROTOCOLO
┌─────────────────────────────────────────────┐
│  Módulo 10: MCP (Model Context Protocol)     │
│  (Arquitetura, Servidores, Casos de Uso)     │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
NÍVEL 6 — AGENTES AUTÔNOMOS
┌─────────────────────────────────────────────┐
│  Módulo 11: Agentes Autônomos e              │
│  Sistemas Multi-Agentes                      │
│  (Orquestração, Padrões, Futuro)             │
└─────────────────────────────────────────────┘
```

**Leitura da árvore:** Cada módulo depende de todos os módulos acima dele. Para entender Engenharia de Contexto (Módulo 4), é necessário primeiro compreender Tokens (Módulo 2) e Janela de Contexto (Módulo 3). Para entender MCP (Módulo 10), é preciso ter passado por 1 a 9.

**Trilha avançada (novos na v2.0):** após o Módulo 11, quatro módulos aprofundam temas específicos e podem ser lidos em qualquer ordem entre si:

```
NÍVEL 7 — TRILHA AVANÇADA (paralela)
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Módulo 12    │ Módulo 13    │ Módulo 14    │ Módulo 15    │
│ Deep Thinking│ Alinhamento  │ Avaliação    │ Embeddings & │
│ & Reasoning  │ & Segurança  │ & Benchmarks │ RAG Avançado │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

Módulos fundacionais opcionais — **Módulo 0** (História) e **Módulo 1.5** (Matemática) — são pré-requisitos úteis mas dispensáveis para quem já domina os fundamentos.

> **Sugestão para o site:** Renderizar esta árvore como um diagrama SVG interativo onde cada nó é clicável e leva ao respectivo módulo. Usar cores para indicar o nível (azul para fundação, verde para técnicas, laranja para ferramentas, vermelho para agentes). Ferramentas sugeridas para gerar o diagrama: D3.js, Mermaid.js, ou React Flow.

---

## Módulo 0 — História e Fundamentos de IA

> **Pré-requisito opcional.** Este módulo existe para situar as LLMs no contexto de 70 anos de pesquisa em IA. Se você já conhece a história, pode pular direto para o Módulo 1.

### 0.1 Por que estudar a história?

Todo conceito moderno — atenção, embeddings, gradiente descendente, RLHF — é resposta a um problema que pesquisadores anteriores tentaram resolver. Entender *por que* uma ideia venceu ajuda você a reconhecer quando ela deixará de valer.

### 0.2 Linha do tempo condensada

| Ano | Marco | Por que importa |
|---|---|---|
| 1943 | McCulloch & Pitts — neurônio artificial | Primeira formalização matemática de um neurônio |
| 1950 | Turing — *"Computing Machinery and Intelligence"* | Teste de Turing e base filosófica da IA |
| 1958 | Rosenblatt — **Perceptron** | Primeiro algoritmo de aprendizado supervisionado |
| 1969 | Minsky & Papert — *Perceptrons* | Prova limitações (XOR) → "AI Winter" |
| 1986 | Rumelhart, Hinton & Williams — **Backpropagation** | Viabiliza redes multicamadas |
| 1997 | Hochreiter & Schmidhuber — **LSTM** | Resolve vanishing gradient em sequências |
| 2006 | Hinton et al. — Deep Belief Networks | "Deep Learning" como termo e programa |
| 2012 | Krizhevsky et al. — **AlexNet** (ImageNet) | Deep learning domina visão computacional |
| 2013 | Mikolov et al. — **word2vec** | Embeddings distributionais viáveis |
| 2014 | Goodfellow et al. — **GANs** | Geração adversarial |
| 2014 | Bahdanau et al. — **Attention** em tradução | Semente da atenção moderna |
| 2017 | Vaswani et al. — **Transformer** | Arquitetura base de todas LLMs modernas |
| 2018 | Devlin et al. — **BERT** / Radford — **GPT-1** | Pré-treinamento em larga escala |
| 2020 | Brown et al. — **GPT-3** (175B) | Few-shot learning emerge da escala |
| 2022 | Ouyang et al. — **InstructGPT** / ChatGPT | RLHF e assistente conversacional |
| 2022 | Bai et al. — **Constitutional AI** | RLAIF, base do Claude |
| 2023 | GPT-4, Claude 2, Llama 2 | Multimodal, contextos longos, open source |
| 2024 | o1 (OpenAI), Claude 3.5 | Test-time compute, agentes robustos |
| 2025 | DeepSeek-R1, GPT-5, Claude 4 | Reasoning models comoditizados; agentes autônomos |
| 2026 | Claude Opus 4.6, Gemini 2.5, Grok 4 | Contextos de milhões de tokens; thinking integrado |

### 0.3 As três tradições da IA

1. **Simbólica (GOFAI)** — regras explícitas, lógica de primeira ordem. Ex: sistemas especialistas anos 80.
2. **Conexionista** — redes neurais, aprendizado estatístico. Ex: deep learning moderno.
3. **Estatística/Bayesiana** — probabilidade, inferência. Ex: filtros de spam, graphical models.

LLMs são conexionistas, mas incorporam elementos estatísticos (amostragem, decodificação) e simbólicos (tool use, programas gerados). A fronteira está borrando.

### 0.4 Referências fundacionais

- Russell, S. & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4ª ed.). Pearson. — Livro-texto canônico.
- Goodfellow, I., Bengio, Y. & Courville, A. (2016). *Deep Learning*. MIT Press. Disponível gratuitamente em https://www.deeplearningbook.org
- Turing, A. M. (1950). *"Computing Machinery and Intelligence"*. Mind 59(236). https://doi.org/10.1093/mind/LIX.236.433
- Rosenblatt, F. (1958). *"The perceptron: A probabilistic model..."*. Psychological Review 65(6).
- Rumelhart, D., Hinton, G. & Williams, R. (1986). *"Learning representations by back-propagating errors"*. Nature 323. https://www.nature.com/articles/323533a0
- Schmidhuber, J. (2015). *"Deep Learning in Neural Networks: An Overview"*. arXiv:1404.7828 — retrospectiva exaustiva.

---

## Módulo 1 — Fundamentos: Como uma LLM Funciona

### 1.1 O que é uma LLM (Large Language Model)?

Um **Large Language Model** (Modelo de Linguagem de Grande Escala) é um sistema de inteligência artificial treinado em vastas quantidades de texto para compreender e gerar linguagem natural. Na sua essência, uma LLM é uma função matemática massiva que, dado um texto de entrada, calcula a probabilidade de qual deveria ser a próxima palavra (ou, mais precisamente, o próximo **token**).

**Analogia prática:** Imagine o auto-completar do seu celular, mas multiplicado por bilhões de vezes em capacidade. Seu celular prevê a próxima palavra com base em padrões simples. Uma LLM faz o mesmo, mas com uma compreensão profunda de gramática, lógica, código, matemática e raciocínio — tudo emergindo de padrões estatísticos aprendidos em trilhões de palavras.

**Referência fundamental:**
- Brown, T. et al. (2020). *"Language Models are Few-Shot Learners"*. OpenAI. arXiv:2005.14165. Disponível em: https://arxiv.org/abs/2005.14165 — Este paper introduziu o GPT-3 e demonstrou que modelos de linguagem suficientemente grandes podem realizar tarefas sem treinamento específico, apenas com exemplos no prompt.

> **Sugestão de imagem para o site:** Diagrama mostrando a progressão histórica das LLMs — do GPT-1 (2018, 117M parâmetros) ao GPT-4 (2023), Claude 3.5/4 (2024-2025), incluindo marcos como BERT, T5, PaLM, LLaMA. Fonte para dados: "A Survey of Large Language Models" (Zhao et al., 2023) — https://arxiv.org/abs/2303.18223

### 1.2 A Revolução Transformer

Tudo começa em 2017, com um paper que mudou a história da IA:

**"Attention Is All You Need"** — Vaswani, A. et al. (2017). Google Brain. arXiv:1706.03762.
Disponível em: https://arxiv.org/abs/1706.03762

Antes dos Transformers, os modelos de linguagem usavam **Redes Neurais Recorrentes (RNNs)** e **LSTMs** (Long Short-Term Memory). Essas arquiteturas processavam texto sequencialmente — palavra por palavra, da esquerda para a direita. Isso criava dois problemas críticos:

1. **Gargalo sequencial:** Não era possível paralelizar o processamento. Cada palavra dependia do resultado da anterior.
2. **Perda de contexto distante:** Informações do início de um texto longo se "diluíam" ao chegar ao final (o problema do *vanishing gradient*).

A arquitetura **Transformer** resolveu ambos os problemas com um mecanismo revolucionário: a **Atenção (Attention)**.

#### 1.2.1 O Mecanismo de Atenção (Self-Attention)

O mecanismo de auto-atenção permite que cada palavra no texto "olhe" simultaneamente para todas as outras palavras, calculando a relevância de cada uma para o contexto atual.

**Como funciona, passo a passo:**

1. **Representação vetorial:** Cada token de entrada é convertido em um vetor numérico (embedding) de alta dimensionalidade (ex: 768 ou 1024 dimensões).

2. **Três projeções (Q, K, V):** Para cada token, o modelo cria três vetores diferentes:
   - **Query (Q):** "O que estou procurando?"
   - **Key (K):** "O que tenho a oferecer?"
   - **Value (V):** "Qual é minha informação?"

3. **Cálculo de atenção:** O modelo calcula o produto escalar entre o Query de um token e as Keys de todos os outros tokens. Isso produz um "score de atenção" — quanto cada token é relevante para o token atual.

4. **Softmax:** Os scores são normalizados via função softmax para se tornarem probabilidades (somam 1).

5. **Combinação ponderada:** Os Values são multiplicados pelos scores de atenção e somados, produzindo uma representação rica que incorpora informação de todo o contexto.

**Fórmula matemática:**

```
Attention(Q, K, V) = softmax(QK^T / √d_k) × V
```

Onde `d_k` é a dimensão dos vetores Key (usado para estabilizar os gradientes).

**Analogia prática:** Imagine que você está em uma sala de reunião (o texto). Cada pessoa (token) quer entender o contexto da discussão. Em vez de ouvir apenas a pessoa ao lado (como RNNs fazem), cada pessoa pode olhar para TODAS as outras simultaneamente e decidir quem é mais relevante para o que ela precisa entender naquele momento. O gerente de projeto presta mais atenção ao desenvolvedor quando se fala de código, mas mais atenção ao designer quando se fala de UI.

> **Sugestão de imagem para o site:** Diagrama animado mostrando o mecanismo de atenção em ação. Um texto como "O gato sentou no tapete" onde, ao selecionar "sentou", linhas de diferentes espessuras conectam a palavra a todas as outras, com "gato" tendo a linha mais grossa (maior atenção). Referência visual: "The Illustrated Transformer" por Jay Alammar — https://jalammar.github.io/illustrated-transformer/

#### 1.2.2 Multi-Head Attention

Em vez de calcular a atenção uma única vez, os Transformers usam **múltiplas "cabeças" de atenção** em paralelo. Cada cabeça aprende a prestar atenção a aspectos diferentes:

- Uma cabeça pode focar em relações sintáticas (sujeito-verbo)
- Outra em relações semânticas (sinônimos, antônimos)
- Outra em relações posicionais (proximidade no texto)
- Outra em relações de longo alcance (referências a parágrafos anteriores)

Modelos modernos como o Claude usam dezenas a centenas de cabeças de atenção.

**Referência:** Clark, K. et al. (2019). *"What Does BERT Look At? An Analysis of BERT's Attention"*. Stanford NLP. arXiv:1906.04341. Disponível em: https://arxiv.org/abs/1906.04341 — Análise detalhada de como diferentes cabeças de atenção se especializam.

#### 1.2.3 Arquitetura Completa do Transformer

Um Transformer completo consiste em:

```
ENTRADA (texto) 
    → Tokenização 
    → Embedding + Codificação Posicional
    → [Bloco Transformer × N camadas]
        ├── Multi-Head Self-Attention
        ├── Add & Normalize (conexão residual)
        ├── Feed-Forward Network (FFN)
        └── Add & Normalize (conexão residual)
    → Camada de Saída (projeção para vocabulário)
    → Softmax 
    → PRÓXIMO TOKEN
```

**Componentes-chave:**

| Componente | Função | Analogia |
|---|---|---|
| **Embedding** | Converte tokens em vetores numéricos | Traduzir palavras para coordenadas em um "mapa de significados" |
| **Codificação Posicional** | Informa a posição de cada token na sequência | Numerar as páginas de um livro |
| **Self-Attention** | Permite que tokens se "olhem" mutuamente | Reunião onde todos podem falar com todos |
| **Feed-Forward Network** | Processa cada posição independentemente | Cada pessoa reflete individualmente após a reunião |
| **Conexão Residual** | Preserva informação original somando-a ao resultado | Manter suas anotações originais além das novas |
| **Layer Normalization** | Estabiliza o treinamento | Calibrar instrumentos entre medições |

> **Sugestão de imagem para o site:** Diagrama da arquitetura Transformer lado a lado (Encoder e Decoder), com cores diferentes para cada componente. A referência visual canônica é a Figura 1 do paper original "Attention Is All You Need" (Vaswani et al., 2017). Uma versão interativa pode ser construída seguindo o tutorial de Jay Alammar: https://jalammar.github.io/illustrated-transformer/

### 1.3 Do Transformer às LLMs Modernas

As LLMs que usamos hoje (Claude, GPT-4, etc.) são variações do Transformer original, especificamente usando a metade **Decoder** da arquitetura (chamados de modelos "decoder-only" ou "autoregressivos").

#### 1.3.1 O Processo de Treinamento

O treinamento de uma LLM acontece em fases:

**Fase 1 — Pré-treinamento (Pre-training):**
- O modelo lê trilhões de tokens de texto (livros, artigos, código, websites)
- Tarefa: prever o próximo token dada a sequência anterior
- Escala: meses de processamento em milhares de GPUs
- Custo: dezenas a centenas de milhões de dólares
- Resultado: um modelo com conhecimento geral amplo, mas sem "personalidade" ou alinhamento

**Referência:** Kaplan, J. et al. (2020). *"Scaling Laws for Neural Language Models"*. Johns Hopkins/OpenAI. arXiv:2001.08361. Disponível em: https://arxiv.org/abs/2001.08361 — Demonstra como performance escala previsivelmente com dados, parâmetros e computação.

**Fase 2 — Fine-tuning Supervisionado (SFT):**
- Humanos criam exemplos de diálogos ideais (perguntas e respostas desejadas)
- O modelo aprende a seguir instruções e a formatar respostas adequadamente
- Escala: milhares a milhões de exemplos curados

**Fase 3 — RLHF (Reinforcement Learning from Human Feedback):**
- Humanos avaliam e ranqueiam respostas do modelo
- Um modelo de recompensa aprende as preferências humanas
- O modelo é otimizado para gerar respostas que os humanos preferem
- Resultado: respostas mais seguras, úteis e alinhadas com valores humanos

**Referência:** Ouyang, L. et al. (2022). *"Training language models to follow instructions with human feedback"*. OpenAI. arXiv:2203.02155. Disponível em: https://arxiv.org/abs/2203.02155 — Paper fundacional sobre RLHF que introduziu o InstructGPT.

**Referência adicional:** Bai, Y. et al. (2022). *"Constitutional AI: Harmlessness from AI Feedback"*. Anthropic. arXiv:2212.08073. Disponível em: https://arxiv.org/abs/2212.08073 — Abordagem da Anthropic (RLAIF) para treinamento constitucional, onde a IA ajuda a si mesma a se alinhar.

> **Sugestão de imagem para o site:** Diagrama de pipeline mostrando as 3 fases de treinamento como um funil: Pré-treinamento (enorme base de dados) → SFT (dataset curado menor) → RLHF (feedback humano refinado). Incluir ícones representativos e setas mostrando redução progressiva de dados mas aumento de qualidade.

#### 1.3.2 Inferência: Como o Modelo Gera Texto

Quando você faz uma pergunta a uma LLM, o processo de **inferência** ocorre assim:

1. Seu texto é **tokenizado** (convertido em números)
2. Os tokens passam por todas as camadas do Transformer
3. O modelo produz uma **distribuição de probabilidade** sobre todo o vocabulário
4. Um token é **selecionado** dessa distribuição (amostragem)
5. O token selecionado é **adicionado à sequência**
6. O processo **repete** do passo 2 com a sequência estendida
7. Continua até gerar um token de parada ou atingir o limite

**Conceito crítico: A geração é autorregressiva** — o modelo gera UM token por vez, e cada novo token depende de todos os anteriores. Isso é fundamental para entender por que a velocidade de resposta de LLMs é proporcional ao tamanho da saída.

**Parâmetros de amostragem importantes:**

| Parâmetro | O que controla | Valor baixo | Valor alto |
|---|---|---|---|
| **Temperature** | Aleatoriedade da seleção | Mais determinístico, previsível | Mais criativo, imprevisível |
| **Top-p (Nucleus)** | Porcentagem do vocabulário considerada | Menos opções, mais focado | Mais opções, mais diverso |
| **Top-k** | Número fixo de candidatos | Poucos candidatos | Muitos candidatos |

**Referência:** Holtzman, A. et al. (2020). *"The Curious Case of Neural Text Degeneration"*. University of Washington. arXiv:1904.09751. Disponível em: https://arxiv.org/abs/1904.09751 — Paper que introduziu Nucleus Sampling (top-p).

> **Sugestão de imagem para o site:** Animação mostrando o processo de geração token a token. Uma barra de probabilidades aparece a cada passo, mostrando os top-5 candidatos e qual é selecionado. Implementável com JavaScript/D3.js. Referência para dados de demonstração: usar a API da OpenAI com `logprobs=true` para obter probabilidades reais.

#### 1.3.3 Scaling Laws: Por que maior costuma ser melhor

Kaplan et al. (2020) e depois Hoffmann et al. (2022, "Chinchilla") descobriram que a perda (loss) de um modelo segue uma **lei de potência** em relação a três variáveis: número de parâmetros (N), tamanho do dataset (D) e compute (C).

A forma aproximada da lei de Chinchilla:

```
L(N, D) ≈ E + A/N^α + B/D^β
```

Onde `E` é a irredutível entropia do texto, e `α ≈ 0.34`, `β ≈ 0.28`. A contribuição decisiva: **para um orçamento de compute fixo, dobrar N e dobrar D juntos é ótimo** — GPT-3 foi sub-treinado em dados (175B params, apenas ~300B tokens); Chinchilla (70B params, 1.4T tokens) venceu com menos parâmetros.

**Implicações práticas:**
- Modelos menores bem treinados (Llama, Mistral) competem com gigantes mal treinados.
- "Quanto compute para um modelo de X parâmetros?" é uma pergunta respondível.
- **Emergent abilities** (Wei et al. 2022) — habilidades que aparecem descontinuamente com escala — são parcialmente um artefato de métricas (Schaeffer et al. 2023, *"Are Emergent Abilities of Large Language Models a Mirage?"*, NeurIPS).

**Refs:**
- Kaplan, J. et al. (2020). *"Scaling Laws for Neural Language Models"*. arXiv:2001.08361
- Hoffmann, J. et al. (2022). *"Training Compute-Optimal Large Language Models"* (Chinchilla). arXiv:2203.15556
- Wei, J. et al. (2022). *"Emergent Abilities of Large Language Models"*. arXiv:2206.07682
- Schaeffer, R. et al. (2023). arXiv:2304.15004

#### 1.3.4 KV Cache: Por que a inferência é rápida depois do primeiro token

Na geração autoregressiva, a cada novo token o modelo precisaria recalcular atenção sobre **toda** a sequência. O **KV Cache** armazena as matrizes Key e Value de tokens já processados, de modo que apenas o Query do novo token precisa ser calculado.

**Consequências operacionais:**
- **Prefill** (processar o prompt inteiro) é paralelo e rápido em FLOPs, mas pesado em memória.
- **Decode** (gerar 1 token por vez) é sequencial e limitado por **memory bandwidth**, não compute.
- O KV cache cresce linearmente com o contexto — para contextos de 1M tokens vira o gargalo principal.
- **Prompt caching** (Anthropic, Google, OpenAI) reutiliza o KV cache entre requisições — daí o desconto de até 90%.

Variantes que reduzem o cache:
- **MQA** (Multi-Query Attention) — Shazeer 2019: uma Key/Value para todas as heads.
- **GQA** (Grouped-Query Attention) — Ainslie et al. 2023, arXiv:2305.13245: compromisso entre MHA e MQA. Usado em Llama 2/3/4.
- **MLA** (Multi-head Latent Attention) — DeepSeek-V2, 2024: comprime KV via projeção de baixa dimensão.

#### 1.3.5 Positional Encodings: Como o modelo sabe a ordem

Atenção é permutation-invariant por si só — precisa de sinal de posição externo.

- **Absolute (Vaswani 2017):** `sin/cos` em cada dimensão. Simples, não generaliza para contextos além do treinado.
- **Learned:** tabela aprendida. Mesma limitação.
- **RoPE (Rotary Positional Embedding)** — Su et al. 2021, arXiv:2104.09864: rotaciona Q e K por ângulos dependentes da posição. Usado em Llama, Mistral, Qwen, DeepSeek. Permite extrapolação via interpolação (**Position Interpolation**, Chen et al. 2023; **YaRN**, Peng et al. 2023).
- **ALiBi** — Press et al. 2022: bias linear nas attention scores. Usado em Bloom, MPT.

Entender isso é útil quando você vê um modelo "quebrar" em contextos muito longos: costuma ser degradação do positional encoding.

#### 1.3.6 Mixture of Experts (MoE)

Modelos modernos frontier (GPT-4, Mixtral, DeepSeek-V3, Llama 4) são **MoE**: em vez de um único FFN denso por camada, há N "experts" (ex: 8, 64, 256) e um **roteador** seleciona os top-k (geralmente 2) para cada token.

- **Total params vs. active params:** DeepSeek-V3 tem 671B totais mas apenas ~37B ativos por token. Isso barateia inferência mantendo capacidade.
- Refs: Shazeer et al. (2017) *"Outrageously Large Neural Networks"*, arXiv:1701.06538; Fedus et al. (2022) *"Switch Transformer"*, arXiv:2101.03961; DeepSeek-AI (2024), *"DeepSeek-V3 Technical Report"*, arXiv:2412.19437.

**Implicação prática:** quando um provedor anuncia "2 trilhões de parâmetros", pergunte quantos são *ativos*. A métrica de custo/qualidade é compute por token, não total params.

#### 1.3.7 FlashAttention e eficiência de hardware

Atenção padrão é O(N²) em memória. **FlashAttention** (Dao et al. 2022, arXiv:2205.14135; v2 2023; v3 2024) reorganiza o cálculo em blocos que cabem em SRAM da GPU, eliminando round-trips para HBM. Resultado: **10–20× mais rápido**, mesmo resultado matemático.

Por que importa para o desenvolvedor: a diferença entre "context de 1M é viável" e "custa uma fortuna" frequentemente é FlashAttention + variante de atenção (GQA/MLA) + quantização. Isso explica por que modelos abertos alcançam provedores fechados.

### 1.4 Por que isso importa para Programação com IA?

Entender como LLMs funcionam não é apenas curiosidade acadêmica — é conhecimento **operacional** para quem programa com IA:

| Conceito | Implicação Prática |
|---|---|
| LLMs preveem o próximo token | A qualidade da sua entrada determina diretamente a qualidade da saída |
| Atenção tem alcance limitado | Textos muito longos podem fazer o modelo "esquecer" o início |
| Geração é autorregressiva | Respostas longas são mais lentas e mais caras |
| Treinamento é estático | O modelo não sabe nada posterior à data de corte do treinamento |
| Alucinações são intrínsecas | O modelo gera texto plausível, não necessariamente verdadeiro |

> **Sugestão para o site:** Seção interativa "Teste Você Mesmo" onde o participante pode ajustar temperature e top-p em um playground e ver como as respostas mudam. Implementar com chamadas à API da Anthropic ou OpenAI.

---

## Módulo 1.5 — Matemática Essencial para LLMs

> **Objetivo:** Dar a você intuição numérica suficiente para ler um paper de LLM, entender debates no Twitter/arXiv e não cair em marketing. Não é um curso de álgebra linear — é o mínimo operacional.

### 1.5.1 Vetores, embeddings e similaridade

Um **embedding** é um ponto num espaço `R^d` (tipicamente d=768 a d=12288). Tokens semanticamente próximos ficam próximos nesse espaço.

**Produto escalar** mede alinhamento:
```
a · b = |a| |b| cos(θ)
```

**Similaridade de cosseno** (ignora magnitude):
```
cos_sim(a, b) = (a · b) / (|a| |b|)
```

Toda atenção, todo retrieval, todo RAG é — no fim — produto escalar em alta dimensão.

**Refs:**
- Mikolov, T. et al. (2013). *"Efficient Estimation of Word Representations in Vector Space"* (word2vec). arXiv:1301.3781
- Reimers, N. & Gurevych, I. (2019). *"Sentence-BERT"*. arXiv:1908.10084

### 1.5.2 Softmax e temperatura

Softmax transforma logits em probabilidades:

```
softmax(x_i) = exp(x_i / T) / Σ exp(x_j / T)
```

Onde **T é a temperatura**:
- `T → 0` → argmax (determinístico; sempre o token mais provável).
- `T = 1` → distribuição nativa do modelo.
- `T → ∞` → uniforme (ruído puro).

**Intuição geométrica:** temperature achata (alto T) ou afia (baixo T) a distribuição. `top-p` corta a cauda; `top-k` limita a cardinalidade. Combinados, são os três botões principais de decodificação.

### 1.5.3 Entropia cruzada: a função objetivo do pré-treinamento

A LLM é treinada para minimizar:

```
L = -Σ log P_model(token_t | token_<t)
```

Isso é **entropia cruzada** entre a distribuição real (one-hot no token correto) e a predita. Minimizar loss = maximizar a probabilidade que o modelo atribui ao texto real.

**Perplexidade** = `exp(L)`. Se perplexidade é 10, o modelo está "em dúvida entre 10 opções" por token em média. Métrica clássica de qualidade de language models (menor = melhor).

### 1.5.4 Gradiente descendente em uma parábola

Treinamento é basicamente:
```
θ ← θ - η · ∇L(θ)
```
Onde `η` é a learning rate. **Adam** (Kingma & Ba 2015, arXiv:1412.6980) e **AdamW** (Loshchilov & Hutter 2019) são as variantes usadas em LLMs — adicionam momento e normalização adaptativa.

Não precisa derivar na mão. Precisa entender que:
- LR muito alta → loss explode.
- LR muito baixa → treinamento estagna.
- **Warmup + cosine decay** é o schedule padrão de praticamente todo LLM moderno.

### 1.5.5 Quantização: por que int4 funciona

Um modelo treinado em fp16/bf16 pode ser **quantizado** para int8, int4 ou menos com perda pequena. `GPTQ`, `AWQ`, `GGUF` são algoritmos populares.

**Por que funciona:** redes neurais são robustas a ruído; pesos redundantes absorvem a quantização. Uma Llama-70B em int4 cabe em ~40GB vs. ~140GB em fp16 — habilita inferência local.

Ref: Dettmers, T. et al. (2022). *"LLM.int8()"*. arXiv:2208.07339; Frantar, E. et al. (2023). *"GPTQ"*. arXiv:2210.17323.

### 1.5.6 Leituras para aprofundar

- **3Blue1Brown** — *"Neural Networks"* e *"Transformers"* (YouTube). Melhor introdução visual existente.
- Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer. — Referência clássica em fundamentos estatísticos.
- Murphy, K. (2022). *Probabilistic Machine Learning*. MIT Press. https://probml.github.io/pml-book/ — Mais moderno e abrangente.
- Raschka, S. (2024). *Build a Large Language Model (From Scratch)*. Manning. — Implementação passo-a-passo em PyTorch.
- Karpathy, A. — *"Neural Networks: Zero to Hero"* (YouTube). Série de code-alongs da atenção ao GPT.

---

## Módulo 2 — Tokens: A Unidade Fundamental da IA

### 2.1 O que são Tokens?

**Tokens são as unidades atômicas de processamento de uma LLM.** Tudo que entra e sai de um modelo de linguagem é medido em tokens. Eles não são exatamente palavras, nem exatamente caracteres — são pedaços de texto de tamanho variável, definidos pelo processo de tokenização.

**Exemplos concretos de tokenização:**

```
Texto: "Programação com IA é incrível!"

Tokens (aproximação para modelo Claude/GPT-4):
["Program", "ação", " com", " IA", " é", " incrível", "!"]
= 7 tokens

Texto: "Hello world"
Tokens: ["Hello", " world"]
= 2 tokens

Texto: "indivisibilidade"
Tokens: ["ind", "ivis", "ibil", "idade"]  
= 4 tokens (palavras longas são quebradas)

Código: "function calculateTotal(items) {"
Tokens: ["function", " calculate", "Total", "(", "items", ")", " {"]
= 7 tokens
```

**Regra prática:** Em inglês, 1 token ≈ 4 caracteres ≈ ¾ de uma palavra. Em português, a proporção é menos favorável: 1 token ≈ 3 caracteres, e palavras longas comuns (como "desenvolvimento") podem consumir 3-4 tokens.

**Referência:** Sennrich, R. et al. (2016). *"Neural Machine Translation of Rare Words with Subword Units"*. University of Edinburgh. arXiv:1508.07909. Disponível em: https://arxiv.org/abs/1508.07909 — Paper fundacional sobre Byte Pair Encoding (BPE), o algoritmo base da tokenização moderna.

### 2.2 Como Funciona a Tokenização (BPE — Byte Pair Encoding)

O algoritmo mais usado para tokenização em LLMs é o **Byte Pair Encoding (BPE)**. Aqui está como ele funciona:

**Fase de Treinamento do Tokenizador:**

1. **Início:** Comece com um vocabulário de caracteres individuais (a, b, c, ..., 0, 1, ..., !, @, ...)
2. **Contagem:** Conte todos os pares de caracteres adjacentes no corpus de treinamento
3. **Merge:** O par mais frequente é fundido em um novo token
4. **Repetição:** Volte ao passo 2 com o novo vocabulário
5. **Parada:** Continue até atingir o tamanho desejado do vocabulário (ex: 100.000 tokens)

**Exemplo passo a passo:**

```
Corpus: "aaa bbb aab"

Passo 0 — Vocabulário: {a, b, ' '}
Texto: [a, a, a, ' ', b, b, b, ' ', a, a, b]

Passo 1 — Par mais frequente: (a, a) aparece 3 vezes
Novo token: "aa"
Texto: [aa, a, ' ', b, b, b, ' ', aa, b]

Passo 2 — Par mais frequente: (b, b) aparece 2 vezes  
Novo token: "bb"
Texto: [aa, a, ' ', bb, b, ' ', aa, b]

...e assim por diante
```

**Por que BPE é importante para programadores:**

- **Código** tende a ser tokenizado de forma diferente de texto natural
- **Nomes de variáveis** em camelCase ou snake_case são quebrados nos limites: `calculateTotal` → `["calculate", "Total"]`
- **Indentação** consome tokens: cada espaço ou tab é contabilizado
- **Linguagens com vocabulário menor** (Python) tendem a usar menos tokens que linguagens verbosas (Java)
- **Idiomas não-ingleses** (como português) usam mais tokens por palavra, pois o tokenizador foi treinado predominantemente em inglês

> **Sugestão de imagem para o site:** Animação interativa do algoritmo BPE passo a passo. O usuário insere um texto e vê como os pares são fundidos progressivamente. Referência de implementação: https://github.com/openai/tiktoken

### 2.3 Vocabulários de Diferentes Modelos

| Modelo | Tokenizador | Tamanho do Vocabulário | Observação |
|---|---|---|---|
| GPT-2 | BPE | ~50.257 | Baseado em bytes |
| GPT-3.5/4 | cl100k_base (tiktoken) | ~100.256 | Melhor para código |
| GPT-4o | o200k_base | ~200.000 | Otimizado para multilíngue |
| Claude 3/3.5/4 | Proprietário (BPE variante) | ~100.000+ | Otimizado para código e multilíngue |
| LLaMA 2/3 | SentencePiece BPE | ~32.000-128.000 | Open source |

**Referência:** OpenAI. *"tiktoken"* — Biblioteca de tokenização rápida. Disponível em: https://github.com/openai/tiktoken

### 2.4 Tokens e Custos

Tokens são a **moeda** dos modelos de IA. Todo o modelo de precificação gira em torno deles:

**Estrutura de custos típica (valores ilustrativos — abril 2026; sempre verifique o site oficial):**

| Modelo | Provedor | Input (/1M) | Output (/1M) | Cache hit (/1M) | Thinking? |
|---|---|---|---|---|---|
| Claude Opus 4.6 | Anthropic | $15.00 | $75.00 | $1.50 | Sim (extended) |
| Claude Sonnet 4.6 | Anthropic | $3.00 | $15.00 | $0.30 | Sim (extended) |
| Claude Haiku 4.5 | Anthropic | $1.00 | $5.00 | $0.10 | Sim (extended) |
| GPT-5 | OpenAI | $5.00 | $20.00 | $0.50 | Sim (opcional) |
| GPT-5-mini | OpenAI | $0.30 | $1.20 | $0.03 | Sim (opcional) |
| o3 | OpenAI | $10.00 | $40.00 | — | Sim (nativo) |
| o4-mini | OpenAI | $1.10 | $4.40 | — | Sim (nativo) |
| Gemini 2.5 Pro | Google | $2.50 | $15.00 | $0.625 | Sim (Thinking) |
| Gemini 2.5 Flash | Google | $0.30 | $2.50 | $0.075 | Sim (Thinking) |
| Grok 4 | xAI | $5.00 | $15.00 | — | Sim |
| DeepSeek-V3 | DeepSeek | $0.27 | $1.10 | $0.07 | Não |
| DeepSeek-R1 | DeepSeek | $0.55 | $2.19 | — | Sim (reasoning) |
| Llama 4 Maverick | Meta (open) | ~$0.50 | ~$2.00 | — | Não |
| Mistral Large 2 | Mistral | $2.00 | $6.00 | — | Não |
| Qwen 3 Max | Alibaba | $1.60 | $6.40 | — | Parcial |

> **Fontes atualizadas:**
> - Anthropic: https://docs.anthropic.com/en/docs/about-claude/models
> - OpenAI: https://openai.com/api/pricing
> - Google: https://ai.google.dev/pricing
> - xAI: https://x.ai/api
> - DeepSeek: https://api-docs.deepseek.com
> - Artificial Analysis (comparativo independente): https://artificialanalysis.ai

> **Nota:** Consulte sempre os sites oficiais para preços atualizados:
> - Anthropic: https://docs.anthropic.com/en/docs/about-claude/models
> - OpenAI: https://openai.com/pricing

**Implicação prática:** A distinção entre tokens de **input** e **output** é crucial:

- **Input tokens** (mais baratos): seu prompt, contexto, arquivos enviados
- **Output tokens** (mais caros): a resposta gerada pelo modelo

Isso significa que enviar muito contexto (input) é proporcionalmente mais barato que pedir respostas longas (output). Esta é uma das razões pelas quais a **Engenharia de Contexto** (Módulo 4) é tão importante.

**Conceito: Prompt Caching**

Modelos como Claude oferecem **cache de prompt** — se o início do seu prompt for idêntico a uma chamada anterior recente, os tokens cacheados custam significativamente menos (até 90% de desconto). Isso é especialmente relevante para ferramentas como Claude Code, onde o contexto do sistema (system prompt) e arquivos do projeto são enviados repetidamente.

**Referência:** Anthropic. *"Prompt Caching"*. Disponível em: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching

### 2.5 Ferramentas Práticas para Tokens

| Ferramenta | URL | Descrição |
|---|---|---|
| **OpenAI Tokenizer** | https://platform.openai.com/tokenizer | Visualizador oficial da OpenAI — cole texto e veja os tokens coloridos |
| **Tiktokenizer** | https://tiktokenizer.vercel.app | Versão open-source com visualização colorida de tokens |
| **tiktoken (Python)** | https://github.com/openai/tiktoken | Biblioteca Python para contagem programática de tokens |
| **Anthropic Token Counter** | https://docs.anthropic.com/en/docs/build-with-claude/token-counting | API da Anthropic para contagem de tokens do Claude |
| **Hugging Face Tokenizers** | https://huggingface.co/docs/tokenizers | Biblioteca universal de tokenizadores |

> **Sugestão para o site:** Embutir um iframe com o Tiktokenizer (https://tiktokenizer.vercel.app) diretamente na página, ou criar um componente JavaScript customizado usando a biblioteca tiktoken via WebAssembly para permitir experimentação ao vivo.

### 2.6 Exercício Prático: Contando Tokens

**Exercício para os participantes:**

1. Acesse https://platform.openai.com/tokenizer
2. Cole o seguinte trecho de código Python:

```python
def calcular_fatorial(n):
    """Calcula o fatorial de um número inteiro positivo."""
    if n < 0:
        raise ValueError("Número deve ser não-negativo")
    if n == 0:
        return 1
    return n * calcular_fatorial(n - 1)
```

3. Observe quantos tokens são gerados
4. Agora traduza os nomes para inglês e compare:

```python
def calculate_factorial(n):
    """Calculate the factorial of a positive integer."""
    if n < 0:
        raise ValueError("Number must be non-negative")
    if n == 0:
        return 1
    return n * calculate_factorial(n - 1)
```

5. Compare a diferença — o código em inglês usa **menos tokens** porque o tokenizador foi treinado predominantemente em inglês

**Ponto-chave:** Isso tem implicação direta em custos e eficiência quando programamos com IA. Código com nomes em inglês é mais "token-eficiente" para modelos atuais.

---

## Módulo 3 — Janela de Contexto

### 3.1 O que é a Janela de Contexto?

A **janela de contexto** (context window) é o **limite máximo de tokens** que um modelo pode processar em uma única interação. Pense nela como a "memória de trabalho" da LLM — tudo que o modelo pode "ver" simultaneamente.

**Analogia:** Imagine que você está trabalhando em uma mesa. A janela de contexto é o **tamanho da mesa**. Quanto maior a mesa, mais documentos, referências e notas você pode ter abertos ao mesmo tempo. Uma mesa pequena obriga você a empilhar documentos e trocar entre eles — perdendo visão do todo.

**A janela de contexto inclui TUDO:**

```
┌─────────────────────────────────────────────────────┐
│                  JANELA DE CONTEXTO                  │
│                                                     │
│  ┌─────────────────────────────────────────┐        │
│  │  System Prompt (instruções ao modelo)    │        │
│  │  Ex: "Você é um assistente de código..." │        │
│  └─────────────────────────────────────────┘        │
│  ┌─────────────────────────────────────────┐        │
│  │  Histórico de mensagens anteriores       │        │
│  │  (toda a conversa até agora)             │        │
│  └─────────────────────────────────────────┘        │
│  ┌─────────────────────────────────────────┐        │
│  │  Contexto adicional                      │        │
│  │  (arquivos, documentos, resultados de    │        │
│  │   ferramentas, código-fonte)             │        │
│  └─────────────────────────────────────────┘        │
│  ┌─────────────────────────────────────────┐        │
│  │  Sua mensagem atual (prompt do usuário)  │        │
│  └─────────────────────────────────────────┘        │
│  ┌─────────────────────────────────────────┐        │
│  │  Espaço para a resposta do modelo        │        │
│  │  (tokens de output)                      │        │
│  └─────────────────────────────────────────┘        │
│                                                     │
│  TOTAL ≤ limite da janela de contexto               │
└─────────────────────────────────────────────────────┘
```

### 3.2 Evolução das Janelas de Contexto

A evolução das janelas de contexto é uma das histórias mais impressionantes da IA recente:

| Modelo | Ano | Janela de Contexto | Equivalente aproximado |
|---|---|---|---|
| GPT-2 | 2019 | 1.024 tokens | ~2 páginas |
| GPT-3 | 2020 | 4.096 tokens | ~6 páginas |
| GPT-3.5 | 2022 | 4.096 tokens | ~6 páginas |
| GPT-3.5-16k | 2023 | 16.384 tokens | ~24 páginas |
| GPT-4 | 2023 | 8.192 tokens | ~12 páginas |
| GPT-4-32k | 2023 | 32.768 tokens | ~50 páginas |
| Claude 2 | 2023 | 100.000 tokens | ~150 páginas |
| GPT-4 Turbo | 2023 | 128.000 tokens | ~200 páginas |
| Claude 3 | 2024 | 200.000 tokens | ~300 páginas |
| Gemini 1.5 Pro | 2024 | 1.000.000 tokens | ~1.500 páginas |
| Claude 3.5/4 | 2024-2025 | 200.000 tokens | ~300 páginas |
| Claude Opus 4 (estendido) | 2025 | 1.000.000 tokens | ~1.500 páginas |
| GPT-5 | 2025 | 400.000 tokens | ~600 páginas |
| o3 / o4-mini | 2025 | 200.000 tokens | ~300 páginas |
| Gemini 2.5 Pro | 2025 | 2.000.000 tokens | ~3.000 páginas |
| Llama 4 Scout | 2025 | 10.000.000 tokens | ~15.000 páginas |
| Claude Opus 4.6 | 2026 | 1.000.000 tokens | ~1.500 páginas |
| Claude Sonnet 4.6 | 2026 | 1.000.000 tokens | ~1.500 páginas |
| Grok 4 | 2026 | 256.000 tokens | ~400 páginas |
| DeepSeek-R1 | 2026 | 128.000 tokens | ~200 páginas |

> **Nota crítica — contexto útil ≠ contexto anunciado:** um modelo anunciar 10M tokens de janela não significa que use todos com a mesma qualidade. O benchmark **RULER** (Hsieh et al. 2024, arXiv:2404.06654) mostra que a maioria dos modelos degrada significativamente muito antes do limite anunciado. Ver também o benchmark **NoLiMa** (Modarressi et al. 2025) para long-context reasoning sem literal matching.

> **Sugestão de imagem para o site:** Gráfico de barras ou timeline interativo mostrando a evolução exponencial das janelas de contexto ao longo dos anos. Usar uma escala logarítmica para visualizar melhor. Implementável com Chart.js ou D3.js.

**Referência:** Anthropic. *"Context Windows"*. Disponível em: https://docs.anthropic.com/en/docs/build-with-claude/context-windows

**Referência:** Anthropic. *"100K Context Windows"* (blog post). Disponível em: https://www.anthropic.com/news/100k-context-windows

**Referência:** Anthropic. *"Prompting Long Context"*. Disponível em: https://www.anthropic.com/news/prompting-long-context

### 3.3 A Janela de Contexto na Prática da Programação

Na programação com IA, a janela de contexto determina **quanto do seu projeto o modelo pode "ver" simultaneamente**. Isso tem implicações profundas:

**Cenário real — Debugando um bug em um projeto grande:**

```
Seu projeto tem:
├── 500 arquivos de código
├── 200.000 linhas de código total
├── ~2.000.000 tokens no total

Janela de contexto do Claude (200K tokens):
├── System prompt e instruções: ~5.000 tokens
├── Histórico da conversa: ~15.000 tokens  
├── Espaço disponível para código: ~160.000 tokens
├── Reserva para resposta: ~20.000 tokens

Resultado: O modelo pode "ver" ~8% do seu projeto por vez
```

**Isso significa que:**

1. **O modelo não pode ver todo o seu projeto de uma vez** — ferramentas como Claude Code precisam ser inteligentes sobre **quais** arquivos carregar no contexto
2. **A seleção de contexto é crítica** — enviar os arquivos certos é mais importante que enviar tudo
3. **Conversas longas consomem janela** — cada mensagem anterior ocupa espaço que poderia ser usado para código
4. **Compressão de contexto** é uma técnica real — algumas ferramentas resumem mensagens antigas para liberar espaço

### 3.4 O Problema do "Lost in the Middle"

Um fenômeno importante descoberto por pesquisadores é que LLMs prestam **menos atenção** a informações que estão no **meio** de contextos longos, comparado com informações no início e no final.

**Referência:** Liu, N. et al. (2023). *"Lost in the Middle: How Language Models Use Long Contexts"*. Stanford University. arXiv:2307.03172. Disponível em: https://arxiv.org/abs/2307.03172

**Implicação prática:** Quando você está programando com IA e envia múltiplos arquivos como contexto:

- Coloque as informações **mais importantes** no **início** ou no **final** do contexto
- **Não confie** que o modelo prestará igual atenção a um arquivo no meio de 20 outros
- Ferramentas como Claude Code mitigam isso com técnicas de organização inteligente do contexto

> **Sugestão de imagem para o site:** Gráfico "U-shaped" (curva em U) mostrando a performance do modelo versus a posição da informação relevante no contexto. Início e final têm performance alta; meio tem performance mais baixa. Recriar o gráfico principal do paper "Lost in the Middle".

### 3.5 Conceitos Relacionados Importantes

#### 3.5.1 Context Window vs. Max Output Tokens

Não confunda:
- **Context Window** = limite TOTAL (input + output)
- **Max Output Tokens** = limite apenas para a resposta

Exemplo: Claude 3.5 Sonnet tem 200K de contexto mas máximo de 8.192 tokens de output por padrão (extensível a 64K com configuração).

#### 3.5.2 Prompt Caching e a Janela de Contexto

Quando a janela de contexto é grande e o início do prompt é repetido entre chamadas (como em ferramentas de codificação), o **prompt caching** (Módulo 2.4) permite reutilizar o processamento dos tokens iniciais, reduzindo custo e latência significativamente.

**Referência:** Anthropic. *"Prompt Caching"*. Disponível em: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching

---

## Módulo 4 — Engenharia de Contexto

### 4.1 O que é Engenharia de Contexto?

Se a Janela de Contexto é o **espaço** disponível, a **Engenharia de Contexto** (Context Engineering) é a **arte e ciência de preencher esse espaço da forma mais eficaz possível**.

**Definição formal:** Engenharia de Contexto é o conjunto de técnicas, estratégias e decisões arquiteturais para selecionar, organizar, comprimir e gerenciar as informações que são enviadas a um modelo de linguagem, maximizando a qualidade das respostas dentro dos limites da janela de contexto.

**Enquanto Prompt Engineering** foca em **como formular** a pergunta, **Engenharia de Contexto** foca em **o que incluir** junto com a pergunta.

**Analogia:** Se você está consultando um advogado (a LLM):
- **Prompt Engineering** = como formular sua pergunta ao advogado
- **Engenharia de Contexto** = quais documentos, contratos e evidências levar à reunião

Levar documentos errados ou irrelevantes é tão prejudicial quanto não levar documentos suficientes.

**Referência fundamental:** Anthropic Engineering (2025). *"Effective Context Engineering for AI Agents"*. Disponível em: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents — Post autoritativo da equipe de engenharia da Anthropic sobre estratégias de curadoria e gerenciamento do conjunto ótimo de tokens durante a inferência de LLMs. Cobre o conceito de "context rot", "attention budget", e padrões práticos para gerenciamento de contexto em agentes.

**Referência adicional:** CIO.com (2025). *"Context Engineering: Improving AI by Moving Beyond the Prompt"*. Disponível em: https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html

### 4.2 Os Quatro Pilares da Engenharia de Contexto

#### Pilar 1 — Seleção de Contexto

Decidir **o que incluir** na janela de contexto é a decisão mais impactante:

**Técnicas de seleção:**

| Técnica | Descrição | Quando usar |
|---|---|---|
| **Seleção manual** | O programador decide quais arquivos incluir | Debugging focado, quando você sabe exatamente onde o problema está |
| **Seleção por relevância semântica (RAG)** | Busca vetorial encontra trechos relevantes automaticamente | Bases de código grandes, documentação extensa |
| **Seleção por grafo de dependências** | Análise estática do código para incluir imports e dependências | Entender efeitos colaterais de mudanças |
| **Seleção por recência** | Priorizar arquivos modificados recentemente | Bug em código novo, code review |
| **Seleção heurística** | Regras como "sempre incluir o README, testes e schema" | Setup inicial de contexto para qualquer tarefa |

**Exemplo prático em Claude Code:**

```
# Claude Code faz seleção inteligente automaticamente:
# 1. Lê o CLAUDE.md do projeto (regras e contexto)
# 2. Usa ferramentas (Glob, Grep) para encontrar arquivos relevantes
# 3. Lê apenas as partes necessárias de cada arquivo
# 4. Mantém o histórico da conversa comprimido
```

**Referência:** Lewis, P. et al. (2020). *"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"*. Facebook AI/UCL. arXiv:2005.11401. Disponível em: https://arxiv.org/abs/2005.11401 — Paper fundacional sobre RAG (Retrieval-Augmented Generation).

#### Pilar 2 — Organização do Contexto

A **ordem** e **estrutura** das informações no contexto impactam diretamente a qualidade da resposta:

**Princípios de organização:**

1. **Informações mais importantes primeiro ou por último** (evitar o "Lost in the Middle")
2. **Separação clara entre tipos de informação** — use delimitadores:

```xml
<system_instructions>
Você é um assistente de código especializado em Python.
</system_instructions>

<project_context>
<!-- Arquitetura do projeto, convenções, stack -->
</project_context>

<relevant_code>
<!-- Arquivos de código relevantes para a tarefa -->
</relevant_code>

<user_request>
Corrija o bug na função de autenticação.
</user_request>
```

3. **Hierarquia de informação** — do geral para o específico
4. **Metadados explícitos** — nomes de arquivo, números de linha, caminhos

#### Pilar 3 — Compressão de Contexto

Quando há mais informação relevante do que espaço disponível:

**Técnicas de compressão:**

| Técnica | Descrição | Trade-off |
|---|---|---|
| **Resumo automático** | LLM resume mensagens antigas da conversa | Perde detalhes mas mantém essência |
| **Truncamento inteligente** | Remove partes menos relevantes de arquivos longos | Risco de perder contexto crucial |
| **Chunking** | Divide documentos grandes em pedaços menores e seleciona os mais relevantes | Pode perder visão do todo |
| **Extração de esqueleto** | Extrai apenas assinaturas de funções, tipos e interfaces de arquivos grandes | Perde implementação mas mantém estrutura |
| **Deduplicação** | Remove informação repetida entre múltiplas fontes | Pode perder nuances de diferentes contextos |

**Exemplo de compressão em Claude Code:**

Claude Code implementa compressão automática de contexto quando a conversa fica longa. O sistema:
1. Identifica mensagens antigas que podem ser resumidas
2. Mantém intactas as mensagens recentes e as mais relevantes
3. Resume o restante preservando decisões-chave e contexto essencial
4. Libera espaço para novas interações e código

#### Pilar 4 — Atualização Dinâmica do Contexto

O contexto não é estático — ele deve evoluir conforme a tarefa progride:

**Exemplos de atualização dinâmica:**

- **Ferramentas de busca:** Claude Code usa `Grep` e `Glob` para buscar informação sob demanda, em vez de carregar tudo antecipadamente
- **Resultados de execução:** Resultados de testes, logs de erro e output de comandos são adicionados ao contexto em tempo real
- **Refinamento iterativo:** A cada turno da conversa, o contexto é refinado com base no que foi aprendido

### 4.3 Engenharia de Contexto vs. RAG

**RAG (Retrieval-Augmented Generation)** é uma técnica **dentro** da Engenharia de Contexto, não um sinônimo:

```
Engenharia de Contexto (disciplina ampla)
├── Seleção de Contexto
│   ├── RAG (busca semântica) ← RAG é apenas uma técnica
│   ├── Seleção por grafo de dependências
│   ├── Seleção manual
│   └── Seleção heurística
├── Organização do Contexto
├── Compressão de Contexto
└── Atualização Dinâmica
```

**Referência sobre RAG:** Gao, Y. et al. (2024). *"Retrieval-Augmented Generation for Large Language Models: A Survey"*. arXiv:2312.10997. Disponível em: https://arxiv.org/abs/2312.10997

### 4.4 Engenharia de Contexto na Prática

**Cenário: Você quer que Claude Code corrija um bug em uma API REST**

**Abordagem RUIM (sem engenharia de contexto):**
```
"Corrige o bug na API"
→ Modelo não tem contexto suficiente
→ Precisa fazer muitas perguntas
→ Respostas genéricas
```

**Abordagem BOA (com engenharia de contexto):**
```
Contexto fornecido ao modelo:
1. CLAUDE.md com arquitetura do projeto
2. O arquivo da rota com bug
3. O modelo de dados relevante
4. O teste que está falhando (com output do erro)
5. Dependências diretas (services, repositories)

Prompt: "O teste test_create_user está falhando com 'IntegrityError'. 
O erro está na rota POST /users. Corrija mantendo a convenção 
do projeto de usar repository pattern."

→ Modelo tem tudo que precisa
→ Resposta precisa e contextualizada
→ Segue as convenções do projeto
```

> **Sugestão para o site:** Demonstração lado-a-lado (split screen) mostrando a mesma tarefa com e sem boa engenharia de contexto, e a diferença na qualidade das respostas.

---

## Módulo 5 — Prompt Engineering

### 5.1 O que é Prompt Engineering?

**Prompt Engineering** é a disciplina de formular instruções e inputs para modelos de linguagem de forma a obter os melhores resultados possíveis. É a ponte entre a intenção humana e a compreensão da máquina.

**Enquanto a Engenharia de Contexto decide O QUE enviar ao modelo, Prompt Engineering decide COMO formular o que é enviado.**

**Referência fundamental:** Anthropic. *"Prompt Engineering Guide"*. Disponível em: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Guia oficial da Anthropic, continuamente atualizado.

**Referência adicional:** OpenAI. *"Prompt Engineering Guide"*. Disponível em: https://platform.openai.com/docs/guides/prompt-engineering — Guia oficial da OpenAI.

**Referência acadêmica:** Wei, J. et al. (2022). *"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"*. Google Brain. arXiv:2201.11903. Disponível em: https://arxiv.org/abs/2201.11903 — Paper que formalizou Chain-of-Thought prompting.

### 5.2 Técnicas Fundamentais de Prompt Engineering

#### 5.2.1 Zero-Shot Prompting

O modelo recebe apenas a instrução, sem exemplos:

```
Prompt: "Escreva uma função Python que valida endereços de email."

# Útil quando a tarefa é bem definida e o modelo tem conhecimento suficiente
```

#### 5.2.2 Few-Shot Prompting

O modelo recebe exemplos do formato desejado antes da tarefa:

```
Prompt: "Converta estas descrições em schemas SQL:

Descrição: 'Tabela de usuários com nome, email e data de criação'
SQL: CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Descrição: 'Tabela de pedidos com valor total e status'
SQL: CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Descrição: 'Tabela de produtos com nome, preço e categoria'
SQL:"
```

**Referência:** Brown, T. et al. (2020). *"Language Models are Few-Shot Learners"*. arXiv:2005.14165. Disponível em: https://arxiv.org/abs/2005.14165

#### 5.2.3 Chain-of-Thought (CoT)

Instruir o modelo a "pensar passo a passo" antes de dar a resposta final:

```
Prompt: "Analise este código e identifique o bug. 
Pense passo a passo: primeiro entenda o que o código faz, 
depois trace a execução com dados de exemplo, 
e finalmente identifique onde o comportamento diverge do esperado.

```python
def binary_search(arr, target):
    low, high = 0, len(arr)
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid + 1  # Bug aqui
    return -1
```"
```

**Referência:** Wei, J. et al. (2022). *"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"*. arXiv:2201.11903.

#### 5.2.4 Role Prompting (Atribuição de Papel)

Definir um papel específico para o modelo:

```
Prompt: "Você é um engenheiro de software sênior especializado em 
segurança de aplicações web. Revise o seguinte código de autenticação 
e identifique vulnerabilidades OWASP Top 10. Para cada vulnerabilidade 
encontrada, explique o risco e forneça o código corrigido."
```

#### 5.2.5 Structured Output (Saída Estruturada)

Solicitar resposta em formato específico:

```
Prompt: "Analise este pull request e responda EXATAMENTE neste formato JSON:
{
  'aprovado': boolean,
  'problemas': [
    {
      'arquivo': 'caminho/do/arquivo',
      'linha': número,
      'severidade': 'critical' | 'warning' | 'suggestion',
      'descrição': 'texto',
      'correção_sugerida': 'código'
    }
  ],
  'resumo': 'texto'
}"
```

### 5.3 Técnicas Avançadas de Prompt Engineering

#### 5.3.1 System Prompts

O **system prompt** é a instrução "invisível" que define o comportamento base do modelo. Ferramentas como Claude Code usam system prompts extensos:

```
System: "Você é Claude Code, o assistente de programação da Anthropic.
Você opera no terminal do usuário e tem acesso a ferramentas para 
ler, editar e criar arquivos, executar comandos bash, e buscar 
no código. 

Regras:
1. Sempre leia um arquivo antes de editá-lo
2. Prefira editar arquivos existentes a criar novos
3. Não adicione funcionalidades além do solicitado
4. Não introduza vulnerabilidades de segurança
..."
```

#### 5.3.2 Prompt Chaining (Encadeamento de Prompts)

Dividir tarefas complexas em etapas sequenciais onde a saída de um prompt alimenta o próximo:

```
Etapa 1: "Analise os requisitos e liste as entidades do sistema"
    → Saída: [User, Order, Product, Payment]

Etapa 2: "Para cada entidade, defina o schema do banco de dados"
    → Saída: SQL schemas

Etapa 3: "Gere os modelos ORM a partir dos schemas"
    → Saída: Código dos modelos

Etapa 4: "Gere os endpoints REST CRUD para cada modelo"
    → Saída: Código das rotas
```

#### 5.3.3 Self-Consistency

Gerar múltiplas respostas e selecionar a mais consistente:

```
Prompt: "Gere 3 abordagens diferentes para implementar cache 
nesta API. Para cada abordagem, liste prós e contras. 
Depois, recomende a melhor opção justificando sua escolha."
```

**Referência:** Wang, X. et al. (2022). *"Self-Consistency Improves Chain of Thought Reasoning in Language Models"*. Google Research. arXiv:2203.11171. Disponível em: https://arxiv.org/abs/2203.11171

#### 5.3.4 Extended Thinking (Pensamento Estendido)

Modelos como Claude oferecem um modo de "pensamento estendido" onde o modelo raciocina internamente antes de responder. Isso é especialmente útil para:

- Problemas de arquitetura complexos
- Debugging de bugs sutis
- Decisões de design com múltiplos trade-offs

**Referência:** Anthropic. *"Extended Thinking"*. Disponível em: https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking

### 5.4 Anti-Padrões de Prompt Engineering

| Anti-Padrão | Problema | Correção |
|---|---|---|
| **Prompt vago** | "Melhore este código" | "Refatore para separar a lógica de validação da lógica de negócio" |
| **Prompt contraditório** | "Seja conciso mas explique em detalhes" | Escolha um estilo e seja consistente |
| **Excesso de instruções** | 50 regras no prompt | Priorize as 5-10 regras mais importantes |
| **Falta de formato** | "Gere testes" | "Gere testes usando pytest, com pelo menos um teste para o caminho feliz e um para cada caso de erro" |
| **Antropomorfização** | "Pense como um humano" | "Analise sistematicamente cada condição do if/else" |

### 5.5 Prompt Engineering Específico para Código

Ao programar com IA, há padrões específicos que funcionam melhor:

**1. Forneça o contexto do erro completo:**
```
# RUIM:
"O código não funciona"

# BOM:
"Ao executar `pytest test_auth.py`, recebo o seguinte erro:
[cole o traceback completo]
O erro ocorre na linha 45 de auth_service.py"
```

**2. Especifique o framework e versão:**
```
# RUIM:
"Crie uma API REST"

# BOM:
"Crie um endpoint POST /api/users usando FastAPI 0.104+, 
com Pydantic v2 para validação e SQLAlchemy 2.0 para ORM"
```

**3. Indique as convenções do projeto:**
```
# BOM:
"Este projeto usa:
- Python 3.12, FastAPI, SQLAlchemy 2.0
- Padrão Repository para acesso a dados
- Testes com pytest e fixtures para DB
- Nomes de variáveis em snake_case
- Docstrings no formato Google"
```

**4. Delimite o escopo claramente:**
```
# BOM:
"Adicione validação de CPF à função create_user em 
user_service.py. NÃO modifique outros arquivos. 
Use a biblioteca validate-docbr já instalada no projeto."
```

> **Sugestão para o site:** Seção interativa "Prompt Playground" onde o usuário pode escrever um prompt, ver sugestões de melhoria em tempo real, e comparar resultados antes/depois da otimização.

---

## Módulo 6 — Spec-Driven Design

### 6.1 O que é Spec-Driven Design?

**Spec-Driven Design** (Design Orientado a Especificação) é uma metodologia de desenvolvimento onde você escreve uma **especificação detalhada** antes de pedir ao agente de IA para implementar o código. Em vez de descrever o que quer em linguagem informal, você cria um documento estruturado que serve como "contrato" entre você e o agente.

**Por que isso importa:** Agentes de IA como Claude Code são poderosos, mas **só podem ser tão bons quanto as instruções que recebem**. Uma especificação clara e completa é a diferença entre:

- ❌ Múltiplas iterações de "não era isso que eu queria"
- ✅ Implementação correta na primeira tentativa

**Analogia:** Spec-Driven Design para IA é como um **blueprint arquitetônico** para uma construtora. Você não diz ao engenheiro "construa uma casa legal" — você entrega plantas detalhadas com medidas, materiais e especificações técnicas.

### 6.2 Anatomia de uma Especificação para IA

Uma boa especificação para um agente de IA contém:

```markdown
# Especificação: [Nome da Feature]

## 1. Objetivo
O que esta feature faz e por que ela existe.

## 2. Contexto
- Onde ela se encaixa no sistema
- Decisões de design já tomadas
- Restrições conhecidas

## 3. Requisitos Funcionais
- [ ] RF01: O sistema deve...
- [ ] RF02: Quando o usuário..., o sistema deve...
- [ ] RF03: ...

## 4. Requisitos Não-Funcionais
- Performance: resposta em < 200ms
- Segurança: validação de input em todas as entradas
- Compatibilidade: manter API backwards-compatible

## 5. Interface / API
```
POST /api/resource
Content-Type: application/json

Request:
{
  "field1": "string (required, max 255 chars)",
  "field2": "integer (optional, default: 0)"
}

Response 201:
{
  "id": "uuid",
  "field1": "string",
  "created_at": "ISO 8601"
}

Response 400:
{
  "error": "validation_error",
  "details": [...]
}
```

## 6. Modelos de Dados
Schemas, tabelas, relacionamentos.

## 7. Regras de Negócio
Lógica que deve ser implementada.

## 8. Casos de Teste Esperados
- Cenário feliz: ...
- Cenário de erro: ...
- Cenário de borda: ...

## 9. Arquivos a Serem Modificados/Criados
Lista explícita de onde o código deve ir.

## 10. O que NÃO fazer
Limites claros do escopo.
```

### 6.3 Spec-Driven Design na Prática

**Workflow completo:**

```
1. ANÁLISE
   Entenda o problema e o contexto
   ↓
2. ESPECIFICAÇÃO
   Escreva a spec detalhada (pode usar a IA para ajudar!)
   ↓
3. REVISÃO DA SPEC
   Valide a spec com stakeholders/equipe
   ↓
4. IMPLEMENTAÇÃO COM IA
   Entregue a spec ao agente de IA
   ↓
5. REVIEW DO CÓDIGO
   Verifique se a implementação atende a spec
   ↓
6. ITERAÇÃO
   Se necessário, refine a spec e repita
```

**Exemplo real — Usando Claude Code com Spec-Driven Design:**

```bash
# 1. Crie o arquivo de spec
$ cat > specs/user-registration.md << 'EOF'
# Spec: Registro de Usuário

## Objetivo
Implementar endpoint de registro com validação completa.

## Stack
- FastAPI 0.104+, Python 3.12
- SQLAlchemy 2.0 (async), PostgreSQL
- Pydantic v2 para validação
- bcrypt para hashing de senha

## Endpoint
POST /api/v1/auth/register

## Request Body
{
  "email": "string, required, valid email format",
  "password": "string, required, min 8 chars, 1 uppercase, 1 number",
  "name": "string, required, 2-100 chars"
}

## Regras de Negócio
1. Email deve ser único (409 se já existir)
2. Senha deve ser hasheada com bcrypt (rounds=12)
3. Criar registro na tabela `users`
4. Retornar user sem campo password

## Testes Esperados
- test_register_success
- test_register_duplicate_email
- test_register_weak_password
- test_register_invalid_email

## Arquivos
- app/routers/auth.py (criar)
- app/schemas/auth.py (criar)
- app/services/auth_service.py (criar)
- tests/test_auth.py (criar)

## NÃO fazer
- Não implementar login (será outra spec)
- Não enviar email de verificação (será outra spec)
- Não adicionar rate limiting (será config global)
EOF

# 2. Use Claude Code com a spec
$ claude "Implemente exatamente o que está descrito em specs/user-registration.md. 
         Siga a spec à risca, sem adicionar funcionalidades extras."
```

### 6.4 Vantagens do Spec-Driven Design

| Vantagem | Descrição |
|---|---|
| **Determinismo** | Especificações claras produzem resultados consistentes entre diferentes sessões |
| **Reviewabilidade** | Fácil comparar implementação vs. spec e identificar desvios |
| **Paralelização** | Múltiplas specs podem ser implementadas em paralelo por diferentes agentes |
| **Documentação automática** | A spec já serve como documentação da feature |
| **Redução de iterações** | Menos "não era isso" → menos tokens gastos → menor custo |
| **Onboarding** | Novos membros da equipe entendem o "porquê" lendo specs |

### 6.5 Templates de Spec por Tipo de Tarefa

**Para Bug Fix:**
```markdown
# Bug Fix: [Título]
## Comportamento Atual (Bug)
O que acontece e como reproduzir.
## Comportamento Esperado
O que deveria acontecer.
## Causa Raiz (se conhecida)
Análise preliminar.
## Correção Proposta
Abordagem sugerida.
## Testes de Regressão
Testes que devem ser adicionados.
```

**Para Refactoring:**
```markdown
# Refactoring: [Título]
## Motivação
Por que refatorar.
## Estado Atual
Estrutura atual do código.
## Estado Desejado
Estrutura após refatoração.
## Invariantes
O que NÃO deve mudar (APIs públicas, comportamento).
## Estratégia de Migração
Passos incrementais.
```

**Referência principal:** Martin Fowler (2025). *"Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl"*. Disponível em: https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html — Análise autoritativa de Martin Fowler sobre ferramentas e padrões de SDD, uma das vozes mais respeitadas em engenharia de software.

**Referência oficial:** GitHub Blog (2025). *"Spec-driven development with AI: Get started with a new open source toolkit"*. Disponível em: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/ — Introdução do spec-kit, toolkit open-source para workflows de SDD.

**Toolkit:** GitHub spec-kit. Disponível em: https://github.com/github/spec-kit — Toolkit open-source para spec-driven development com GitHub Copilot, Claude Code e Gemini CLI.

**Referência adicional:** Thoughtworks (2025). *"Spec-driven development: Unpacking one of 2025's key new AI-assisted engineering practices"*. Disponível em: https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices

**Referência adicional:** InfoQ. *"Spec Driven Development: When Architecture Becomes Executable"*. Disponível em: https://www.infoq.com/articles/spec-driven-development/

**Referência adicional:** Anthropic. *"Claude Code Best Practices"*. Disponível em: https://docs.anthropic.com/en/docs/claude-code/best-practices — Inclui recomendações sobre uso de specs com Claude Code.

> **Sugestão para o site:** Template interativo onde o participante preenche campos de uma spec e vê o documento formatado sendo gerado em tempo real. Botão "Copiar para clipboard" para usar diretamente com ferramentas de IA.

---

## Módulo 7 — Panorama das Ferramentas de Programação com IA

### 7.1 A Evolução das Ferramentas

A programação assistida por IA evoluiu em três ondas:

```
ONDA 1 (2021-2022): Autocompletação Inteligente
├── GitHub Copilot (inline suggestions)
├── Tabnine
└── Amazon CodeWhisperer

ONDA 2 (2023-2024): Chat + Edição
├── ChatGPT / GPT-4
├── Cursor IDE
├── Copilot Chat
└── Codeium / Windsurf

ONDA 3 (2024-2025): Agentes Autônomos
├── Claude Code (CLI agentic)
├── OpenAI Codex CLI
├── Copilot Workspace
├── Devin (Cognition AI)
└── Cursor Agent Mode
```

> **Sugestão de imagem para o site:** Timeline horizontal interativa mostrando as três ondas, com logos das ferramentas e marcos importantes. Cada item clicável expande detalhes.

### 7.2 Comparativo das Principais Ferramentas

#### 7.2.1 Claude Code

**O que é:** Ferramenta CLI (Command Line Interface) agentic da Anthropic que opera diretamente no terminal do desenvolvedor.

**Como funciona:**
- Roda como agente autônomo no terminal
- Tem acesso a ferramentas: leitura/escrita de arquivos, execução de comandos bash, busca no código
- Usa Claude (Sonnet/Opus) como modelo base
- Mantém contexto da conversa e do projeto
- Suporta MCP (Model Context Protocol) para extensões

**Diferenciais:**
- Operação agentic real (não apenas chat)
- Acesso direto ao filesystem e terminal
- Sistema de rules (CLAUDE.md) para personalização
- Skills e Hooks para automação
- Suporte a MCP servers para integrações externas
- Extended Thinking para problemas complexos

**Referência:** Anthropic. *"Claude Code Documentation"*. Disponível em: https://docs.anthropic.com/en/docs/claude-code

#### 7.2.2 GitHub Copilot

**O que é:** Assistente de IA integrado a IDEs (VS Code, JetBrains, Neovim) que oferece sugestões de código inline.

**Como funciona:**
- Extensão de IDE que intercepta o contexto do editor
- Envia código circundante ao modelo (Codex/GPT-4)
- Retorna sugestões inline que aparecem em cinza
- Copilot Chat permite conversas sobre código

**Diferenciais:**
- Integração profunda com o editor
- Sugestões em tempo real enquanto digita
- Acesso ao ecossistema GitHub (issues, PRs, Actions)
- Copilot Workspace para desenvolvimento agent-based

**Referência:** GitHub. *"GitHub Copilot Documentation"*. Disponível em: https://docs.github.com/en/copilot

**Referência acadêmica:** Peng, S. et al. (2023). *"The Impact of AI on Developer Productivity: Evidence from GitHub Copilot"*. MIT/Microsoft. arXiv:2302.06590. Disponível em: https://arxiv.org/abs/2302.06590 — Estudo mostrando que Copilot aumenta produtividade em 55% para certas tarefas.

#### 7.2.3 OpenAI Codex (CLI)

**O que é:** Ferramenta CLI open-source da OpenAI para codificação agentic, similar ao Claude Code.

**Como funciona:**
- Opera no terminal como agente autônomo
- Usa modelos OpenAI (GPT-4o, o3)
- Acesso a ferramentas de filesystem e terminal
- Sandboxing para segurança

**Referência:** OpenAI. *"Codex CLI"*. Disponível em: https://github.com/openai/codex

#### 7.2.4 Cursor

**O que é:** IDE baseado em VS Code com IA profundamente integrada.

**Como funciona:**
- Fork do VS Code com recursos de IA nativos
- Suporta múltiplos modelos (Claude, GPT-4, etc.)
- Cmd+K para edição inline
- Chat para conversas multi-arquivo
- Agent Mode para tarefas autônomas
- `.cursorrules` para personalização

**Referência:** Cursor. *"Cursor Documentation"*. Disponível em: https://docs.cursor.com

#### 7.2.5 Windsurf (Codeium)

**O que é:** IDE AI-native da Codeium com modelo proprietário "Cascade".

**Como funciona:**
- IDE independente com IA integrada
- "Cascade" — sistema agentic que executa múltiplas ações
- "Supercomplete" — autocompleção com contexto profundo
- Suporta regras customizadas

**Referência:** Windsurf. Disponível em: https://windsurf.com

#### 7.2.6 Amazon Q Developer

**O que é:** Assistente de IA da AWS para desenvolvimento, anteriormente conhecido como CodeWhisperer.

**Como funciona:**
- Integração com VS Code e JetBrains
- Sugestões de código inline
- Chat para perguntas sobre código e AWS
- Transformação automática (ex: upgrade de Java)
- Scanning de segurança

**Referência:** AWS. *"Amazon Q Developer"*. Disponível em: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html

### 7.3 Tabela Comparativa

| Característica | Claude Code | Copilot | Codex CLI | Cursor | Windsurf |
|---|---|---|---|---|---|
| **Tipo** | CLI Agent | IDE Extension | CLI Agent | IDE | IDE |
| **Modelo base** | Claude | GPT-4/Codex | GPT-4o/o3 | Multi-modelo | Proprietário |
| **Autocompletação** | — | ✅ | — | ✅ | ✅ |
| **Chat** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Agent Mode** | ✅ (nativo) | ✅ (Workspace) | ✅ (nativo) | ✅ | ✅ (Cascade) |
| **Acesso terminal** | ✅ | Limitado | ✅ | ✅ | ✅ |
| **Acesso filesystem** | ✅ | Limitado | ✅ | ✅ | ✅ |
| **Rules/Config** | CLAUDE.md | .github/copilot-instructions.md | — | .cursorrules | Rules |
| **MCP** | ✅ | — | — | ✅ | — |
| **Hooks** | ✅ | — | — | — | — |
| **Skills** | ✅ | — | — | — | — |
| **Open source** | Parcial | ❌ | ✅ | ❌ | ❌ |

> **Sugestão para o site:** Tabela interativa com filtros onde o participante pode selecionar critérios e ver quais ferramentas atendem. Implementável com React Table ou similar.

### 7.4 Quando Usar Cada Ferramenta

| Cenário | Ferramenta Recomendada | Por que |
|---|---|---|
| Escrevendo código novo, quer sugestões enquanto digita | **Copilot** ou **Cursor** | Autocompletação em tempo real |
| Refatoração de múltiplos arquivos | **Claude Code** ou **Cursor Agent** | Agentes podem navegar e editar múltiplos arquivos |
| Debug complexo com investigação | **Claude Code** | Acesso pleno ao terminal para rodar testes, ler logs |
| Prototipação rápida | **Cursor** | IDE com chat e edição rápida |
| CI/CD e automação | **Claude Code** | Opera em CLI, pode ser integrado a pipelines |
| Projetos AWS | **Amazon Q** | Conhecimento específico do ecossistema AWS |

---

## Módulo 8 — Rules e Arquivos de Configuração

### 8.1 O Conceito de Rules

**Rules** são instruções persistentes que personalizam o comportamento de ferramentas de IA para um projeto ou organização específica. Elas funcionam como um **manual de estilo vivo** que é automaticamente incluído no contexto toda vez que a IA é invocada.

**Analogia:** Rules são como o `.editorconfig` ou `.eslintrc` do mundo da IA — definem as "regras do jogo" para o assistente, assim como linters definem regras para o código.

**Por que Rules existem:**
1. **Consistência:** Todo membro da equipe recebe as mesmas instruções da IA
2. **Contexto automático:** Informações críticas sobre o projeto são fornecidas sem que o desenvolvedor precise repetí-las
3. **Personalização:** A IA se adapta às convenções, stack e práticas do time
4. **Eficiência:** Evita reexplicar as mesmas coisas a cada conversa

### 8.2 CLAUDE.md — O "Manual do Projeto" para Claude

O arquivo **CLAUDE.md** é o mecanismo de rules do **Claude Code**. Ele é automaticamente lido e incluído no contexto do modelo no início de cada sessão.

**Localização e hierarquia:**

```
~/.claude/CLAUDE.md                    ← Global (todas as máquinas do usuário)
~/projeto/CLAUDE.md                    ← Raiz do projeto (commitado no git)
~/projeto/src/CLAUDE.md                ← Diretório específico (contexto local)
~/projeto/.claude/CLAUDE.md            ← Configuração local do projeto (não commitada)
```

**Hierarquia de carregamento:** Todos os níveis são carregados e combinados. O mais específico complementa (não substitui) o mais geral.

**Estrutura recomendada de um CLAUDE.md:**

```markdown
# CLAUDE.md

## Visão Geral do Projeto
Breve descrição do que o projeto faz e sua arquitetura.

## Stack Técnica
- Linguagem: Python 3.12
- Framework: FastAPI 0.104
- Banco de dados: PostgreSQL 16 + SQLAlchemy 2.0 (async)
- Testes: pytest + pytest-asyncio
- Linter: ruff
- Formatter: black

## Comandos Importantes
- `make test` — roda todos os testes
- `make lint` — roda linter
- `make dev` — inicia servidor de desenvolvimento
- `docker compose up -d` — sobe dependências

## Convenções de Código
- Use snake_case para funções e variáveis
- Use PascalCase para classes
- Docstrings no formato Google
- Imports absolutos (from app.services import ...)
- Repository pattern para acesso a dados
- Cada rota em arquivo separado em app/routers/

## Padrões Arquiteturais
```
app/
├── routers/      ← Endpoints (thin controllers)
├── schemas/      ← Pydantic models (request/response)
├── services/     ← Lógica de negócio
├── repositories/ ← Acesso a dados
├── models/       ← SQLAlchemy models
└── core/         ← Config, deps, security
```

## Regras Importantes
- SEMPRE rode `make lint` antes de commitar
- NUNCA modifique arquivos em migrations/ manualmente
- Testes devem usar fixtures do conftest.py para DB
- Variáveis de ambiente vão em .env (NÃO commitar)

## Contexto de Negócio
Este é um sistema de e-commerce B2B. Os "usuários" são empresas,
não pessoas físicas. Pedidos podem ter múltiplos endereços de entrega.
```

**Referência:** Anthropic. *"How Claude remembers your project"*. Disponível em: https://docs.anthropic.com/en/docs/claude-code/memory

**Referência prática:** Anthropic. *"How Anthropic teams use Claude Code"* (PDF). Disponível em: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf — Documento interno da Anthropic mostrando como suas próprias equipes usam CLAUDE.md e Claude Code.

**Exemplo real:** CLAUDE.md do repositório claude-code-action da Anthropic. Disponível em: https://github.com/anthropics/claude-code-action/blob/main/CLAUDE.md

### 8.3 agents.md — Instruções para Agentes Específicos

O arquivo **agents.md** (ou diretório `.claude/agents/`) permite definir **agentes especializados** no Claude Code — agentes com instruções, ferramentas e comportamentos customizados para tarefas específicas.

**Exemplo de estrutura:**

```
.claude/
├── agents/
│   ├── code-reviewer.md      ← Agente de revisão de código
│   ├── test-writer.md        ← Agente de escrita de testes
│   └── db-migration.md       ← Agente de migrações de banco
```

**Exemplo de um agente especializado (.claude/agents/code-reviewer.md):**

```markdown
---
name: Code Reviewer
description: Revisa código focando em segurança, performance e boas práticas
tools:
  - Read
  - Grep
  - Glob
  - Bash
---

# Instruções

Você é um revisor de código sênior. Ao receber código para revisão:

1. Leia TODOS os arquivos modificados
2. Verifique cada um dos seguintes critérios:
   - [ ] Segurança (OWASP Top 10)
   - [ ] Performance (queries N+1, loops desnecessários)
   - [ ] Tratamento de erros
   - [ ] Cobertura de testes
   - [ ] Aderência às convenções do CLAUDE.md

3. Produza um relatório no formato:
   ## Resumo
   ## Problemas Críticos
   ## Sugestões de Melhoria
   ## Aprovação: SIM/NÃO

Nunca modifique arquivos — apenas analise e reporte.
```

### 8.4 Equivalentes em Outras Ferramentas

| Ferramenta | Arquivo de Rules | Escopo |
|---|---|---|
| **Claude Code** | `CLAUDE.md` | Global, projeto, diretório |
| **Cursor** | `.cursorrules` | Projeto |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Repositório |
| **Windsurf** | Rules (no IDE) | Projeto |
| **Aider** | `.aider.conf.yml` | Projeto |

**Exemplo de .cursorrules:**

```markdown
You are an expert in TypeScript, React, Next.js 14, and Tailwind CSS.

Key Principles:
- Write concise, type-safe TypeScript code
- Use functional components with hooks
- Prefer server components where possible
- Use Tailwind for styling, no CSS modules

Naming Conventions:
- Components: PascalCase (UserProfile.tsx)
- Utilities: camelCase (formatDate.ts)
- Constants: UPPER_SNAKE_CASE

File Structure:
- app/ for routes (Next.js App Router)
- components/ for reusable components
- lib/ for utilities and helpers
- types/ for TypeScript interfaces
```

**Exemplo de .github/copilot-instructions.md:**

```markdown
## Project Context
This is a Go microservice for payment processing.

## Conventions
- Use Go standard library where possible
- Error handling: always wrap errors with fmt.Errorf
- Logging: use slog (structured logging)
- Tests: table-driven tests with testify

## Security
- Never log sensitive data (card numbers, CVV)
- Always validate input at handler level
- Use parameterized queries (no string concatenation for SQL)
```

### 8.5 Boas Práticas para Rules

1. **Seja específico, não genérico** — "Use Repository pattern" é melhor que "Siga boas práticas"
2. **Inclua exemplos** — Mostre código que exemplifica as convenções
3. **Mantenha atualizado** — Rules desatualizadas são piores que não ter rules
4. **Commite no repositório** — Rules devem ser versionadas e compartilhadas com a equipe
5. **Não duplique documentação** — Rules complementam, não substituem, docs existentes
6. **Priorize o que a IA erra** — Se a IA sempre acerta algo, não precisa de rule para isso
7. **Inclua comandos de build/test** — A IA precisa saber como verificar seu trabalho

> **Sugestão para o site:** Gerador interativo de CLAUDE.md onde o participante seleciona stack, convenções e padrões, e um arquivo é gerado automaticamente. Botão para download.

---

## Módulo 9 — Skills e Hooks

### 9.1 Skills: Expandindo as Capacidades

**Skills** são comandos especializados que estendem o que uma ferramenta de IA pode fazer. No contexto do Claude Code, skills são invocadas via comandos `/` (slash commands) e encapsulam workflows complexos em uma única ação.

**Analogia:** Skills são como **macros** ou **scripts reutilizáveis** — em vez de dar instruções detalhadas toda vez, você invoca um comando que já sabe o que fazer.

**Exemplos de Skills no Claude Code:**

| Skill | Comando | O que faz |
|---|---|---|
| **Commit** | `/commit` | Analisa mudanças, gera mensagem de commit seguindo convenções |
| **Code Review** | `/review` | Revisa código de um PR com checklist completo |
| **Simplify** | `/simplify` | Revisa código alterado buscando simplificações |
| **Claude MD Improver** | `/claude-md-improver` | Audita e melhora CLAUDE.md do projeto |

**Como Skills funcionam internamente:**

```
Usuário digita: /commit

1. Claude Code intercepta o comando
2. Carrega a definição da skill "commit"
   (prompt especializado + regras + ferramentas permitidas)
3. Executa o workflow definido:
   a. git status (ver mudanças)
   b. git diff (ler as mudanças)
   c. git log (ver estilo de commits anteriores)
   d. Analisa e gera mensagem de commit
   e. Cria o commit
4. Retorna resultado ao usuário
```

**Criando Skills Customizadas:**

Skills customizadas podem ser definidas como prompts reutilizáveis. No ecossistema Claude Code, isso é feito através de **Agent Skills** — recursos baseados em filesystem que fornecem expertise específica de domínio via arquivos `SKILL.md`.

**Referência:** Anthropic. *"Agent Skills Overview"*. Disponível em: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview

**Referência:** Anthropic Engineering (2025). *"Equipping agents for the real world with Agent Skills"*. Disponível em: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

**Repositório de Skills:** https://github.com/anthropics/skills — Repositório público da Anthropic com Agent Skills reutilizáveis.

### 9.2 Hooks: Automação Baseada em Eventos

**Hooks** são comandos shell que executam automaticamente em resposta a eventos específicos do Claude Code. Eles permitem criar **automações** que rodam antes ou depois de ações da IA.

**Analogia:** Hooks são como **git hooks** (pre-commit, post-commit) ou **event listeners** em JavaScript — código que executa automaticamente quando algo acontece.

**Eventos disponíveis para Hooks no Claude Code:**

| Evento | Quando dispara | Uso típico |
|---|---|---|
| **PreToolUse** | Antes de qualquer ferramenta ser executada | Validação, aprovação automática, bloqueio |
| **PostToolUse** | Depois de uma ferramenta ser executada | Logging, formatação automática, notificação |
| **Notification** | Quando Claude precisa notificar o usuário | Integração com Slack, email, etc. |
| **Stop** | Quando Claude termina uma resposta | Verificação final, cleanup |

**Configuração de Hooks (em settings.json):**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "command": "echo 'Arquivo sendo editado: $CLAUDE_FILE_PATH'"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "command": "npx prettier --write $CLAUDE_FILE_PATH 2>/dev/null || true"
      },
      {
        "matcher": "Bash",
        "command": "echo '[LOG] Comando executado: $CLAUDE_COMMAND'"
      }
    ],
    "Stop": [
      {
        "command": "make lint 2>&1 | tail -5"
      }
    ]
  }
}
```

**Exemplos práticos de Hooks:**

**1. Auto-formatação após edição:**
```json
{
  "PostToolUse": [
    {
      "matcher": "Edit|Write",
      "command": "npx prettier --write \"$CLAUDE_FILE_PATH\" 2>/dev/null; ruff format \"$CLAUDE_FILE_PATH\" 2>/dev/null; true"
    }
  ]
}
```

**2. Bloquear edição em arquivos protegidos:**
```json
{
  "PreToolUse": [
    {
      "matcher": "Edit",
      "command": "if echo \"$CLAUDE_FILE_PATH\" | grep -q 'migrations/'; then echo 'BLOCKED: Não edite migrations diretamente'; exit 1; fi"
    }
  ]
}
```

**3. Notificação no terminal quando uma tarefa longa termina:**
```json
{
  "Stop": [
    {
      "command": "osascript -e 'display notification \"Claude Code terminou a tarefa\" with title \"Claude Code\"'"
    }
  ]
}
```

### 9.3 Skills + Hooks: Workflows Poderosos

A combinação de Skills e Hooks permite criar workflows sofisticados:

```
Exemplo: "Deploy Seguro"

1. Usuário invoca: /deploy staging

2. Skill "deploy" executa:
   a. Roda testes (make test)
   b. Verifica lint (make lint)
   c. Cria tag de versão
   d. Gera changelog

3. Hook PreToolUse (Bash):
   - Bloqueia qualquer comando `rm -rf`
   - Bloqueia deploy em produção sem flag explícita

4. Hook PostToolUse (Bash):
   - Envia notificação no Slack
   - Registra log de deploy

5. Hook Stop:
   - Verifica se testes passaram
   - Gera relatório de deploy
```

**Referência:** Anthropic. *"Claude Code — Hooks"*. Disponível em: https://docs.anthropic.com/en/docs/claude-code/hooks

> **Sugestão para o site:** Diagrama de fluxo interativo mostrando o ciclo de vida de uma ação no Claude Code: Evento → Hook PreToolUse → Execução da Tool → Hook PostToolUse → Resultado. Com exemplos que o participante pode expandir.

---

## Módulo 10 — MCP (Model Context Protocol)

### 10.1 O que é o MCP?

O **Model Context Protocol (MCP)** é um protocolo aberto criado pela Anthropic que padroniza como aplicações de IA se conectam a **fontes de dados** e **ferramentas externas**. Pense nele como um **"USB-C para IA"** — uma interface universal que permite que qualquer modelo se conecte a qualquer serviço.

**O problema que o MCP resolve:**

Antes do MCP, cada ferramenta de IA precisava implementar integrações customizadas para cada serviço:

```
ANTES DO MCP (N × M integrações):

Claude Code ──── Integração custom ──── GitHub
Claude Code ──── Integração custom ──── Jira
Claude Code ──── Integração custom ──── PostgreSQL
Cursor ──────── Integração custom ──── GitHub
Cursor ──────── Integração custom ──── Jira
Cursor ──────── Integração custom ──── PostgreSQL

Total: 6 integrações diferentes para 2 clientes e 3 serviços
```

```
COM MCP (N + M integrações):

Claude Code ──┐                    ┌── GitHub MCP Server
              ├── Protocolo MCP ───┤
Cursor ───────┘                    ├── Jira MCP Server
                                   └── PostgreSQL MCP Server

Total: 2 clientes + 3 servidores = 5 componentes, todos interoperáveis
```

**Referência oficial:** Anthropic. *"Model Context Protocol"*. Disponível em: https://modelcontextprotocol.io

**Especificação:** MCP Specification. Disponível em: https://spec.modelcontextprotocol.io

**Anúncio:** Anthropic. *"Introducing the Model Context Protocol"*. Disponível em: https://www.anthropic.com/news/model-context-protocol

**Curso oficial:** Anthropic. *"Introduction to Model Context Protocol"* (curso gratuito). Disponível em: https://anthropic.skilljar.com/introduction-to-model-context-protocol

**Engineering Blog:** Anthropic. *"Code execution with MCP"*. Disponível em: https://www.anthropic.com/engineering/code-execution-with-mcp

### 10.2 Arquitetura do MCP

O MCP segue uma arquitetura **cliente-servidor**:

```
┌─────────────────────────────────────────────────────────┐
│                    HOST APPLICATION                       │
│              (ex: Claude Code, Cursor)                    │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ MCP      │  │ MCP      │  │ MCP      │              │
│  │ Client 1 │  │ Client 2 │  │ Client 3 │   ...        │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │              │              │                    │
└───────┼──────────────┼──────────────┼────────────────────┘
        │              │              │
   Protocolo MCP  Protocolo MCP  Protocolo MCP
   (JSON-RPC)     (JSON-RPC)     (JSON-RPC)
        │              │              │
  ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
  │ MCP       │  │ MCP       │  │ MCP       │
  │ Server:   │  │ Server:   │  │ Server:   │
  │ GitHub    │  │ PostgreSQL│  │ Slack     │
  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
        │              │              │
  ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
  │ GitHub    │  │ PostgreSQL│  │ Slack     │
  │ API       │  │ Database  │  │ API       │
  └───────────┘  └───────────┘  └───────────┘
```

**Componentes:**

| Componente | Papel | Exemplo |
|---|---|---|
| **Host** | Aplicação que hospeda o cliente MCP | Claude Code, Cursor |
| **Client** | Conecta-se a um servidor MCP específico | Cliente embutido no Claude Code |
| **Server** | Expõe ferramentas e dados via protocolo MCP | Servidor MCP de GitHub, PostgreSQL, etc. |
| **Transport** | Camada de comunicação | stdio (local) ou HTTP+SSE (remoto) |

### 10.3 O que um MCP Server Expõe?

Um servidor MCP pode expor três tipos de capacidades:

#### 10.3.1 Tools (Ferramentas)

Ações que o modelo pode executar:

```json
{
  "name": "github_create_issue",
  "description": "Cria uma nova issue no GitHub",
  "inputSchema": {
    "type": "object",
    "properties": {
      "repo": {"type": "string", "description": "owner/repo"},
      "title": {"type": "string"},
      "body": {"type": "string"},
      "labels": {"type": "array", "items": {"type": "string"}}
    },
    "required": ["repo", "title"]
  }
}
```

#### 10.3.2 Resources (Recursos)

Dados que o modelo pode ler:

```json
{
  "uri": "github://repos/anthropics/claude-code/issues",
  "name": "Issues do repositório",
  "description": "Lista de issues abertas no repositório",
  "mimeType": "application/json"
}
```

#### 10.3.3 Prompts (Templates de Prompt)

Templates reutilizáveis de prompts:

```json
{
  "name": "code_review",
  "description": "Template para revisão de código",
  "arguments": [
    {"name": "pr_url", "description": "URL do Pull Request", "required": true}
  ]
}
```

### 10.4 Configurando MCP no Claude Code

**Arquivo de configuração (.claude/mcp.json ou no settings do projeto):**

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxx"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
    }
  }
}
```

### 10.5 Servidores MCP Populares

| Servidor | O que faz | Repositório |
|---|---|---|
| **GitHub** | Issues, PRs, repos, code search | @modelcontextprotocol/server-github |
| **PostgreSQL** | Queries, schema inspection | @modelcontextprotocol/server-postgres |
| **Filesystem** | Acesso controlado a diretórios | @modelcontextprotocol/server-filesystem |
| **Slack** | Mensagens, canais, busca | @modelcontextprotocol/server-slack |
| **Google Drive** | Documentos, planilhas | @modelcontextprotocol/server-gdrive |
| **Puppeteer** | Browser automation, screenshots | @modelcontextprotocol/server-puppeteer |
| **SQLite** | Banco de dados local | @modelcontextprotocol/server-sqlite |
| **Memory** | Persistência de memória para agentes | @modelcontextprotocol/server-memory |
| **Brave Search** | Busca na web | @modelcontextprotocol/server-brave-search |
| **Firecrawl** | Web scraping inteligente | @anthropic/firecrawl-mcp |
| **Atlassian** | Jira + Confluence | Plugin Atlassian |

**Referência:** MCP Servers Directory. Disponível em: https://github.com/modelcontextprotocol/servers

### 10.6 Criando um MCP Server Customizado

Para cenários onde não existe um servidor pronto, é possível criar o seu:

**Exemplo simplificado em TypeScript:**

```typescript
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server({
  name: "meu-servidor-custom",
  version: "1.0.0",
});

// Registrar uma ferramenta
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "buscar_cliente",
      description: "Busca informações de um cliente pelo CPF",
      inputSchema: {
        type: "object",
        properties: {
          cpf: { type: "string", description: "CPF do cliente" },
        },
        required: ["cpf"],
      },
    },
  ],
}));

// Implementar a ferramenta
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "buscar_cliente") {
    const cpf = request.params.arguments.cpf;
    // ... lógica de busca no sistema interno ...
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ nome: "João", plano: "Premium" }),
        },
      ],
    };
  }
});

// Iniciar servidor
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Referência:** MCP SDK TypeScript. Disponível em: https://github.com/modelcontextprotocol/typescript-sdk

**Referência:** MCP SDK Python. Disponível em: https://github.com/modelcontextprotocol/python-sdk

### 10.7 MCP vs. Outras Abordagens

| Aspecto | Plugins (ex: ChatGPT Plugins) | Function Calling | MCP |
|---|---|---|---|
| **Padrão** | Proprietário (OpenAI) | Proprietário (por modelo) | Aberto |
| **Interoperabilidade** | Apenas ChatGPT | Apenas o modelo específico | Qualquer host/modelo |
| **Transport** | HTTP | Via API do modelo | stdio, HTTP+SSE |
| **Descoberta** | App Store | Definido no prompt | Protocolo de handshake |
| **Segurança** | Sandbox do plugin | Controlada pelo dev | Permissões granulares |
| **Estado** | Stateless | Stateless | Pode ser stateful |

> **Sugestão para o site:** Diagrama interativo da arquitetura MCP onde o participante pode clicar em cada componente (Host, Client, Server, Transport) e ver detalhes, exemplos de código e links para documentação. Implementável com React Flow ou SVG interativo.

---

## Módulo 11 — Agentes Autônomos e Sistemas Multi-Agentes

### 11.1 O que é um Agente de IA?

Um **agente de IA** é um sistema que usa um LLM como "cérebro" para **planejar, executar ações e observar resultados** de forma autônoma, iterando até completar uma tarefa.

**Diferença fundamental:**

```
CHATBOT (sem agência):
Usuário pergunta → Modelo responde → Fim

AGENTE (com agência):
Usuário dá tarefa → Modelo PLANEJA → Modelo EXECUTA ação → 
Modelo OBSERVA resultado → Modelo decide PRÓXIMA AÇÃO → 
... loop até completar a tarefa → Resultado final
```

**O loop do agente (ReAct pattern):**

```
┌──────────────┐
│   RACIOCÍNIO │ "Preciso primeiro ler o arquivo para entender o bug"
│  (Reasoning) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     AÇÃO     │ Read("src/auth.py")
│   (Action)   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  OBSERVAÇÃO  │ "O arquivo contém uma condição incorreta na linha 45"
│(Observation) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   RACIOCÍNIO │ "Agora vou corrigir a condição e rodar os testes"
│  (Reasoning) │
└──────┬───────┘
       │
       ▼
      ...       (loop continua até a tarefa ser concluída)
```

**Referência:** Yao, S. et al. (2023). *"ReAct: Synergizing Reasoning and Acting in Language Models"*. Princeton/Google. arXiv:2210.03629. Disponível em: https://arxiv.org/abs/2210.03629 — Paper fundacional que formalizou o padrão Reasoning + Acting.

**Referência adicional:** Anthropic. *"Building effective agents"*. Disponível em: https://www.anthropic.com/research/building-effective-agents — Guia prático da Anthropic sobre como construir agentes eficazes.

### 11.2 Anatomia de um Agente de Codificação

Ferramentas como Claude Code são agentes de codificação completos. Aqui está como eles funcionam internamente:

```
┌─────────────────────────────────────────────────────┐
│                AGENTE DE CODIFICAÇÃO                 │
│                                                     │
│  ┌─────────────────────────────────────────┐        │
│  │            LLM (Cérebro)                 │        │
│  │  - Entende a tarefa                      │        │
│  │  - Planeja a abordagem                   │        │
│  │  - Decide qual ferramenta usar           │        │
│  │  - Interpreta resultados                 │        │
│  │  - Itera até conclusão                   │        │
│  └─────────────────────┬───────────────────┘        │
│                        │                             │
│  ┌─────────────────────▼───────────────────┐        │
│  │         FERRAMENTAS (Tools)              │        │
│  │                                          │        │
│  │  📖 Read    — Ler arquivos               │        │
│  │  ✏️ Edit    — Editar arquivos             │        │
│  │  📝 Write   — Criar arquivos              │        │
│  │  🔍 Grep    — Buscar no código            │        │
│  │  📁 Glob    — Encontrar arquivos          │        │
│  │  ⚙️ Bash    — Executar comandos           │        │
│  │  🌐 MCP     — Ferramentas externas        │        │
│  │  🤖 Agent   — Sub-agentes                 │        │
│  └──────────────────────────────────────────┘        │
│                                                     │
│  ┌──────────────────────────────────────────┐        │
│  │           MEMÓRIA / CONTEXTO             │        │
│  │                                          │        │
│  │  - System prompt                          │        │
│  │  - CLAUDE.md (rules do projeto)           │        │
│  │  - Histórico da conversa                  │        │
│  │  - Resultados de ferramentas              │        │
│  │  - Memória persistente                    │        │
│  └──────────────────────────────────────────┘        │
│                                                     │
│  ┌──────────────────────────────────────────┐        │
│  │         CONTROLES DE SEGURANÇA           │        │
│  │                                          │        │
│  │  - Permissões por ferramenta              │        │
│  │  - Hooks de validação                     │        │
│  │  - Sandbox para comandos                  │        │
│  │  - Confirmação do usuário para ações      │        │
│  │    destrutivas                            │        │
│  └──────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────┘
```

### 11.3 Padrões Arquiteturais de Agentes

#### 11.3.1 Agente Único (Single Agent)

O padrão mais simples — um único agente com acesso a ferramentas:

```
Usuário → [Agente + Ferramentas] → Resultado
```

**Exemplo:** Claude Code no modo padrão. Um único agente lê, edita, busca e executa.

**Quando usar:** Tarefas focadas que um único "desenvolvedor" poderia resolver.

#### 11.3.2 Multi-Agentes em Paralelo

Múltiplos agentes trabalham simultaneamente em subtarefas independentes:

```
                    ┌── [Agente 1: Frontend] ──┐
Usuário → Orquestrador ├── [Agente 2: Backend]  ──┤ → Resultado combinado
                    └── [Agente 3: Testes]    ──┘
```

**Exemplo:** Claude Code com sub-agentes (Agent tool). O agente principal delega:
- Um sub-agente pesquisa a codebase
- Outro sub-agente roda em um worktree separado
- Resultados são combinados pelo agente principal

**Quando usar:** Tarefas que podem ser decompostas em partes independentes.

#### 11.3.3 Pipeline de Agentes

Agentes encadeados onde a saída de um alimenta o próximo:

```
[Agente 1: Análise] → [Agente 2: Implementação] → [Agente 3: Review] → [Agente 4: Teste]
```

**Quando usar:** Workflows com etapas naturalmente sequenciais.

#### 11.3.4 Agente Supervisor

Um agente coordenador que distribui e supervisiona trabalho:

```
                    ┌── [Worker 1] ──┐
[Supervisor] ───────├── [Worker 2] ──┤──→ [Supervisor valida]
                    └── [Worker 3] ──┘
```

**Quando usar:** Tarefas complexas que precisam de coordenação e validação.

**Referência:** Wang, L. et al. (2024). *"A Survey on Large Language Model based Autonomous Agents"*. Renmin University. arXiv:2308.11432. Disponível em: https://arxiv.org/abs/2308.11432

### 11.4 Agentes na Prática com Claude Code

**Exemplo 1 — Sub-agente para pesquisa:**

No Claude Code, o agente principal pode lançar sub-agentes para tarefas de pesquisa que não poluem o contexto principal:

```
# Claude Code internamente faz algo como:

Agente Principal: "Preciso entender como a autenticação funciona"
    → Lança Agent(type="Explore", prompt="Como funciona a autenticação neste projeto?")
    → Sub-agente pesquisa: lê arquivos, busca padrões, analisa código
    → Retorna resumo: "Auth usa JWT com refresh tokens, implementado em auth_service.py"
    → Agente Principal continua com esse contexto condensado
```

**Exemplo 2 — Sub-agente em worktree isolado:**

```
# Para mudanças arriscadas, Claude Code pode trabalhar em um branch isolado:

Agente Principal: "Refatore o módulo de pagamentos"
    → Lança Agent(isolation="worktree", prompt="Refatore payments/ para usar async")
    → Sub-agente trabalha em worktree Git separado
    → Se der certo: worktree é preservado com as mudanças
    → Se der errado: worktree é descartado, sem afetar o código principal
```

### 11.5 Benchmarks e Avaliação de Agentes

Para avaliar a qualidade de agentes de codificação, a comunidade usa benchmarks padronizados:

| Benchmark | O que avalia | Referência |
|---|---|---|
| **SWE-bench** | Capacidade de resolver issues reais do GitHub | https://arxiv.org/abs/2310.06770 |
| **SWE-bench Verified** | Subconjunto verificado por humanos | https://www.swebench.com |
| **HumanEval** | Geração de funções Python a partir de docstrings | Chen et al. (2021) — https://arxiv.org/abs/2107.03374 |
| **MBPP** | Problemas de programação para iniciantes | Austin et al. (2021) |
| **Aider Polyglot** | Edição de código em múltiplas linguagens | https://aider.chat/docs/leaderboards/ |

**Referência:** Jimenez, C. et al. (2024). *"SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"*. Princeton. arXiv:2310.06770. Disponível em: https://arxiv.org/abs/2310.06770

**Referência:** Yang, J. et al. (2024). *"SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"*. Princeton. arXiv:2405.15793. Disponível em: https://arxiv.org/abs/2405.15793

### 11.6 O Futuro dos Agentes de Codificação

Tendências observadas e projetadas:

1. **Agentes cada vez mais autônomos** — De "sugerir código" para "implementar features completas"
2. **Integração com CI/CD** — Agentes que automaticamente criam PRs, rodam testes e fazem deploy
3. **Multi-agentes especializados** — Times virtuais com agentes para frontend, backend, QA, DevOps
4. **Agentes com memória de longo prazo** — Aprendendo preferências e padrões do projeto ao longo do tempo
5. **Agentes proativos** — Agentes que monitoram repositórios e propõem melhorias automaticamente
6. **Verificação formal** — Uso de provas matemáticas para garantir correção do código gerado

> **Sugestão para o site:** Seção "O Futuro" com timeline projetada e links para pesquisas recentes. Cards interativos com cada tendência que expandem para mostrar exemplos e referências.

---

## Módulo 12 — Deep Thinking e Reasoning Models

> **O que você vai aprender:** o que diferencia modelos de raciocínio (o1, o3, Claude com extended thinking, DeepSeek-R1, Gemini 2.5 Thinking) dos modelos "normais", por que eles surgiram, quando usá-los, e como isso muda a economia da programação com IA.

### 12.1 O problema: escala de pré-treinamento chegando ao limite

Até ~2024, o caminho óbvio para melhorar LLMs era **escalar o pré-treinamento** (mais dados, mais parâmetros, mais compute). Mas:

1. Dados de alta qualidade na internet são finitos (Villalobos et al. 2024, *"Will We Run Out of Data?"*, arXiv:2211.04325).
2. Custo marginal explodiu (GPT-4 custou >$100M; a próxima ordem de magnitude é inviável).
3. **Muitas tarefas se beneficiam mais de pensar mais na hora da resposta do que de um modelo maior.**

A resposta: **test-time compute scaling** — deixar o modelo *pensar mais* durante a inferência.

**Ref seminal:** Snell, C. et al. (2024). *"Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters"*. arXiv:2408.03314.

### 12.2 Como um reasoning model funciona

A ideia central: o modelo gera uma longa **chain-of-thought interna** (às vezes milhares de tokens) antes de produzir a resposta final. Esses "thinking tokens" são treinados via **reinforcement learning** com recompensas verificáveis.

**Receita geral (simplificada):**

1. **Base model** — LLM pré-treinada e SFT-ada normalmente.
2. **CoT prompting** — força o modelo a pensar passo a passo.
3. **RLVR (RL from Verifiable Rewards)** — usa tarefas com resposta checável (matemática, código com testes, lógica formal). O modelo recebe +1 se acerta, 0 se erra.
4. **Emergência de comportamentos:** auto-correção, backtracking, verificação, planejamento. **Não foram programados** — emergem do RL.

O paper técnico mais importante e aberto:
- **DeepSeek-AI (2025).** *"DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"*. arXiv:2501.12948 — demonstra que RL puro (sem SFT inicial) já induz reasoning emergente ("R1-Zero"). Leitura obrigatória.

Outros marcos:
- **OpenAI (2024).** *"Learning to Reason with LLMs"* (post técnico do o1). https://openai.com/index/learning-to-reason-with-llms/
- **Anthropic (2025).** *"Claude Extended Thinking"*. https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking
- **Google DeepMind (2025).** *"Gemini 2.5: Our most intelligent AI model"*. https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
- Kimi Team (2025). *"Kimi k1.5: Scaling RL with LLMs"*. arXiv:2501.12599

### 12.3 Taxonomia de modelos de raciocínio (abril 2026)

| Modelo | Tipo de thinking | Visível ao usuário? | Controle fino |
|---|---|---|---|
| OpenAI o3 / o4-mini | Nativo, obrigatório | Sumário (CoT oculto) | `reasoning_effort`: low/medium/high |
| GPT-5 | Opcional, roteado | Sumário | Parâmetro `thinking` |
| Claude Opus/Sonnet 4.6 | Extended thinking opt-in | Sim (tokens visíveis) | `budget_tokens` |
| Gemini 2.5 Pro | Thinking integrado | Sim | `thinking_budget` |
| DeepSeek-R1 | Nativo | Sim (tag `<think>`) | On/off |
| Grok 4 | Nativo | Parcial | — |

### 12.4 Quando usar thinking vs. resposta direta

**Use reasoning quando:**
- A tarefa é multi-passo e cada passo gera erro composto (matemática, prova, debugging).
- A resposta errada custa caro (código de produção, análise legal).
- Você quer o melhor possível e pode pagar 5–20× mais tokens.

**Não use reasoning quando:**
- Tarefa é de recuperação/formatação (extrair JSON, traduzir, resumir).
- Latência é crítica (chat conversacional, autocomplete).
- O modelo base já acerta (mede antes de pagar thinking).

**Evidência:** McAleese et al. (2024, OpenAI) mostram que em tarefas fáceis thinking não ajuda e às vezes piora por **overthinking** (Chen et al. 2024, *"Do NOT Think That Much for 2+3=?"*, arXiv:2412.21187).

### 12.5 Anatomia de uma resposta com thinking

Exemplo (Claude extended thinking):

```
<thinking>
O usuário quer X. Tenho que considerar:
1. Caso A — funciona se ...
2. Caso B — exige que ...
Hm, espera. Revisei e o caso B quebra quando ...
Vou propor a solução do caso A.
</thinking>

A solução é: ...
```

O token `<thinking>` ocupa contexto e custa (embora com desconto em alguns provedores). Esse é o **"thinking budget"** — quanto você está disposto a gastar.

### 12.6 Implicações para programação

- **Agentes de codificação (Claude Code, Cursor Agent, Devin) combinam** thinking + tool use + loops. O thinking decide *o que fazer a seguir*.
- **SWE-Bench Verified** saltou de ~20% (modelos 2024) para >70% (reasoning + agentes, 2025). Ver: Jimenez et al. (2024), *"SWE-Bench: Can Language Models Resolve Real-World GitHub Issues?"*, ICLR, arXiv:2310.06770.
- **Custo real de um agente** = (input tokens) + (output tokens) + **(thinking tokens × várias chamadas em loop)**. Fácil explodir orçamento. Monitore.

### 12.7 Limitações honestas

- Reasoning models **não são infalíveis** — ainda alucinam, ainda erram matemática simples ocasionalmente.
- **Faithfulness of chain-of-thought:** Turpin et al. (2023, *"Language Models Don't Always Say What They Think"*, arXiv:2305.04388) — a CoT mostrada nem sempre reflete o que o modelo "realmente" computou. Anthropic (2025) *"Reasoning Models Don't Always Say What They Think"* confirma em modelos mais novos.
- **Jailbreaks via thinking injection** são uma nova superfície de ataque.

---

## Módulo 13 — Alinhamento, Segurança e Red-Teaming

> **Objetivo:** entender o *porquê* dos guardrails dos modelos, como são treinados para serem úteis+honestos+inofensivos, e quais falhas conhecer ao construir agentes que executam código.

### 13.1 O problema do alinhamento

Um modelo pré-treinado bruto é um **simulador de internet** — gera o que for plausível, incluindo conteúdo tóxico, errado ou perigoso. **Alinhamento** é o processo de fazer o modelo produzir outputs que humanos considerem úteis, honestos e inofensivos (**HHH**: Helpful, Honest, Harmless — Askell et al. 2021, arXiv:2112.00861).

### 13.2 RLHF: base de tudo

**Ouyang, L. et al. (2022).** *"Training language models to follow instructions with human feedback"* (InstructGPT). arXiv:2203.02155. Fluxo:

1. **SFT** — humanos escrevem respostas exemplares.
2. **Reward Model (RM)** — humanos rankeiam pares de respostas; um modelo aprende a prever a preferência.
3. **PPO** — o LLM é otimizado para maximizar o RM via reinforcement learning (Schulman et al. 2017, arXiv:1707.06347).

### 13.3 Evolução do RLHF

- **RLAIF / Constitutional AI** — Bai, Y. et al. (2022), Anthropic, arXiv:2212.08073. A IA gera críticas baseadas numa **constituição** (lista de princípios). Reduz carga humana e é mais auditável. Base do Claude.
- **DPO (Direct Preference Optimization)** — Rafailov et al. (2023), arXiv:2305.18290. Elimina o RM explícito: otimiza diretamente sobre pares preferidos. Mais simples, usado em muitos modelos abertos.
- **RLVR (Verifiable Rewards)** — base dos reasoning models (Módulo 12).
- **KTO, IPO, ORPO** — variantes que relaxam premissas do DPO.

### 13.4 Falhas conhecidas de alinhamento

1. **Sycophancy** — modelo concorda com o usuário mesmo quando este está errado (Sharma et al. 2023, *"Towards Understanding Sycophancy in Language Models"*, arXiv:2310.13548).
2. **Reward hacking** — modelo explora a métrica sem resolver a tarefa.
3. **Deception / Sandbagging** — modelo esconde capacidades em avaliação (Hubinger et al. 2024, *"Sleeper Agents"*, arXiv:2401.05566).
4. **Jailbreaks** — prompts adversariais que desativam guardrails. Ver Zou et al. (2023), *"Universal and Transferable Adversarial Attacks"*, arXiv:2307.15043.
5. **Prompt injection** — dados externos (emails, páginas web, resultados de tool) contendo instruções maliciosas. Greshake et al. (2023), *"Not what you've signed up for"*, arXiv:2302.12173. **Crítico para agentes de codificação com MCP.**
6. **Hallucination** — erros de fato plausíveis. Ji et al. (2023), *"Survey of Hallucination in NLG"*, ACM Computing Surveys.

### 13.5 Interpretabilidade mecanística

Esforço para *abrir a caixa preta* — entender o que circuitos internos fazem.

- **Anthropic — Transformer Circuits.** https://transformer-circuits.pub/
- Olsson, C. et al. (2022). *"In-context Learning and Induction Heads"*. arXiv:2209.11895.
- Templeton, A. et al. (2024). *"Scaling Monosemanticity"* (features interpretáveis em Claude 3 Sonnet). https://transformer-circuits.pub/2024/scaling-monosemanticity/

### 13.6 AI Safety em produção

Para quem constrói com agentes:

- **Trate toda saída de tool como potencialmente adversarial.**
- **Princípio do menor privilégio** — o agente só precisa dos escopos mínimos (aprovação humana para `git push`, para escrever em DBs, etc.).
- **Sandbox e worktrees isolados** — Claude Code usa worktrees por padrão por essa razão.
- **Logs auditáveis.** Tool calls, prompts e outputs devem ser persistidos.

**Refs para leitura:**
- Bender, E. et al. (2021). *"On the Dangers of Stochastic Parrots"*. FAccT. https://doi.org/10.1145/3442188.3445922
- Anthropic. *"Core Views on AI Safety"*. https://www.anthropic.com/news/core-views-on-ai-safety
- Hendrycks, D. et al. (2023). *"An Overview of Catastrophic AI Risks"*. arXiv:2306.12001
- Ngo, R. et al. (2022). *"The Alignment Problem from a Deep Learning Perspective"*. arXiv:2209.00626

---

## Módulo 14 — Avaliação de Modelos e Benchmarks

> **Por que importa:** escolher modelo errado é caro. Este módulo mostra como ler benchmarks com ceticismo calibrado e montar sua própria avaliação (**evals**) — a habilidade mais subestimada em engenharia com LLMs.

### 14.1 Benchmarks canônicos

| Benchmark | O que mede | Ref |
|---|---|---|
| **MMLU** | Conhecimento geral multi-disciplinar, 57 matérias | Hendrycks et al. 2021, arXiv:2009.03300 |
| **MMLU-Pro** | Versão mais difícil, reduz shortcuts | Wang et al. 2024, arXiv:2406.01574 |
| **GPQA** | Perguntas PhD-level em ciência, "Google-proof" | Rein et al. 2023, arXiv:2311.12022 |
| **HumanEval** | Geração de funções Python | Chen et al. 2021, arXiv:2107.03374 |
| **MBPP** | Problemas de programação básica | Austin et al. 2021, arXiv:2108.07732 |
| **SWE-Bench / Verified** | Issues reais do GitHub resolvidos end-to-end | Jimenez et al. 2024, arXiv:2310.06770 |
| **Terminal-Bench** | Agentes em CLI real | Stanford/Princeton, 2025 |
| **AIME / MATH** | Matemática competitiva | Hendrycks et al. 2021, arXiv:2103.03874 |
| **ARC-AGI** | Raciocínio abstrato, resistente a memorização | Chollet 2019, arXiv:1911.01547 |
| **RULER** | Contexto longo real (vs. needle-in-haystack) | Hsieh et al. 2024, arXiv:2404.06654 |
| **LiveCodeBench** | Código competitivo com contamination-free | Jain et al. 2024, arXiv:2403.07974 |
| **Chatbot Arena** | Preferência humana via votação pareada | Chiang et al. 2024, arXiv:2403.04132 |

### 14.2 Limitações dos benchmarks

1. **Data contamination** — benchmarks vazam no treinamento. HumanEval em particular está saturado. Ver Balloccu et al. 2024, arXiv:2402.03927.
2. **Gaming** — laboratórios otimizam para o leaderboard.
3. **Single-task / single-turn** — não capturam comportamento agêntico.
4. **Viés linguístico** — quase todos em inglês. Para PT-BR, usar **ENEM-Challenge**, **BLUEX**.
5. **Saturação** — MMLU passou de 85% (humano expert) em 2024. Novos benchmarks (HLE — Humanity's Last Exam, 2025) existem justamente por isso.

### 14.3 Como montar sua própria eval

Regra #1: **a melhor eval é a mais próxima do seu caso de uso real**.

**Framework mínimo:**

1. **Golden set** — 30–100 exemplos representativos, com resposta esperada.
2. **Métrica** — exact match (quando aplicável), LLM-as-judge (com cuidado, ver Zheng et al. 2023 arXiv:2306.05685), ou humano.
3. **Regressão** — rode a eval em toda mudança de modelo/prompt/contexto.
4. **Adversarial set** — casos que historicamente falharam.

**Ferramentas:**
- **Inspect** (UK AISI) — https://inspect.aisi.org.uk
- **OpenAI Evals** — https://github.com/openai/evals
- **Braintrust, LangSmith, Langfuse, Helicone** — plataformas pagas.
- **promptfoo** — open source, CLI-first. https://www.promptfoo.dev

### 14.4 Leaderboards úteis (com ceticismo)

- **Artificial Analysis** — https://artificialanalysis.ai — comparativo agregado de qualidade, velocidade, preço.
- **Chatbot Arena / LMArena** — https://lmarena.ai — preferência humana.
- **Aider LLM Leaderboard** — https://aider.chat/docs/leaderboards/ — edição de código real.
- **SWE-Bench Leaderboard** — https://www.swebench.com

### 14.5 Referências fundamentais

- Liang, P. et al. (2022). *"Holistic Evaluation of Language Models (HELM)"*. arXiv:2211.09110 — framework abrangente.
- Chang, Y. et al. (2023). *"A Survey on Evaluation of Large Language Models"*. arXiv:2307.03109.
- Anthropic. *"Challenges in Evaluating AI Systems"*. https://www.anthropic.com/news/evaluating-ai-systems

---

## Módulo 15 — Embeddings, Retrieval e RAG Avançado

> **Objetivo:** ir além do "RAG ingênuo" (embed + cosine). Entender quando RAG supera long-context, como construir pipelines robustos, e onde o estado da arte está em 2026.

### 15.1 De volta aos embeddings

Modelos de embedding mapeiam texto em vetores onde similaridade semântica ≈ similaridade de cosseno.

**Famílias em 2026:**

| Família | Destaques | Uso típico |
|---|---|---|
| OpenAI `text-embedding-3-large` | 3072 dims, multilíngue | Geral |
| Cohere Embed v4 | Multilíngue + multimodal | Enterprise |
| Voyage AI (`voyage-3`) | Top MTEB, código | Alta qualidade |
| `bge-m3` (BAAI) | Open source, multilíngue | Self-hosted |
| `nomic-embed-text-v2` | Open source, 8k contexto | Self-hosted |
| `gte-Qwen2-7B-instruct` | LLM-based embedding | Pesquisa |

Benchmark de referência: **MTEB** (Muennighoff et al. 2022, arXiv:2210.07316) — https://huggingface.co/spaces/mteb/leaderboard

### 15.2 Recuperação: dense, sparse e hybrid

- **Dense retrieval (DPR)** — produto escalar de embeddings. Rápido com FAISS/HNSW. Karpukhin et al. 2020, arXiv:2004.04906.
- **Sparse retrieval (BM25)** — TF-IDF tradicional; imbatível em exact match e nomes próprios.
- **Hybrid** — combina ambos via reciprocal rank fusion (Cormack et al. 2009).
- **Late interaction (ColBERT)** — Khattab & Zaharia 2020, arXiv:2004.12832 — representa cada token, não só o doc. Melhor qualidade, mais custo.
- **Re-rankers** — segundo estágio. Cross-encoders (BGE reranker, Cohere rerank) pontuam query+doc juntos.

### 15.3 Anatomia de um RAG de produção

```
query
  → query rewriting (LLM expande, decompõe)
  → retrieval (hybrid: BM25 + dense)
  → re-ranking (cross-encoder)
  → context packing (dedup, compressão)
  → generation (LLM com citações forçadas)
  → verification (groundedness check)
```

Cada caixa é um ponto de falha. **Avalie cada estágio separadamente** (ver Módulo 14).

### 15.4 RAG vs. long-context vs. fine-tuning

| Eixo | RAG | Long-context | Fine-tuning |
|---|---|---|---|
| Atualização de dados | Barato (reindex) | Barato (recarrega) | Caro (retrain) |
| Volume de dados | Ilimitado | Limitado a janela | Ilimitado no treino |
| Citabilidade | Nativa | Difícil | Impossível |
| Latência por query | Média | Alta (context grande) | Baixa |
| Custo por query | Baixo | Alto | Baixo |
| Aprende *estilo/formato* | Fraco | Via few-shot | Forte |

**Heurística:** dados mutáveis e auditáveis → RAG. Estilo/tom consistente → fine-tune. Tarefas one-shot com documento específico → long-context.

**Ref crítica:** Li, T. et al. (2024). *"Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study"*. arXiv:2407.16833.

### 15.5 Estado da arte (2025–2026)

- **GraphRAG** — Microsoft (Edge et al. 2024, arXiv:2404.16130). Extrai knowledge graph do corpus; queries globais ("qual tema atravessa o dataset?") viram tratáveis.
- **Agentic RAG** — o LLM decide quando e o que buscar em loop (Search-R1, DeepSeek-R1 variants).
- **Late chunking** — Günther et al. 2024 (Jina AI). Embed o documento inteiro, depois pool por chunk — preserva contexto cross-chunk.
- **Contextual retrieval** — Anthropic 2024. Prefixa cada chunk com resumo do documento antes de embedar. https://www.anthropic.com/news/contextual-retrieval

### 15.6 Vector stores em 2026

- **pgvector** (Postgres) — default pragmático.
- **Qdrant, Weaviate, Milvus, LanceDB** — especializados.
- **Turbopuffer, Pinecone** — serverless hospedado.
- **FAISS / HNSWLib** — bibliotecas de ANN, não DBs.

### 15.7 Referências consolidadas

- Lewis, P. et al. (2020). *"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"*. NeurIPS, arXiv:2005.11401. — Paper que cunhou "RAG".
- Gao, Y. et al. (2023). *"Retrieval-Augmented Generation for Large Language Models: A Survey"*. arXiv:2312.10997.
- Asai, A. et al. (2023). *"Self-RAG"*. arXiv:2310.11511 — o modelo decide quando recuperar.
- Huyen, C. (2025). *AI Engineering*. O'Reilly. — livro prático, ótimo tratamento de RAG.

---

## Apêndice A — Ferramentas Práticas e Simuladores

### A.1 Ferramentas para Experimentar com Tokens

| Ferramenta | URL | Tipo | Gratuita |
|---|---|---|---|
| OpenAI Tokenizer | https://platform.openai.com/tokenizer | Web | ✅ |
| Tiktokenizer | https://tiktokenizer.vercel.app | Web | ✅ |
| tiktoken (Python) | https://github.com/openai/tiktoken | Biblioteca | ✅ |
| Anthropic Token Counter | https://docs.anthropic.com/en/docs/build-with-claude/token-counting | API | ✅ (com API key) |
| Hugging Face Tokenizers | https://huggingface.co/docs/tokenizers | Biblioteca | ✅ |

### A.2 Playgrounds de LLMs

| Ferramenta | URL | Modelos | Gratuita |
|---|---|---|---|
| Anthropic Console | https://console.anthropic.com | Claude | Créditos gratuitos |
| OpenAI Playground | https://platform.openai.com/playground | GPT-4, etc. | Créditos gratuitos |
| Google AI Studio | https://aistudio.google.com | Gemini | ✅ |
| Hugging Face Spaces | https://huggingface.co/spaces | Diversos open-source | ✅ |
| Poe | https://poe.com | Multi-modelo | Freemium |
| OpenRouter | https://openrouter.ai | Multi-modelo | Pay-per-use |

### A.3 Ferramentas de Desenvolvimento com IA

| Ferramenta | URL | Tipo |
|---|---|---|
| Claude Code | https://docs.anthropic.com/en/docs/claude-code | CLI Agent |
| GitHub Copilot | https://github.com/features/copilot | IDE Extension |
| Cursor | https://cursor.com | IDE |
| Windsurf | https://windsurf.com | IDE |
| OpenAI Codex CLI | https://github.com/openai/codex | CLI Agent |
| Aider | https://aider.chat | CLI Agent |
| Continue | https://continue.dev | IDE Extension (open source) |

### A.4 Ferramentas para Visualização e Aprendizado

| Ferramenta | URL | O que ensina |
|---|---|---|
| The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Arquitetura Transformer visual |
| Attention Visualization | https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/ | Mecanismo de atenção |
| Transformer Explainer | https://poloclub.github.io/transformer-explainer/ | Transformer interativo |
| CNN Explainer | https://poloclub.github.io/cnn-explainer/ | Redes neurais visual |
| TensorFlow Playground | https://playground.tensorflow.org | Redes neurais básicas |
| 3Blue1Brown Neural Networks | https://www.3blue1brown.com/topics/neural-networks | Vídeos educativos |

### A.5 Exercícios Práticos Sugeridos

**Exercício 1 — Token Explorer (Módulo 2):**
1. Abra o Tiktokenizer (https://tiktokenizer.vercel.app)
2. Compare a tokenização de: código Python, texto em português, JSON, Markdown
3. Calcule o custo de enviar um arquivo de 500 linhas ao Claude

**Exercício 2 — Context Window Challenge (Módulo 3):**
1. Escolha um projeto com pelo menos 50 arquivos
2. Conte o total de tokens do projeto (use tiktoken)
3. Calcule que porcentagem cabe na janela de 200K do Claude
4. Decida quais arquivos priorizaria para um bug fix

**Exercício 3 — Prompt Engineering Dojo (Módulo 5):**
1. Escolha uma tarefa de codificação
2. Escreva um prompt "ingênuo" (sem técnicas)
3. Aplique cada técnica: role prompting, CoT, few-shot, structured output
4. Compare os resultados de cada versão

**Exercício 4 — Spec-Driven Development (Módulo 6):**
1. Escolha uma feature para implementar
2. Escreva a spec completa seguindo o template do Módulo 6
3. Entregue a spec ao Claude Code
4. Compare o resultado com o que você esperava

**Exercício 5 — CLAUDE.md Workshop (Módulo 8):**
1. Analise um projeto existente
2. Escreva um CLAUDE.md completo
3. Teste fazendo tarefas com e sem o CLAUDE.md
4. Observe a diferença na qualidade das respostas

**Exercício 6 — MCP Server (Módulo 10):**
1. Configure um MCP server de GitHub no Claude Code
2. Use Claude Code para analisar issues do repositório
3. Peça para criar uma issue a partir de um bug encontrado

---

## Apêndice B — Referências Bibliográficas Completas

### Papers Acadêmicos

1. **Vaswani, A. et al.** (2017). "Attention Is All You Need". *NeurIPS 2017*. Google Brain.
   arXiv:1706.03762 — https://arxiv.org/abs/1706.03762

2. **Brown, T. et al.** (2020). "Language Models are Few-Shot Learners". *NeurIPS 2020*. OpenAI.
   arXiv:2005.14165 — https://arxiv.org/abs/2005.14165

3. **Kaplan, J. et al.** (2020). "Scaling Laws for Neural Language Models". Johns Hopkins/OpenAI.
   arXiv:2001.08361 — https://arxiv.org/abs/2001.08361

4. **Ouyang, L. et al.** (2022). "Training language models to follow instructions with human feedback". OpenAI.
   arXiv:2203.02155 — https://arxiv.org/abs/2203.02155

5. **Wei, J. et al.** (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models". Google Brain.
   arXiv:2201.11903 — https://arxiv.org/abs/2201.11903

6. **Wang, X. et al.** (2022). "Self-Consistency Improves Chain of Thought Reasoning in Language Models". Google Research.
   arXiv:2203.11171 — https://arxiv.org/abs/2203.11171

7. **Yao, S. et al.** (2023). "ReAct: Synergizing Reasoning and Acting in Language Models". Princeton/Google.
   arXiv:2210.03629 — https://arxiv.org/abs/2210.03629

8. **Liu, N. et al.** (2023). "Lost in the Middle: How Language Models Use Long Contexts". Stanford University.
   arXiv:2307.03172 — https://arxiv.org/abs/2307.03172

9. **Lewis, P. et al.** (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks". Facebook AI/UCL.
   arXiv:2005.11401 — https://arxiv.org/abs/2005.11401

10. **Bai, Y. et al.** (2022). "Constitutional AI: Harmlessness from AI Feedback". Anthropic.
    arXiv:2212.08073 — https://arxiv.org/abs/2212.08073

11. **Chen, M. et al.** (2021). "Evaluating Large Language Models Trained on Code". OpenAI.
    arXiv:2107.03374 — https://arxiv.org/abs/2107.03374

12. **Jimenez, C. et al.** (2024). "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?". Princeton.
    arXiv:2310.06770 — https://arxiv.org/abs/2310.06770

13. **Yang, J. et al.** (2024). "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering". Princeton.
    arXiv:2405.15793 — https://arxiv.org/abs/2405.15793

14. **Sennrich, R. et al.** (2016). "Neural Machine Translation of Rare Words with Subword Units". University of Edinburgh.
    arXiv:1508.07909 — https://arxiv.org/abs/1508.07909

15. **Holtzman, A. et al.** (2020). "The Curious Case of Neural Text Degeneration". University of Washington.
    arXiv:1904.09751 — https://arxiv.org/abs/1904.09751

16. **Clark, K. et al.** (2019). "What Does BERT Look At? An Analysis of BERT's Attention". Stanford NLP.
    arXiv:1906.04341 — https://arxiv.org/abs/1906.04341

17. **Wang, L. et al.** (2024). "A Survey on Large Language Model based Autonomous Agents". Renmin University.
    arXiv:2308.11432 — https://arxiv.org/abs/2308.11432

18. **Zhao, W. et al.** (2023). "A Survey of Large Language Models". Renmin University.
    arXiv:2303.18223 — https://arxiv.org/abs/2303.18223

19. **Gao, Y. et al.** (2024). "Retrieval-Augmented Generation for Large Language Models: A Survey".
    arXiv:2312.10997 — https://arxiv.org/abs/2312.10997

20. **Peng, S. et al.** (2023). "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot". MIT/Microsoft.
    arXiv:2302.06590 — https://arxiv.org/abs/2302.06590

### Documentação Oficial

21. **Anthropic** — Claude Code Documentation.
    https://docs.anthropic.com/en/docs/claude-code

22. **Anthropic** — Claude Code (site principal).
    https://code.claude.com/docs/en/overview

23. **Anthropic** — Claude Code GitHub Repository.
    https://github.com/anthropics/claude-code

24. **Anthropic** — Claude Code Advanced Patterns (PDF): Subagents, MCP, and Scaling.
    https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf

25. **Anthropic** — How Anthropic Teams Use Claude Code (PDF).
    https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf

26. **Anthropic** — Prompt Engineering Guide (Claude 4.x Best Practices).
    https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices

27. **Anthropic** — Interactive Prompt Engineering Tutorial (Jupyter).
    https://github.com/anthropics/prompt-eng-interactive-tutorial

28. **Anthropic** — Prompt Caching.
    https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching

29. **Anthropic** — Extended Thinking.
    https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking

30. **Anthropic** — Context Windows.
    https://docs.anthropic.com/en/docs/build-with-claude/context-windows

31. **Anthropic** — Effective Context Engineering for AI Agents (Engineering Blog).
    https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

32. **Anthropic** — Model Context Protocol (site).
    https://modelcontextprotocol.io

33. **Anthropic** — MCP Specification (2025-11-25).
    https://modelcontextprotocol.io/specification/2025-11-25

34. **Anthropic** — Introduction to MCP (curso gratuito).
    https://anthropic.skilljar.com/introduction-to-model-context-protocol

35. **Anthropic** — Building Effective Agents.
    https://www.anthropic.com/research/building-effective-agents

36. **Anthropic** — Agent Skills Overview.
    https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview

37. **Anthropic** — Agent Skills Engineering Blog.
    https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

38. **Anthropic** — Skills Repository.
    https://github.com/anthropics/skills

39. **OpenAI** — Prompt Engineering Guide.
    https://platform.openai.com/docs/guides/prompt-engineering

40. **OpenAI** — Tokenizer.
    https://platform.openai.com/tokenizer

41. **OpenAI** — tiktoken.
    https://github.com/openai/tiktoken

42. **OpenAI** — Token Counting Guide.
    https://developers.openai.com/cookbook/examples/how_to_count_tokens_with_tiktoken

43. **GitHub** — Copilot Documentation.
    https://docs.github.com/en/copilot

44. **GitHub** — spec-kit (SDD toolkit open-source).
    https://github.com/github/spec-kit

45. **Cursor** — Documentation.
    https://docs.cursor.com

46. **MCP** — Servers Repository.
    https://github.com/modelcontextprotocol/servers

47. **MCP** — TypeScript SDK.
    https://github.com/modelcontextprotocol/typescript-sdk

48. **MCP** — Python SDK.
    https://github.com/modelcontextprotocol/python-sdk

### Artigos Técnicos e Blog Posts

49. **Martin Fowler** (2025). "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl".
    https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html

50. **Thoughtworks** (2025). "Spec-driven development: Unpacking one of 2025's key new AI-assisted engineering practices".
    https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices

51. **InfoQ**. "Spec Driven Development: When Architecture Becomes Executable".
    https://www.infoq.com/articles/spec-driven-development/

52. **GitHub Blog** (2025). "Spec-driven development with AI: Get started with a new open source toolkit".
    https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/

### Livros

53. **Russell, S. & Norvig, P.** (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson. — Referência fundamental em IA, cobre fundamentos de agentes inteligentes.

54. **Jurafsky, D. & Martin, J.** (2024). *Speech and Language Processing* (3rd ed.). — Capítulos sobre Transformers e LLMs. Draft disponível gratuitamente:
    - Capítulo sobre LLMs: https://web.stanford.edu/~jurafsky/slp3/7.pdf
    - Capítulo sobre Transformers: https://web.stanford.edu/~jurafsky/slp3/8.pdf
    - Capítulo sobre Masked LMs: https://web.stanford.edu/~jurafsky/slp3/10.pdf
    - Site completo: https://web.stanford.edu/~jurafsky/slp3/

55. **Beck, K.** (2003). *Test Driven Development: By Example*. Addison-Wesley. — Princípios de spec-first development.

56. **Goodfellow, I., Bengio, Y. & Courville, A.** (2016). *Deep Learning*. MIT Press. Disponível gratuitamente em: https://www.deeplearningbook.org — Fundamentos de deep learning.

### Cursos e Recursos Educativos

57. **Stanford CS224N** — Natural Language Processing with Deep Learning.
    https://web.stanford.edu/class/cs224n/
    Slides sobre Transformers: https://web.stanford.edu/class/cs224n/slides_w25/cs224n-2025-lecture08-transformers.pdf

58. **Stanford CME 295** — Transformers & Large Language Models (curso específico).
    https://cme295.stanford.edu/

59. **Jay Alammar** — The Illustrated Transformer.
    https://jalammar.github.io/illustrated-transformer/

60. **3Blue1Brown** — Neural Networks (série de vídeos).
    https://www.3blue1brown.com/topics/neural-networks

61. **Georgia Tech / Polo Club** — Transformer Explainer (interativo).
    https://poloclub.github.io/transformer-explainer/

62. **Andrej Karpathy** — "Let's build GPT from scratch" (vídeo).
    https://www.youtube.com/watch?v=kCc8FmEb1nY

---

## Apêndice C — Glossário

| Termo | Definição |
|---|---|
| **Agent** | Sistema de IA que planeja e executa ações autonomamente |
| **Attention** | Mecanismo que permite tokens "olharem" uns para os outros |
| **BPE** | Byte Pair Encoding — algoritmo de tokenização |
| **Chain-of-Thought** | Técnica de prompt que pede raciocínio passo a passo |
| **Context Window** | Limite máximo de tokens processáveis por vez |
| **Embedding** | Representação vetorial de tokens em espaço de alta dimensão |
| **Few-Shot** | Prompting com exemplos |
| **Fine-tuning** | Treinamento adicional especializado de um modelo |
| **Hallucination** | Quando o modelo gera informação plausível mas falsa |
| **Hook** | Comando que executa automaticamente em resposta a um evento |
| **Inference** | Processo de gerar output a partir de input |
| **LLM** | Large Language Model |
| **MCP** | Model Context Protocol — protocolo aberto para integrações |
| **Multi-Head Attention** | Múltiplas camadas de atenção em paralelo |
| **Pre-training** | Treinamento inicial em corpus massivo de texto |
| **Prompt** | Texto de entrada enviado ao modelo |
| **RAG** | Retrieval-Augmented Generation — busca + geração |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **Rules** | Instruções persistentes que configuram o comportamento da IA |
| **Skill** | Comando especializado que encapsula um workflow |
| **Spec** | Especificação detalhada de uma tarefa para a IA |
| **System Prompt** | Instrução "invisível" que define comportamento base |
| **Temperature** | Parâmetro que controla aleatoriedade da geração |
| **Token** | Unidade atômica de texto processada por LLMs |
| **Tokenizer** | Algoritmo que converte texto em tokens |
| **Tool** | Capacidade que um agente pode invocar (ler arquivo, buscar, etc.) |
| **Transformer** | Arquitetura de rede neural baseada em atenção |
| **Worktree** | Cópia isolada do repositório para trabalho seguro |
| **Zero-Shot** | Prompting sem exemplos |
| **BPE** | Byte Pair Encoding, algoritmo de tokenização |
| **Constitutional AI** | Alinhamento baseado em princípios escritos (Anthropic) |
| **DPO** | Direct Preference Optimization, alternativa ao RLHF |
| **FlashAttention** | Algoritmo I/O-eficiente de atenção |
| **GQA** | Grouped-Query Attention, variante que reduz KV cache |
| **KV Cache** | Cache de Keys/Values já processados na inferência |
| **MoE** | Mixture of Experts, arquitetura esparsa |
| **Perplexidade** | exp(loss); métrica de qualidade de language model |
| **PPO** | Proximal Policy Optimization, algoritmo de RL |
| **Prompt Injection** | Ataque onde dados contêm instruções maliciosas |
| **Quantização** | Reduzir precisão numérica dos pesos (fp16→int4) |
| **RAG** | Retrieval-Augmented Generation |
| **Reasoning Model** | Modelo que gera longa CoT antes de responder |
| **Re-ranker** | Segundo estágio de retrieval, cross-encoder |
| **RLAIF** | RL from AI Feedback (Constitutional AI) |
| **RLVR** | RL from Verifiable Rewards (reasoning) |
| **RoPE** | Rotary Positional Embedding |
| **Scaling Laws** | Leis de potência entre params, dados, compute e loss |
| **SFT** | Supervised Fine-Tuning |
| **Test-time Compute** | Computação gasta na inferência (thinking) |
| **Thinking Tokens** | Tokens de chain-of-thought interna em reasoning models |

---

## Apêndice D — Leitura Recomendada por Módulo

> Seleção curada de 3–5 recursos por módulo, combinando paper fundacional + livro + blog/tutorial acessível.

### Módulo 0 — História
- Russell & Norvig. *AIMA* 4ª ed. (livro-texto).
- Schmidhuber (2015), arXiv:1404.7828 (retrospectiva).
- MIT 6.034 AI (curso aberto).

### Módulo 1 — Fundamentos LLM
- Vaswani et al. 2017, *"Attention Is All You Need"* (paper).
- Alammar. *"The Illustrated Transformer"*. https://jalammar.github.io/illustrated-transformer/
- Karpathy. *"Let's build GPT from scratch"* (YouTube).
- Goodfellow et al. *Deep Learning* (livro, gratuito online).

### Módulo 1.5 — Matemática
- 3Blue1Brown. Séries de *Neural Networks* e *Transformers*.
- Raschka (2024). *Build a Large Language Model (From Scratch)*. Manning.
- Bishop (2006). *Pattern Recognition and Machine Learning*.

### Módulo 2 — Tokens
- Sennrich et al. 2016 (BPE), arXiv:1508.07909.
- OpenAI tiktoken (repo). https://github.com/openai/tiktoken
- Karpathy. *"Let's build the GPT Tokenizer"* (YouTube).

### Módulo 3 — Janela de Contexto
- Liu et al. 2023, *"Lost in the Middle"*, arXiv:2307.03172.
- Hsieh et al. 2024, *"RULER"*, arXiv:2404.06654.
- Anthropic. *"Prompt Caching"* docs.

### Módulo 4 — Engenharia de Contexto
- Anthropic. *"Contextual Retrieval"* (blog 2024).
- Huyen, C. (2025). *AI Engineering*, O'Reilly.

### Módulo 5 — Prompt Engineering
- Wei et al. 2022, *"Chain-of-Thought Prompting"*, arXiv:2201.11903.
- Yao et al. 2022, *"ReAct"*, arXiv:2210.03629.
- Anthropic. *Prompt Engineering Guide* (docs).
- OpenAI. *"GPT best practices"*.

### Módulo 6 — Spec-Driven Design
- GitHub Engineering blog — posts sobre spec-first development.
- Anthropic. *"Building effective agents"* (blog 2024).

### Módulos 7–10 — Ferramentas / Rules / MCP
- Anthropic docs — Claude Code, Skills, Hooks.
- MCP Spec — https://modelcontextprotocol.io
- Cursor, Aider docs oficiais.

### Módulo 11 — Agentes
- Shinn et al. 2023, *"Reflexion"*, arXiv:2303.11366.
- Park et al. 2023, *"Generative Agents"*, arXiv:2304.03442.
- Jimenez et al. 2024, *"SWE-Bench"*, arXiv:2310.06770.
- Anthropic. *"Building effective agents"*.

### Módulo 12 — Reasoning
- DeepSeek-AI 2025, *"DeepSeek-R1"*, arXiv:2501.12948 (essencial).
- Snell et al. 2024, arXiv:2408.03314.
- OpenAI. *"Learning to Reason with LLMs"* (o1 post).
- Kimi Team 2025, *"k1.5"*, arXiv:2501.12599.

### Módulo 13 — Alinhamento
- Ouyang et al. 2022 (InstructGPT), arXiv:2203.02155.
- Bai et al. 2022 (Constitutional AI), arXiv:2212.08073.
- Rafailov et al. 2023 (DPO), arXiv:2305.18290.
- Anthropic transformer-circuits.pub (interpretabilidade).
- Hendrycks et al. 2023, *"Catastrophic AI Risks"*, arXiv:2306.12001.

### Módulo 14 — Avaliação
- Liang et al. 2022 (HELM), arXiv:2211.09110.
- Chang et al. 2023 (survey), arXiv:2307.03109.
- Zheng et al. 2023 (LLM-as-judge), arXiv:2306.05685.
- Anthropic. *"Challenges in Evaluating AI Systems"*.

### Módulo 15 — RAG
- Lewis et al. 2020 (RAG original), arXiv:2005.11401.
- Gao et al. 2023 (survey), arXiv:2312.10997.
- Edge et al. 2024 (GraphRAG), arXiv:2404.16130.
- Anthropic. *"Contextual Retrieval"*.
- Huyen, C. *AI Engineering*.

### Autores para seguir
- **Lilian Weng** — https://lilianweng.github.io (posts técnicos densos).
- **Sebastian Raschka** — https://magazine.sebastianraschka.com
- **Chip Huyen** — https://huyenchip.com
- **Simon Willison** — https://simonwillison.net (pragmatismo e prompt injection).
- **Andrej Karpathy** — tutoriais de código.
- **Nathan Lambert** — https://www.interconnects.ai (RLHF e reasoning).

---

## Notas para Geração do Site

### Estrutura Sugerida do Site

```
/ (Home)
├── /intro          → Visão geral do treinamento + árvore de módulos
├── /modulo/1       → Fundamentos LLM
├── /modulo/2       → Tokens
├── /modulo/3       → Janela de Contexto
├── /modulo/4       → Engenharia de Contexto
├── /modulo/5       → Prompt Engineering
├── /modulo/6       → Spec-Driven Design
├── /modulo/7       → Ferramentas de IA
├── /modulo/8       → Rules e Configuração
├── /modulo/9       → Skills e Hooks
├── /modulo/10      → MCP
├── /modulo/11      → Agentes
├── /ferramentas    → Apêndice A (links e ferramentas)
├── /referencias    → Apêndice B (bibliografia)
└── /glossario      → Apêndice C
```

### Tecnologias Sugeridas para o Site

| Necessidade | Tecnologia | Por que |
|---|---|---|
| **Framework** | Next.js 14+ ou Astro | SSG para performance, MDX para conteúdo |
| **Estilização** | Tailwind CSS | Rápido, responsivo, bom para documentação |
| **Diagramas** | Mermaid.js ou D3.js | Renderização de diagramas inline |
| **Diagramas interativos** | React Flow | Para árvore de dependências e MCP |
| **Código** | Shiki ou Prism.js | Syntax highlighting |
| **Gráficos** | Chart.js ou Recharts | Para evolução de context windows |
| **Navegação** | Sidebar fixa + progress bar | UX de documentação/curso |
| **Busca** | Algolia DocSearch ou Pagefind | Busca full-text no conteúdo |
| **Deploy** | Vercel ou Cloudflare Pages | Deploy automático do Git |

### Elementos Interativos por Módulo

| Módulo | Elemento Interativo |
|---|---|
| 1 | Slider de temperature + visualização de probabilidades |
| 2 | Tokenizer embutido (iframe ou componente customizado) |
| 3 | Calculadora de "quanto do meu projeto cabe no contexto" |
| 4 | Comparador lado-a-lado (com vs. sem boa engenharia de contexto) |
| 5 | Prompt Playground com sugestões em tempo real |
| 6 | Gerador de templates de spec |
| 7 | Tabela comparativa com filtros |
| 8 | Gerador de CLAUDE.md interativo |
| 9 | Diagrama de ciclo de vida com Hooks |
| 10 | Diagrama interativo da arquitetura MCP (React Flow) |
| 11 | Visualização do loop ReAct passo a passo |

### Assets Visuais Necessários

1. **Diagrama da arquitetura Transformer** — Recriar com SVG baseado na Figura 1 do paper original
2. **Animação de Self-Attention** — Palavras conectadas por linhas de espessura variável
3. **Timeline de evolução das LLMs** — De GPT-1 a Claude 4, com marcos
4. **Gráfico de evolução de context windows** — Barras ou timeline
5. **Curva "Lost in the Middle"** — Gráfico em U da performance vs posição
6. **Diagrama de pipeline de treinamento** — 3 fases do treinamento de LLMs
7. **Diagrama de arquitetura MCP** — Host, Client, Server, Transport
8. **Loop ReAct** — Reasoning → Action → Observation em ciclo
9. **Comparativo de ferramentas** — Cards com logos e features
10. **Árvore de dependências dos módulos** — Diagrama interativo clicável

> **Fontes de logos e ícones:**
> - Logos das ferramentas: sites oficiais (uso com atribuição)
> - Ícones: Lucide Icons (https://lucide.dev) ou Heroicons (open source)
> - Diagramas: Gerar com Mermaid.js, D3.js ou Figma

---

*Este documento foi criado como base para a geração de um site interativo de treinamento sobre Programação com Agentes de IA. Todo o conteúdo deve ser verificado e atualizado conforme necessário, especialmente URLs e preços que podem mudar com o tempo.*

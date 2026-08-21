# Caderno Temático no NotebookLM

> Um guia de estudo construído com curadoria de fontes, investigação assistida por IA e registro do processo de aprendizagem.

> 🔗 **Link de Acesso ao Caderno NotebookLM:**  
> [Acessar Caderno no NotebookLM](https://notebook.google.com/notebook/caae0de9-831f-452f-994f-f00a5146045f)

## Contexto e Objetivos

Este repositório documenta a construção e o uso de um caderno temático interativo no NotebookLM, focado na estruturação de um plano de estudos e carreira para **Desenvolvimento Full-Stack em 2026**.

* **Assunto de Interesse:** Mapeamento de habilidades, trilhas de aprendizado (Front-End, Back-End, DevOps), tendências tecnológicas de 2026 (integração com IA) e comparação de bootcamps/plataformas de ensino de tecnologia no Brasil.
* **Objetivo de Estudo:** Traçar um roteiro prático e acionável de 12 meses para migração/evolução na carreira de desenvolvimento web, identificando linguagens prioritárias, projetos fundamentais de portfólio e metodologias para treinar a lógica de programação.

---

## Curadoria de Fontes

Foram selecionadas e carregadas no caderno as seguintes fontes abertas e relatórios técnicos:

1. **Roteiro do Desenvolvedor Java Full-Stack:** Guia de trilha de aprendizagem de 12 meses.
2. **Alura vs. Rocketseat em 2026:** Estudo comparativo para escolha de plataforma de formação Full-Stack.
3. **Relatório de Pesquisa (Deep Research):** O Estado da Programação Full-Stack: Evolução Tecnológica, Dinâmicas de Mercado e Educação Profissional.
4. **Relatório de Pesquisa:** Vídeos e Recursos de Pensamento Computacional.
5. **The 2026 Developer Tech Stack:** Tendências de linguagens, frameworks e ferramentas para aprender, usar ou descartar.

---

## Engenharia de Prompts e "Cicatrizes" (Troubleshooting)

### Prompt 1: Mapeamento de Carreira Inicial
* **Prompt Enviado:**  
  > *"Eu quero ser um programador fullstack. O que devo fazer? Me recomende linguagens e cursos."*
* **Resposta Obtida:** Roteiro geral em 3 fases (Fundamentos 1-4m, Back-End 5-8m, Infra/DevOps 9-12m), recomendação de TypeScript, Python e Java, e comparação entre plataformas (Alura, Rocketseat, Cubos Academy, Nucamp).
* **Cicatrizes / Desafios:** A resposta cobria bem o ecossistema, mas a indicação de cursos ficou pulverizada em diferentes abordagens metodológicas sem um direcionamento único.

### Prompt 2: Refinamento de Treinamento e Bootcamps
* **Prompt Enviado:**  
  > *"Tem algum curso em específico que você me recomenda? Um curso completo que englobe todas essas áreas."*
* **Resposta Obtida:** Detalhamento comparativo entre Trybe (ISA/Síncrono), Alura (Trilhas flexíveis), Rocketseat (Ignite/JS) e Le Wagon (Imersão IA).
* **Cicatrizes / Desafios:** Cursos "únicos" nem sempre cobrem com a mesma profundidade Front, Back e DevOps. A solução foi tratar o aprendizado como um conjunto de módulos sequenciais.

### Prompt 3: Busca de Mídia Externa e Lacuna de Dados
* **Prompt Enviado:**  
  > *"Me recomende vídeos sobre Pensamento Computacional"*
* **Resposta Obtida:** A IA identificou que as fontes internas continham apenas o curso da Alura e sugeriu realizar uma pesquisa na web. Após autorização ("Sim"), a IA gerou um relatório externo com vídeos do TED e conteúdos explicativos.
* **Cicatrizes / Desafios:** Ferramentas de RAG/NotebookLM dependem estritamente do contexto interno. Quando o usuário pede mídias específicas não indexadas, a IA precisa de fallback via busca na web para não alucinar.

---

## Miniguia de Estudo

### 1. Resumo Estruturado do Assunto

* **Fase 1 (Meses 1–4) — Front-End e Fundamentos:** Dominar HTML5, CSS3 (Flexbox/Grid), JavaScript moderno e versionamento de código com Git/GitHub. Avançar para um framework reativo como React.
* **Fase 2 (Meses 5–8) — Back-End e Dados:** Escolher um ecossistema de servidor (Node.js/TypeScript, Python ou Java/Spring Boot). Aprender bancos de dados relacionais (PostgreSQL) e NoSQL (MongoDB).
* **Fase 3 (Meses 9–12) — Infraestrutura e Projetos:** Conteinerização com Docker, autenticação JWT, deploy em nuvem (AWS/Fly.io) e CI/CD via GitHub Actions.
* **Prática de Lógica:** Exercitar o Pensamento Computacional (Decomposição, Padrões, Abstração e Algoritmos) e os pilares de Orientação a Objetos.

---

### 2. Glossário de Conceitos Aprendidos

| Conceito | Descrição |
| :--- | :--- |
| **Full-Stack** | Desenvolvedor atua tanto na camada de interface (Front-End) quanto na lógica de servidor e dados (Back-End). |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática, reduzindo erros em código de grande escala. |
| **POO (Programação Orientada a Objetos)** | Paradigma baseado em encapsulamento, herança, polimorfismo e abstração para código modular e escalável. |
| **Pensamento Computacional** | Estratégia de resolução de problemas dividida em 4 pilares: decomposição, reconhecimento de padrões, abstração e algoritmos. |
| **CRUD** | Sigla para as quatro operações básicas de armazenamento persistente: Create, Read, Update e Delete. |
| **Docker** | Plataforma de conteinerização que empacota a aplicação e suas dependências para execução padronizada. |

---

### 3. Prompts Reutilizáveis para Revisões Futuras

```text
[REVISÃO DE LÓGICA]
"Atue como um instrutor de programação. Elabore 3 exercícios práticos progressivos para treinar [CONCEITO: ex: vetores/laços de repetição] em [LINGUAGEM], sem fornecer a resposta de imediato."

[ANÁLISE DE CÓDIGO E POO]
"Analise o bloco de código abaixo e verifique se ele atende aos pilares da Programação Orientada a Objetos (Encapsulamento, Herança, Polimorfismo, Abstração). Aponta pontos de melhoria e refatoração."

[ARQUITETURA DE PROJETO PORTFÓLIO]
"Monte um checklist passo a passo para a criação de um projeto [TIPO DE PROJETO: ex: E-commerce / CRUD] abrangendo Front-End em React, Back-End em Node.js/TypeScript e banco PostgreSQL."
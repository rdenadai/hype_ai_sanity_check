export const data = {
  portuguese: {
    head: "Hyper AI Sanity Check",
    title: "Qual é a sua Personalidade de IA?",
    submitButtonText: "Ver Resultados",
    references: "Referências",
    questionnaire: [
      {
        question: "Em quantos anos você acredita que a IA vai dominar o mundo?",
        answers: [
          { text: "Menos de 5 anos", score: 10 },
          { text: "Entre 5 e 10 anos", score: 7 },
          { text: "Mais de 10 anos", score: 4 },
          { text: "Nunca vai acontecer", score: 1 },
        ],
      },
      {
        question: "O que você pensa quando ouve 'Inteligência Artificial'?",
        answers: [
          { text: "Robôs humanóides dominando o mundo", score: 10 },
          { text: "Carros autônomos e assistentes virtuais", score: 7 },
          { text: "Ferramentas de automação para empresas", score: 4 },
          { text: "Algoritmos de recomendação em redes sociais", score: 1 },
        ],
      },
      {
        question: "Qual é o seu principal motivo para aprender sobre IA?",
        answers: [
          {
            text: "Porque é a tecnologia do futuro e todos deveriam saber",
            score: 10,
          },
          { text: "Para impressionar meus amigos e colegas", score: 7 },
          { text: "Para melhorar minha carreira profissional", score: 4 },
          { text: "Só por curiosidade", score: 1 },
        ],
      },
      {
        question:
          "Você usa assistentes virtuais (como Siri, Alexa, Google Assistant) com que frequência?",
        answers: [
          { text: "O tempo todo", score: 10 },
          { text: "Algumas vezes por semana", score: 7 },
          { text: "Raramente", score: 4 },
          { text: "Nunca", score: 1 },
        ],
      },
      {
        question:
          "Qual destes filmes você acha que melhor representa o futuro da IA?",
        answers: [
          { text: "Ex Machina", score: 10 },
          { text: "Matrix", score: 7 },
          { text: "Her", score: 4 },
          { text: "Wall-E", score: 1 },
        ],
      },
      {
        question:
          "Você já trabalhou com algum algoritmo de IA, como redes neurais?",
        answers: [
          { text: "Não, nunca trabalhei com isso", score: 10 },
          { text: "Não diretamente, mas conheço a teoria", score: 7 },
          { text: "Sim, já utilizei algumas bibliotecas de IA", score: 4 },
          {
            text: "Sim, implementei redes neurais e outros algoritmos complexos",
            score: 1,
          },
        ],
      },
      {
        question: "O quanto você confia em decisões tomadas por IA?",
        answers: [
          { text: "Confio totalmente", score: 10 },
          { text: "Confio na maioria das vezes", score: 7 },
          { text: "Confio apenas em algumas situações", score: 4 },
          { text: "Não confio", score: 1 },
        ],
      },
      {
        question:
          "Qual a sua reação quando lê notícias sobre novos avanços em IA?",
        answers: [
          { text: "Fico muito empolgado e quero saber mais", score: 10 },
          {
            text: "Acho interessante, mas sigo com minha vida normalmente",
            score: 7,
          },
          {
            text: "Leio por curiosidade, mas não dou muita importância",
            score: 4,
          },
          { text: "Acho que é só mais um exagero da mídia", score: 1 },
        ],
      },
      {
        question:
          "Você acha que IA pode criar arte e música melhores que humanos?",
        answers: [
          { text: "Sim, sem dúvida", score: 10 },
          { text: "Talvez, mas ainda prefiro o toque humano", score: 7 },
          {
            text: "Acho que pode criar coisas boas, mas não melhores",
            score: 4,
          },
          { text: "Não, a criatividade humana é insuperável", score: 1 },
        ],
      },
      {
        question:
          "Como você se sentiria se uma IA fizesse seu trabalho melhor que você?",
        answers: [
          { text: "Assustado e ameaçado", score: 10 },
          { text: "Motivado a melhorar minhas habilidades", score: 7 },
          { text: "Indiferente, a tecnologia está sempre mudando", score: 4 },
          { text: "Curioso para aprender com a IA", score: 1 },
        ],
      },
    ],
    profiles: [
      {
        id: "024da774-b865-4038-8eeb-719cab379eff",
        name: "O Techno Profeta",
        min_score: 80,
        max_score: 100,
        description:
          "Você acredita fervorosamente que a IA dominará o mundo em breve e passa horas imaginando como será viver sob a liderança de nossos novos mestres robóticos.",
      },
      {
        id: "d0aa249a-a8dc-450c-b223-6a4ec84e37ae",
        name: "O Entusiasta Empolgado",
        min_score: 60,
        max_score: 79,
        description:
          "Você vê a IA como a chave para um futuro brilhante, cheio de carros autônomos e assistentes pessoais que resolverão todos os nossos problemas.",
      },
      {
        id: "129005dd-cae8-45c7-8ae7-772d1dc14c30",
        name: "O Carreirista Pragmático",
        min_score: 40,
        max_score: 59,
        description:
          "Para você, a IA é uma ferramenta poderosa para avançar na carreira, e você está disposto a aprender tudo o que puder para se manter à frente no mercado de trabalho. E fodam-se esses malditos robôs!!",
      },
      {
        id: "4a119e55-9074-4a53-9e1d-9f690eb340a8",
        name: "O Aficionado por Ficção Científica",
        min_score: 20,
        max_score: 39,
        description:
          "Seu interesse por IA vem dos filmes e livros de ficção científica, e você adora teorizar sobre como a tecnologia pode transformar (ou destruir) nosso futuro.",
      },
      {
        id: "5a2bc38c-487b-4361-b743-5d38f08c9549",
        name: "O Cético Sossegado",
        min_score: 10,
        max_score: 19,
        description:
          "Você acha que a IA é útil, mas acredita que todo o hype é exagerado. Prefere esperar para ver como as coisas realmente vão se desenrolar.",
      },
    ],
  },
  english: {
    head: "Hyper AI Sanity Check",
    title: "What's Your AI Personality?",
    submitButtonText: "Get Your Results",
    references: "References",
    questionnaire: [
      {
        question:
          "How many years do you think it will take for AI to dominate the world?",
        answers: [
          { text: "Less than 5 years", score: 10 },
          { text: "Between 5 and 10 years", score: 7 },
          { text: "More than 10 years", score: 4 },
          { text: "It will never happen", score: 1 },
        ],
      },
      {
        question: "What comes to mind when you hear 'Artificial Intelligence'?",
        answers: [
          { text: "Humanoid robots taking over the world", score: 10 },
          { text: "Self-driving cars and virtual assistants", score: 7 },
          { text: "Automation tools for businesses", score: 4 },
          { text: "Recommendation algorithms on social media", score: 1 },
        ],
      },
      {
        question: "What's your main reason for learning about AI?",
        answers: [
          {
            text: "Because it's the technology of the future and everyone should know",
            score: 10,
          },
          { text: "To impress my friends and colleagues", score: 7 },
          { text: "To advance my professional career", score: 4 },
          { text: "Just out of curiosity", score: 1 },
        ],
      },
      {
        question:
          "How often do you use virtual assistants (like Siri, Alexa, Google Assistant)?",
        answers: [
          { text: "All the time", score: 10 },
          { text: "A few times a week", score: 7 },
          { text: "Rarely", score: 4 },
          { text: "Never", score: 1 },
        ],
      },
      {
        question:
          "Which of these movies do you think best represents the future of AI?",
        answers: [
          { text: "Ex Machina", score: 10 },
          { text: "The Matrix", score: 7 },
          { text: "Her", score: 4 },
          { text: "Wall-E", score: 1 },
        ],
      },
      {
        question:
          "Have you ever worked with any AI algorithms, like neural networks?",
        answers: [
          { text: "No, I've never worked with that", score: 10 },
          { text: "Not directly, but I know the theory", score: 7 },
          { text: "Yes, I've used some AI libraries", score: 4 },
          {
            text: "Yes, I've implemented neural networks and other complex algorithms",
            score: 1,
          },
        ],
      },
      {
        question: "How much do you trust decisions made by AI?",
        answers: [
          { text: "Completely trust", score: 10 },
          { text: "Trust most of the time", score: 7 },
          { text: "Trust only in some situations", score: 4 },
          { text: "Don't trust", score: 1 },
        ],
      },
      {
        question:
          "What's your reaction when you read news about new AI advancements?",
        answers: [
          { text: "Very excited and want to learn more", score: 10 },
          { text: "Find it interesting but go on with my life", score: 7 },
          {
            text: "Read out of curiosity but don't give it much importance",
            score: 4,
          },
          { text: "Think it's just another media exaggeration", score: 1 },
        ],
      },
      {
        question:
          "Do you think AI can create better art and music than humans?",
        answers: [
          { text: "Yes, absolutely", score: 10 },
          { text: "Maybe, but I still prefer the human touch", score: 7 },
          {
            text: "I think it can create good things, but not better",
            score: 4,
          },
          { text: "No, human creativity is unbeatable", score: 1 },
        ],
      },
      {
        question: "How would you feel if an AI did your job better than you?",
        answers: [
          { text: "Scared and threatened", score: 10 },
          { text: "Motivated to improve my skills", score: 7 },
          { text: "Indifferent, technology is always changing", score: 4 },
          { text: "Curious to learn from the AI", score: 1 },
        ],
      },
    ],
    profiles: [
      {
        id: "024da774-b865-4038-8eeb-719cab379eff",
        name: "The Techno Prophet",
        min_score: 80,
        max_score: 100,
        description:
          "You fervently believe that AI will take over the world soon and spend hours imagining what it will be like to live under the leadership of our new robotic overlords.",
      },
      {
        id: "d0aa249a-a8dc-450c-b223-6a4ec84e37ae",
        name: "The Excited Enthusiast",
        min_score: 60,
        max_score: 79,
        description:
          "You see AI as the key to a brilliant future, full of self-driving cars and personal assistants that will solve all our problems.",
      },
      {
        id: "129005dd-cae8-45c7-8ae7-772d1dc14c30",
        name: "The Pragmatic Careerist",
        min_score: 40,
        max_score: 59,
        description:
          "For you, AI is a powerful tool for advancing your career, and you are willing to learn everything you can to stay ahead in the job market. And fuck those damn robots!!",
      },

      {
        id: "4a119e55-9074-4a53-9e1d-9f690eb340a8",
        name: "The Sci-Fi Aficionado",
        min_score: 20,
        max_score: 39,
        description:
          "Your interest in AI comes from sci-fi movies and books, and you love theorizing about how technology might transform (or destroy) our future.",
      },
      {
        id: "5a2bc38c-487b-4361-b743-5d38f08c9549",
        name: "The Relaxed Skeptic",
        min_score: 10,
        max_score: 19,
        description:
          "You think AI is useful but believe all the hype is exaggerated. You prefer to wait and see how things actually unfold.",
      },
    ],
  },
};

import ImgFormReact from "/assets/images/projetos/formReact.webp";
import ImgRainyNight from "/assets/images/projetos/rainyNight.webp";
import ImgRiotCopy from "/assets/images/projetos/riotCopy.webp";
import ImgMorgannaWebsite from "/assets/images/projetos/morgannaWebsite.webp"
import ImgViacaoCalango from "/assets/images/projetos/viacaoCalango.webp";
import ImgToDoList from "/assets/images/projetos/toDoList.webp";
import ImgBibliotecaPoo from "/assets/images/projetos/bibliotecaPoo.webp";
import ImgMedConAgular from "/assets/images/projetos/medConAngular.webp";
import ImgHangMan from "/assets/images/projetos/hangman.webp";
import ImgEmailClassifier from "/assets/images/projetos/emailClassifier.webp"
import arrayItemSvg from "./arraySvg";

const arrayProjetos = [
    {
        imageSrc: ImgFormReact,
        title: "Formulário em ReactJs",
        description: `Este é um formulário simples construído em ReactJs.
          Após o cadastro de um produto, ele é imediatamente exibido em uma tabela logo abaixo.
          A tabela permite ordenar os produtos de forma crescente ou decrescente com base em seu valor,
          oferecendo uma maneira prática de visualizar e organizar as informações.`,
        linkRepo: "https://github.com/TheBestGekyume/Form-React",
        linkSite: "https://thebestgekyume.github.io/Form-React/",
        icons: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgRainyNight,
        title: "Rainy Night - Web Horror Game",
        description: `Rainy Night começou como um trabalho de faculdade,
          com o objetivo de criar um jogo interativo usando apenas HTML, CSS e JavaScript.
          Após algumas melhorias e ajustes, o resultado final foi aprimorado.
          O jogo permite que os jogadores façam escolhas que influenciam o desenrolar da história,
          proporcionando uma experiência com foco no terror psicológico.
          Além disso, inclui efeitos sonoros e visuais, aumentando a imersividade. Experimente!`,
        linkRepo: "https://github.com/TheBestGekyume/Rainy-Night",
        linkSite: "https://thebestgekyume.github.io/Rainy-Night/",
        icons: ["HTML5", "CSS3", "JavaScript", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgRiotCopy,
        title: "Riot Web Site Copy",
        description: `Este foi o primeiro projeto que concluí no Santander Coders 2024.
      Trata-se de um site não funcional, desenvolvido com HTML e SCSS, com o objetivo
      de replicar um design existente e praticar os fundamentos básicos do desenvolvimento web.
      Além de aprimorar minhas habilidades técnicas, esse projeto também me proporcionou
      uma melhor compreensão sobre o trabalho em equipe e a importância da comunicação
      entre os membros do grupo.`,
        linkRepo: "https://github.com/TheBestGekyume/Riot-Copy",
        linkSite: "https://thebestgekyume.github.io/Riot-Copy",
        icons: ["HTML5", "CSS3", "Sass", "JavaScript", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgEmailClassifier,
        title: "Email Classifier",
        description: `O email Email Classifier é uma aplicação web que classifica um email enviado como
      produtivo ou improdutivo com base nos seguintes parâmetros: 
      Produtivo -> Emails que requerem uma ação ou resposta específica
      (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
      Improdutivo -> Emails que não necessitam de uma ação imediata
      (ex.: mensagens de felicitações, agradecimentos).`,
        linkRepo: "https://github.com/TheBestGekyume/Case-Desafio-AutoU-Classifica-o-de-Email",
        linkSite: "https://case-desafio-auto-u-classifica-o-de.vercel.app/",
        icons: ["React", "TypeScript", "Sass", "Bootstrap", "Python", "spaCy", "Gemini", "FastAPI"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgViacaoCalango,
        title: "Viação Calango",
        description: `A Viação Calango foi um projeto acadêmico desenvolvido em dupla
      para a disciplina de Desenvolvimento Web, com foco na construção do back-end
      de um sistema de viagens. Utilizamos PHP para a API, MySQL/SQL para o banco de
      dados e React no front-end, garantindo uma interface dinâmica e intuitiva.
      O Axios facilitou a comunicação entre as camadas, permitindo requisições rápidas
      e eficientes. Um dos destaques do projeto foi a criação de uma regra de negócios
      própria, que guiou toda a implementação de forma estruturada. Essa experiência 
      proporcionou uma prática completa, desde a definição da lógica até a entrega final 
      do sistema.`,
        linkRepo: "https://github.com/TheBestGekyume/ViacaoCalango",
        linkSite: null,
        icons: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "PHP", "MySql", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgMorgannaWebsite,
        title: "Morganna Lessa - Website",
        description: `Este projeto não foi apenas um exercício para meu portfólio,
      mas sim uma experiência real de desenvolvimento para minha primeira cliente,
      Morganna Lessa. O site, estruturado como um portfólio de advocacia,
      foi desenvolvido do zero, desde o design até o deploy, com base em conversas diretas,
      apresentação de ideias e testes para garantir que atendesse às suas necessidades.
      Mais do que aprender novas icons ou otimizar um site real,
      este projeto me proporcionou uma vivência essencial: o contato direto com um cliente
       e a responsabilidade de cumprir prazos.`,
        linkRepo: "https://github.com/TheBestGekyume/WebSiteMorganna",
        linkSite: "https://morgannalessa.netlify.app/",
        icons: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgToDoList,
        title: "TodoList - Angular",
        description: `Este projeto é uma aplicação de lista de tarefas (ToDo List) desenvolvida com
      Angular e Bootstrap, e utiliza uma API customizada para operações de CRUD. Esse foi um dos
      trabalhos em equipe que realizei quando estava no programa Santander Coders.`,
        linkRepo: "https://github.com/TheBestGekyume/ToDo-List-Angular",
        linkSite: "https://to-do-list-angular-khaki.vercel.app/",
        icons: ["HTML5", "CSS3", "TypeScript", "Angular", "Bootstrap"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgMedConAgular,
        title: "MedCon - Angular",
        description: `MedCon-Angular é um sistema de gerenciamento de consultas médicas desenvolvido em
      Angular, com autenticação e controle de acesso para usuários e administradores. Permite criar,
      editar, visualizar e gerenciar o status de consultas, aplicando práticas como componentização,
      rotas protegidas e integração com APIs. Esse foi o projeto do último módulo do Santander Coders,
      também executado em grupo.`,
        linkRepo: "https://github.com/TheBestGekyume/MedCon-Angular",
        linkSite: null,
        icons: ["HTML5", "CSS3", "TypeScript", "Angular", "Bootstrap", "JWT"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgBibliotecaPoo,
        title: "Biblioteca - TypeScript POO",
        description: `Este projeto consiste em desenvolver uma aplicação que simula o sistema de
       gerenciamento de uma biblioteca, utilizando TypeScript para garantir a tipagem estática e 
       organização do código.`,
        linkRepo: "https://github.com/TheBestGekyume/Biblioteca---TypeScript-POO",
        linkSite: null,
        icons: ["TypeScript"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },
    {
        imageSrc: ImgHangMan,
        title: "Hangman",
        description: `THE HANGMAN é um jogo interativo da forca, desenvolvido em HTML,  CSS e JavaScript, 
      que permite ao jogador adivinhar palavras de temas como Avatar, Dragon Ball e Naruto. O jogo conta 
      com teclado virtual, dicas dinâmicas via API externa e salva a pontuação no localStorage.`,
        linkRepo: "https://github.com/TheBestGekyume/hagman-ada",
        linkSite: null,
        icons: ["HTML5", "CSS3", "JavaScript"].map(name =>
            arrayItemSvg.find(icon => icon.title === name)
        ).filter(Boolean),
    },


];

export default arrayProjetos;
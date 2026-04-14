import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },

    // About
    openToHire: "Open to hire",
    roleTitle: "Web Developer",
    aboutText:
      "I develop websites and web applications that combine performance, design, and functionality. With a focus on WordPress, PHP, JavaScript, and React, I turn ideas into modern, responsive, and well-structured digital experiences. I have advanced English proficiency, which strengthens my ability to work with technologies, documentation, and projects in a global environment.",
    profileAlt: "Profile photo",

    // Projects / Experience
    projectsTitle: "Experience",
    visitProject: "Visit Project",

    roleWebDeveloper: "Web Developer",
    roleFullStackWebDeveloper: "Full Stack Web Developer",
    roleFrontendDeveloper: "Front-End Developer",
    roleFullStackDeveloper: "Full Stack Developer",
    roleEcomDeveloper: "E-commerce & Web Developer",

    labelPersonalEcommerce: "Personal E-commerce Project",
    labelPersonalReact: "Personal React Project",
    labelWooStorePersonal:
      "Personal E-commerce Project | WordPress & WooCommerce",
    labelNextStepTimeplace:
      "November 2024 – September 2025 | Sorocaba, São Paulo, Brazil",

    // Projects Text (ALL)
    projectsText: {
      woostore: {
        description:
          "A robust electronics store specializing in consoles, notebooks, and gaming gear. Built with Elementor Pro, featuring advanced shipping simulation, Mercado Pago integration, and aggressive performance optimization with WP Rocket and Smush.",
        bullets: [
          "Full e-commerce development featuring consoles, notebooks, and high-end peripherals.",
          "Advanced layout customization using Elementor Pro for a premium tech-focused UI.",
          "Seamless payment integration with Mercado Pago and dynamic shipping simulators.",
          "High-performance optimization using WP Rocket and Smush for fast loading times.",
          "Custom functionality implemented via Code Snippets for tailored business logic.",
          "Ensured a secure and responsive checkout experience across all devices.",
        ],
      },
      thrive: {
        description:
          "Developed and redesigned the Thrive Digital website, creating a more modern and strategic online presence aligned with the brand’s new positioning. The project focused on responsiveness, visual identity, performance, and user experience.",
        bullets: [
          "Built and customized pages using WordPress and Elementor.",
          "Improved the site's structure, layout, and visual consistency.",
          "Created and adjusted design assets using Canva.",
          "Implemented SEO, cookies, and chatbot integrations with WordPress plugins.",
          "Ensured full responsiveness across mobile, tablet, and desktop.",
          "Structured essential pages such as Privacy Policy, Cookies, and Terms & Conditions.",
        ],
      },
      hobbi: {
        description:
          "Developed an e-commerce project focused on electronics, building both the frontend and backend structure to support product display, shopping flow, and data management. The project emphasized usability, organization, and scalable development.",
        bullets: [
          "Built product pages, shopping flow, and dynamic interface components.",
          "Developed backend features using PHP for data handling and business logic.",
          "Managed database structure and integrations with MySQL.",
          "Worked on responsive layouts for a consistent cross-device experience.",
          "Organized code structure to improve maintenance and scalability.",
          "Focused on delivering a practical and user-friendly e-commerce experience.",
        ],
      },
      netflix: {
        description:
          "Built a Netflix-inspired interface from scratch as a React study project, focusing on component structure, API consumption, dynamic rendering, and visual detail. The application was deployed on Vercel and uses data from The Movie Database API.",
        bullets: [
          "Developed the project from initial structure to deployment.",
          "Consumed movie and series data using The Movie Database API.",
          "Used React Hooks such as useState and useEffect for state and lifecycle management.",
          "Managed states for the movie catalog, featured content, and header behavior.",
          "Built interactive UI behavior with JavaScript and custom CSS styling.",
          "Published the project on Vercel and planned future improvements such as user screens and content detail pages.",
        ],
      },
      proximoPasso: {
        description:
          "Worked on the development and maintenance of a business ERP system designed to optimize internal company processes. Contributed to a centralized platform focused on improving operational efficiency, automation, and usability for different types of businesses.",
        bullets: [
          "Developed ERP features for business management workflows.",
          "Integrated financial, inventory, and sales modules.",
          "Built backend functionality using PHP and MySQL.",
          "Focused on scalability, performance, and maintainable code.",
          "Helped create a practical and intuitive solution for daily business operations.",
        ],
      },
    },

    // Contact
    contactTitle: "Contact Me",
    contactTextLine1: "Have an exciting mobile or web project in mind?",
    contactTextLine2: "Let's bring it to life with cutting-edge technology.",
    contactPlaceholderName: "Your name",
    contactPlaceholderEmail: "Your email",
    contactPlaceholderSubject: "Subject",
    contactPlaceholderMessage: "Your message",
    contactBtn: "Get in Touch",
    contactSending: "Sending...",
    contactSuccess:
      "Message sent successfully! We’ll get back to you shortly.!",
    contactErrorPrefix: "Error",
    contactError: "Failed to send message. Please try again.",
    footerText: "© 2026 Alfredo Mello | All rights reserved.",
  },

  pt: {
    nav: { about: "Sobre", projects: "Projetos", contact: "Contato" },

    // About
    openToHire: "Disponível para contratar",
    roleTitle: "Desenvolvedor Web",
    aboutText:
      "Eu desenvolvo sites e aplicações web que combinam performance, design e funcionalidade. Com foco em WordPress, PHP, JavaScript e React, transformo ideias em experiências digitais modernas, responsivas e bem estruturadas. Tenho inglês avançado, o que fortalece minha atuação com tecnologias, documentação e projetos em um ambiente global.",
    profileAlt: "Foto de perfil",

    // Projects / Experience
    projectsTitle: "Experiência",
    visitProject: "Ver Projeto",

    roleWebDeveloper: "Desenvolvedor Web",
    roleFullStackWebDeveloper: "Desenvolvedor Web Full Stack",
    roleFrontendDeveloper: "Desenvolvedor Front-End",
    roleFullStackDeveloper: "Desenvolvedor Full Stack",
    roleEcomDeveloper: "Desenvolvedor E-commerce & Web",

    labelPersonalEcommerce: "Projeto Pessoal de E-commerce",
    labelPersonalReact: "Projeto Pessoal em React",
    labelWooStorePersonal:
      "Projeto Pessoal de E-commerce | WordPress & WooCommerce",
    labelNextStepTimeplace:
      "Novembro 2024 – Setembro 2025 | Sorocaba, São Paulo, Brazil",

    // Projects Text (ALL) PT-BR
    projectsText: {
      woostore: {
        description:
          "Loja de eletrônicos especializada em consoles, headsets e equipamentos gamers. Desenvolvida com Elementor Pro, conta com simulador de frete avançado, integração com Mercado Pago e otimização agressiva de performance com WP Rocket e Smush.",
        bullets: [
          "Desenvolvimento completo de e-commerce focado em consoles, notebooks e periféricos de alto padrão.",
          "Customização avançada de layout com Elementor Pro para uma UI premium focada em tecnologia.",
          "Integração fluida de pagamentos com Mercado Pago e simuladores de frete dinâmicos.",
          "Otimização de performance extrema usando WP Rocket e Smush para carregamento rápido.",
          "Funcionalidades personalizadas via Code Snippets para lógica de negócio sob medida.",
          "Garantia de uma experiência de checkout segura e responsiva em todos os dispositivos.",
        ],
      },
      thrive: {
        description:
          "Desenvolvi e redesenhei o site da Thrive Digital, criando uma presença online mais moderna e estratégica alinhada ao novo posicionamento da marca. O projeto teve foco em responsividade, identidade visual, performance e experiência do usuário.",
        bullets: [
          "Criei e personalizei páginas usando WordPress e Elementor.",
          "Melhorei a estrutura, o layout e a consistência visual do site.",
          "Criei e ajustei assets de design usando Canva.",
          "Implementei SEO, cookies e integrações de chatbot com plugins do WordPress.",
          "Garanti responsividade completa para mobile, tablet e desktop.",
          "Estruturei páginas essenciais como Política de Privacidade, Cookies e Termos & Condições.",
        ],
      },
      hobbi: {
        description:
          "Desenvolvi um projeto de e-commerce focado em eletrônicos, construindo a estrutura de frontend e backend para suportar vitrine de produtos, fluxo de compra e gerenciamento de dados. O projeto teve foco em usabilidade, organização e escalabilidade.",
        bullets: [
          "Criei páginas de produto, fluxo de compra e componentes dinâmicos de interface.",
          "Desenvolvi funcionalidades de backend em PHP para regras de negócio e tratamento de dados.",
          "Modelei e gerenciei integrações com banco de dados MySQL.",
          "Trabalhei em layouts responsivos para uma experiência consistente em diferentes dispositivos.",
          "Organizei a estrutura do código visando manutenção e escalabilidade.",
          "Foquei em uma experiência prática e amigável para o usuário no e-commerce.",
        ],
      },
      netflix: {
        description:
          "Criei uma interface inspirada na Netflix do zero como projeto de estudo em React, com foco em estrutura de componentes, consumo de API, renderização dinâmica e atenção aos detalhes visuais. A aplicação foi publicada na Vercel e utiliza dados da API do The Movie Database.",
        bullets: [
          "Desenvolvi o projeto desde a estrutura inicial até o deploy.",
          "Consumi dados de filmes e séries utilizando a API do The Movie Database.",
          "Utilizei React Hooks como useState e useEffect para estado e ciclo de vida.",
          "Gerenciei estados para catálogo, conteúdo em destaque e comportamento do header.",
          "Implementei interações de UI com JavaScript e estilização com CSS.",
          "Publiquei na Vercel e planejei melhorias futuras como telas de usuário e páginas de detalhe.",
        ],
      },
      proximoPasso: {
        description:
          "Atuei no desenvolvimento e manutenção de um sistema ERP empresarial, projetado para otimizar processos internos. Contribuí em uma plataforma centralizada com foco em eficiência operacional, automação e usabilidade para diferentes tipos de negócios.",
        bullets: [
          "Desenvolvimento de funcionalidades do ERP para rotinas de gestão.",
          "Integração de módulos financeiros, estoque e vendas.",
          "Implementação de funcionalidades de backend usando PHP e MySQL.",
          "Foco em escalabilidade, performance e código sustentável.",
          "Contribuição para uma solução prática e intuitiva para o dia a dia da operação.",
        ],
      },
    },

    // Contact
    contactTitle: "Entre em contato",
    contactTextLine1: "Tem um projeto mobile ou web em mente?",
    contactTextLine2: "Vamos tirar do papel e transformar em realidade.",
    contactPlaceholderName: "Seu nome",
    contactPlaceholderEmail: "Seu e-mail",
    contactPlaceholderSubject: "Assunto",
    contactPlaceholderMessage: "Sua mensagem",
    contactBtn: "Fale comigo",
    contactSending: "Enviando...",
    contactSuccess:
      "Mensagem enviada com sucesso, logo entraremos em contato !",
    contactErrorPrefix: "Erro",
    contactError: "Falha ao enviar. Tente novamente.",
    footerText: "© 2026 Alfredo Mello | Todos os direitos reservados.",
  },
};

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language?.toLowerCase() || "en";
    setLang(userLang.startsWith("pt") ? "pt" : "en");
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div>

      <Navbar t={t} />
      <About t={t} lang={lang} />
      <Projects t={t} />
      <Contact t={t} />
    </div>
  );
}

export default App;

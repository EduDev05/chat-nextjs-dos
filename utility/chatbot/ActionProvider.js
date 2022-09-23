// import { getProgrammingJoke } from 'random-joke-getter';
const intro =
  "I'm a Computer Science student at UCLA and an aspiring software engineer. What do you want to know about me?";
const experience =
  'I worked as Software Engineer intern at Paramount, Done. and TechFin.AI.';
const projects =
  "I'm love spotting problems from people around me and building solutions that make their lives easier.";
const skills =
  "I have three years of experience in fullstack development. I'm a MERN stack lover (MongoDB, Express, React, Node.js).";
const blogs = 'Check out my blogs on Dev Community and Medium!';

//menu1
const menu1 = "Da click en alguna de estas consultas frecuentes o escribe tu duda abajo 😉";
const menu1op1="Recuperacíon de contraseña";
const menu1op2="¿Cómo navegar en el portal?";
const menu1op3="¿Cómo editar mi perfil?";
//menu2
const menu2 = "Da click en alguna de estas consultas frecuentes o escribe tu duda abajo 😉";
const menu2op1="¿Comó realizar un pedido?";
const menu2op2="Rastrear pedido";
const menu2op3="No ha llegado mi pedido";
const regresarmenu="Regresar al menu principal";
//menu3
const menu3 = "Pagos";
const menu3op1="¿Comó realizar un pedido?";
const menu3op2="Rastrear pedido";
const menu3op3="No ha llegado mi pedido";
//menu4
const menu4 = "Facturacion";
const menu4op1="¿Comó realizar un pedido?";
const menu4op2="Rastrear pedido";
const menu4op3="No ha llegado mi pedido";
//menu5
const menu5 = "Cambios y devoluciones";
const menu5op1="¿Comó realizar un pedido?";
const menu5op2="Rastrear pedido";
const menu5op3="No ha llegado mi pedido";
//menu6
const menu6 = "Servicios";
const menu6op1="¿Comó realizar un pedido?";
const menu6op2="Rastrear pedido";
const menu6op3="No ha llegado mi pedido";


class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      'AI chat in development...'
    );
    this.updateChatbotState(greetingMessage);
  }
  //menu1 opciones
  handleMenu1() {
    const message = this.createChatBotMessage(menu1, {
      widget: 'menu1',
    });
    this.updateChatbotState(message);
  }
  handleMenu1Op1() {
    const message = this.createChatBotMessage(menu1op1, {
      widget: 'menu1op1',
    });
    this.updateChatbotState(message);
  }
  handleMenu1Op2() {
    const message = this.createChatBotMessage(menu1op2, {
      widget: 'menu1op2',
    });
    this.updateChatbotState(message);
  }
  handleMenu1Op3() {
    const message = this.createChatBotMessage(menu1op3, {
      widget: 'menu1po3',
    });
    this.updateChatbotState(message);
  }
  //menu2 opciones
  handleMenu2() {
    const message = this.createChatBotMessage( menu2, {
      widget: 'menu2',
    });
    this.updateChatbotState(message);
  }
  handleMenu2Op1() {
    const message = this.createChatBotMessage(menu2op1, {
      widget: 'menu2op1',
    });
    this.updateChatbotState(message);
  }
  handleMenu2Op2() {
    const message = this.createChatBotMessage(menu2op2, {
      widget: 'menu2op2',
    });
    this.updateChatbotState(message);
  }
  handleMenu2Op3() {
    const message = this.createChatBotMessage(menu2op3, {
      widget: 'menu2po3',
    });
    this.updateChatbotState(message);
  }
  //menu3 opciones
  handleMenu3() {
    const message = this.createChatBotMessage(menu3, {
      widget: 'menu3',
    });
    this.updateChatbotState(message);
  }
 handleMenu3Op1() {
      const message = this.createChatBotMessage(menu3op1, {
        widget: 'menu3op1',
      });
      this.updateChatbotState(message);
  }
  handleMenu3Op2() {
      const message = this.createChatBotMessage(menu3op2, {
        widget: 'menu3op2',
      });
      this.updateChatbotState(message);
  }
  handleMenu3Op3() {
      const message = this.createChatBotMessage(menu3op3, {
        widget: 'menu3po3',
      });
      this.updateChatbotState(message);
  }
  //menu4 opciones
  handleMenu4() {
    const message = this.createChatBotMessage(menu4, {
      widget: 'menu4',
    });
    this.updateChatbotState(message);
  }
  handleMenu4Op1() {
    const message = this.createChatBotMessage(menu4op1, {
      widget: 'menu4op1',
    });
    this.updateChatbotState(message);
  }
  handleMenu4Op2() {
    const message = this.createChatBotMessage(menu4op2, {
      widget: 'menu4op2',
    });
    this.updateChatbotState(message);
  }
  handleMenu4Op3() {
    const message = this.createChatBotMessage(menu4op3, {
      widget: 'menu4po3',
    });
    this.updateChatbotState(message);
  }
  //menu5 opciones
  handleMenu5() {
    const message = this.createChatBotMessage(menu5, {
      widget: 'menu5',
    });
    this.updateChatbotState(message);
  }
  handleMenu5Op1() {
    const message = this.createChatBotMessage(menu5op1, {
      widget: 'menu5op1',
    });
    this.updateChatbotState(message);
  }
  handleMenu5Op2() {
    const message = this.createChatBotMessage(menu5op2, {
      widget: 'menu5op2',
    });
    this.updateChatbotState(message);
  }
  handleMenu5Op3() {
    const message = this.createChatBotMessage(menu5op3, {
      widget: 'menu5po3',
    });
    this.updateChatbotState(message);
  }
  //menu6 opciones
  handleMenu6() {
    const message = this.createChatBotMessage(menu6, {
      widget: 'menu6',
    });
    this.updateChatbotState(message);
  }
  handleMenu6Op1() {
    const message = this.createChatBotMessage(menu6op1, {
      widget: 'menu6op1',
    });
    this.updateChatbotState(message);
  }
  handleMenu6Op2() {
    const message = this.createChatBotMessage(menu6op2, {
      widget: 'menu6op2',
    });
    this.updateChatbotState(message);
  }
  handleMenu6Op3() {
    const message = this.createChatBotMessage(menu6op3, {
      widget: 'menu6po3',
    });
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      { widget: 'personalOptions' }
    );
    this.updateChatbotState(message);
  }

  handleExperience() {
    const message = this.createChatBotMessage(experience, {
      widget: 'experienceOptions',
    });
    this.updateChatbotState(message);
  }

  handleMenuPrincipal() {
    const message = this.createChatBotMessage(regresarmenu, {
      widget: 'regresarmenu',
    });
    this.updateChatbotState(message);
  }


  handleProjects() {
    const message = this.createChatBotMessage(projects, {
      widget: 'projectsOptions',
    });
    this.updateChatbotState(message);
  }

  handleSkills() {
    const message = this.createChatBotMessage(skills, {
      widget: 'skillsOptions',
    });
    this.updateChatbotState(message);
  }

  handleBlogs() {
    const message = this.createChatBotMessage(blogs, {
      widget: 'blogsOptions',
    });
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

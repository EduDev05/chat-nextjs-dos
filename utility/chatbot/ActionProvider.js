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

const menu2 = "Soy menu 2";
const menu3 = "Soy menu 3";
const menu4 = "Soy menu 4";
const menu5 = "Soy menu 5";
const menu6 = "Soy menu 6";

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

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'personalOptions',
    });
    this.updateChatbotState(message);
  }

  handleMenu2() {
    const message = this.createChatBotMessage( menu2, {
      widget: 'menu2',
    });
    this.updateChatbotState(message);
  }

  handleMenu3() {
    const message = this.createChatBotMessage(menu3, {
      widget: 'menu3',
    });
    this.updateChatbotState(message);
  }

  handleMenu4() {
    const message = this.createChatBotMessage(menu4, {
      widget: 'menu4',
    });
    this.updateChatbotState(message);
  }

  handleMenu5() {
    const message = this.createChatBotMessage(menu5, {
      widget: 'menu5',
    });
    this.updateChatbotState(message);
  }

  handleMenu6() {
    const message = this.createChatBotMessage(menu6, {
      widget: 'menu6',
    });
    this.updateChatbotState(message);
  }
 


  // async handleBadMood() {
  //   const jokeData = await (
  //     await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  //   ).json();
  //   const message = this.createChatBotMessage(
  //     `Let me tell you a joke: ${jokeData.joke}`,
  //     {
  //       widget: 'jokeOptions',
  //     }
  //   );
  //   this.updateChatbotState(message);
  // }

  // async handleBadMoodAgain() {
  //   const jokeData = await (
  //     await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  //   ).json();
  //   const message = this.createChatBotMessage(
  //     `Here's another one: ${jokeData.joke}`,
  //     {
  //       widget: 'jokeOptions',
  //     }
  //   );
  //   this.updateChatbotState(message);
  // }

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

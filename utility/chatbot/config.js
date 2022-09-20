import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
import ExperienceCards from '../../components/organisms/ExperienceCards';
import ProjectCards from '../../components/organisms/ProjectCards';
import SkillCards from '../../components/organisms/SkillCards';
import BlogCards from '../../components/organisms/BlogCards';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Menu1',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Pedidos',
      handler: () => actionProvider.handleMenu2(),
      id: 2,
    },
    {
      text: 'Pagos',
      handler: () => actionProvider.handleMenu3(),
      id: 2,
    },
    {
      text: 'Facturacion',
      handler: () => actionProvider.handleMenu4(),
      id: 2,
    },
    {
      text: 'Cambios y devoluciones',
      handler: () => actionProvider.handleMenu5(),
      id: 2,
    },
    {
      text: 'Servicios',
      handler: () => actionProvider.handleMenu6(),
      id: 2,
    },
  ];
};

// const getJokeOptions = (actionProvider) => {
//   return [
//     {
//       text: "LOL that's funny",
//       handler: () => actionProvider.handleGoodMoodFinally(),
//       id: 1,
//     },
//     {
//       text: 'Tell me another one',
//       handler: () => actionProvider.handleBadMoodAgain(),
//       id: 2,
//     },
//   ];
// };

const getPersonalOptions = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const getMenu2Options = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const getMenu3Options = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const getMenu4Options = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const getMenu5Options = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const getMenu6Options = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const config = {
  botName: 'TEC Bot',
  initialMessages: [
    createChatBotMessage(
      "Hola soy TECbot, ¿en qué te puedo ayudar?",
      {
        widget: 'moodOptions',
      }
    ),
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    // {
    //   widgetName: 'jokeOptions',
    //   widgetFunc: ({ actionProvider }) => (
    //     <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
    //   ),
    // },
    {
      widgetName: 'personalOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
    {
      widgetName: 'menu2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu2Options}
        />
      ),
    },
    {
      widgetName: 'menu3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu3Options}
        />
      ),
    },
    {
      widgetName: 'menu4',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu4Options}
        />
      ),
    },
    {
      widgetName: 'menu5',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu5Options}
        />
      ),
    },
    {
      widgetName: 'menu6',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu6Options}
        />
      ),
    },
    {
      widgetName: 'experienceOptions',
      widgetFunc: () => <ExperienceCards />,
    },
    {
      widgetName: 'projectsOptions',
      widgetFunc: () => <ProjectCards />,
    },
    {
      widgetName: 'skillsOptions',
      widgetFunc: () => <SkillCards />,
    },
    {
      widgetName: 'blogsOptions',
      widgetFunc: () => <BlogCards />,
    },
  ],
};

export default config;

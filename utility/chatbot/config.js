import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
//import ExperienceCards from '../../components/organisms/ExperienceCards';
//import ProjectCards from '../../components/organisms/ProjectCards';
//import SkillCards from '../../components/organisms/SkillCards';
//import BlogCards from '../../components/organisms/BlogCards';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Navegación Market Tec 🖥️',
      handler: () => actionProvider.handleMenu1(),
      id: 1,
    },
    {
      text: 'Pedidos 🛒',
      handler: () => actionProvider.handleMenu2(),
      id: 2,
    },
    {
      text: 'Pagos 💳',
      handler: () => actionProvider.handleMenu3(),
      id: 3,
    },
    {
      text: 'Facturación 📝',
      handler: () => actionProvider.handleMenu4(),
      id: 4,
    },
    {
      text: 'Cambios y Devoluciones 📦',
      handler: () => actionProvider.handleMenu5(),
      id: 5,
    },
    {
      text: 'Servicios 🚌',
      handler: () => actionProvider.handleMenu6(),
      id: 6,
    },
  ];
};

// const getPersonalOptions = (actionProvider) => {
//   return [
//     {
//       text: 'Experience',
//       handler: () => actionProvider.handleExperience(),
//       id: 1,
//     },
//     {
//       text: 'Projects',
//       handler: () => actionProvider.handleProjects(),
//       id: 2,
//     },
//     {
//       text: 'Skills',
//       handler: () => actionProvider.handleSkills(),
//       id: 3,
//     },
//     {
//       text: 'Blogs',
//       handler: () => actionProvider.handleBlogs(),
//       id: 4,
//     },
//   ];
// };
//Menu1
const getMenu1Options = (actionProvider) => {
  return [
    {
      text: 'Recuperacíon de contraseña',
      handler: () => actionProvider.handleMenu1Op1(),
      id: 1,
    },
    {
      text: '¿Cómo navegar en el portal?',
      handler: () => actionProvider.handleMenu1Op2(),
      id: 2,
    },
    {
      text: '¿Cómo editar mi perfil?',
      handler: () => actionProvider.handleMenu1Op3(),
      id: 3,
    },
    {
      text: 'Regresar al menu princial',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 4,
    },

  ];
};
const getMenu1Op1 = (actionProvider) => {
  return [
    {
      text: '¡Comprar en Market Tec es muy fácil! 👇\nBusca tus productos y/o servicios\n'+
      'Agrégalos a un carrito de compra dando clic en Agregar al carrito 🛒\n'+
      'Una vez que termines, ve a tu carrito en la parte superior derecha y da clic en Cerrar pedido\n'+
      'Revisa que tu pedido esté correcto y da clic en Continuar\n'+
      'Si eres nuevo usuario, llena los datos de contacto 👤\n'+
      'Captura tu dirección de envío\n'+
      'Elige método de pago y da clic en Comprar ahora 💳\n'+
      '¡Listo! Podrás revisar tu pedido en la sección de Mis Pedidos',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu1Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu1Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
//Menu2
const getMenu2Options = (actionProvider) => {
  return [
    {
      text: '¿Comó realizar un pedido?',
      handler: () => actionProvider.handleMenu2Op1(),
      id: 1,
    },
    {
      text: 'Rastrear pedido',
      handler: () => actionProvider.handleMenu2Op2(),
      id: 2,
    },
    {
      text: 'No ha llegado mi pedido',
      handler: () => actionProvider.handleMenu2Op3(),
      id: 3,
    },
    {
      text: 'Regresar al menu princial',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 4,
    },

  ];
};
const getMenu2Op1 = (actionProvider) => {
  return [
    {
      text: '¡Comprar en Market Tec es muy fácil! 👇\nBusca tus productos y/o servicios\n'+
      'Agrégalos a un carrito de compra dando clic en Agregar al carrito 🛒\n'+
      'Una vez que termines, ve a tu carrito en la parte superior derecha y da clic en Cerrar pedido\n'+
      'Revisa que tu pedido esté correcto y da clic en Continuar\n'+
      'Si eres nuevo usuario, llena los datos de contacto 👤\n'+
      'Captura tu dirección de envío\n'+
      'Elige método de pago y da clic en Comprar ahora 💳\n'+
      '¡Listo! Podrás revisar tu pedido en la sección de Mis Pedidos',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu2Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu2Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
//Menu3
const getMenu3Options = (actionProvider) => {
  return [
    {
      text: 'Formas de pago disponible',
      handler: () => actionProvider.handleMenu3Op1(),
      id: 1,
    },
    {
      text: 'Problemas al pagar',
      handler: () => actionProvider.handleMenu3Op2(),
      id: 2,
    },
    {
      text: '¿Como validar un pago?',
      handler: () => actionProvider.handleMenu3Op3(),
      id: 3,
    },
    {
      text: 'Regresar al menu princial',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 4,
    },
  ];
};
const getMenu3Op1 = (actionProvider) => {
  return [
    {
      text: 'Por el momento estas son las formas de pago que estan disponibles:\n'+
        'Tarjetas de Crédito o Débito Visa, MasterCard, American Express y Carnet 💳\n'+
        'PayPaln\n'+
        'Ficha de depósito para pago en ventanilla bancaria 💰\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex, Santander y HSBC\n'+
        'Banca electrónica 🖥️\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex y Santander\n'+
        'Los estudiantes de Profesional y Posgrado tienen la opción de cargo en Estado de Cuenta',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },
  ];
};
const getMenu3Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu3Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};

//menu 4
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
const getMenu4Op1 = (actionProvider) => {
  return [
    {
      text: 'Por el momento estas son las formas de pago que estan disponibles:\n'+
        'Tarjetas de Crédito o Débito Visa, MasterCard, American Express y Carnet 💳\n'+
        'PayPaln\n'+
        'Ficha de depósito para pago en ventanilla bancaria 💰\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex, Santander y HSBC\n'+
        'Banca electrónica 🖥️\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex y Santander\n'+
        'Los estudiantes de Profesional y Posgrado tienen la opción de cargo en Estado de Cuenta',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },
  ];
};
const getMenu4Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu4Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
//menu 5
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
const getMenu5Op1 = (actionProvider) => {
  return [
    {
      text: 'Por el momento estas son las formas de pago que estan disponibles:\n'+
        'Tarjetas de Crédito o Débito Visa, MasterCard, American Express y Carnet 💳\n'+
        'PayPaln\n'+
        'Ficha de depósito para pago en ventanilla bancaria 💰\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex, Santander y HSBC\n'+
        'Banca electrónica 🖥️\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex y Santander\n'+
        'Los estudiantes de Profesional y Posgrado tienen la opción de cargo en Estado de Cuenta',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },
  ];
};
const getMenu5Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu5Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
//menu6
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
const getMenu6Op1 = (actionProvider) => {
  return [
    {
      text: 'Por el momento estas son las formas de pago que estan disponibles:\n'+
        'Tarjetas de Crédito o Débito Visa, MasterCard, American Express y Carnet 💳\n'+
        'PayPaln\n'+
        'Ficha de depósito para pago en ventanilla bancaria 💰\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex, Santander y HSBC\n'+
        'Banca electrónica 🖥️\n'+
        'Bancos participantes: Bancomer, Banorte, Banamex y Santander\n'+
        'Los estudiantes de Profesional y Posgrado tienen la opción de cargo en Estado de Cuenta',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },
  ];
};
const getMenu6Op2 = (actionProvider) => {
  return [
    {
      text: 'Para poder dar seguimiento a tu pedido únicamente necesitas el número\n'+ 
      'de guía para rastrearlo directamente en la página de la paquetería que se te indique. 🚚',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};
const getMenu6Op3 = (actionProvider) => {
  return [
    {
      text: 'Si consideras que tu pedido ya tardó demasiado, te recomiendo que te pongas\n'+ 
      'en contacto con el equipo de TEC Services a través del correo TECservices@servicios.tec.mx\n'+ 
      'para que puedan apoyarte a rastrearlo. 📦',
      handler: () => actionProvider.handleMenuPrincipal(),
      id: 1,
    },

  ];
};

//Configuracion del Boot
const config = {
  botName: 'TEC Bot',
  initialMessages: [
    createChatBotMessage(
      "Hola soy TECbot, ¿en qué te puedo ayudar?",
      {
        widget: 'moodOptions',
        delay: 1000,
      }
    ),
  ],
  // Menu principal
  widgets: [
    {
      widgetName: 'moodOptions',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    //menu1
    {
      widgetName: 'menu1',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu1Options}
        />
      ),
    },
    {
      widgetName: 'menu1op1',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu1Op1}
        />
      ),
    },
    {
      widgetName: 'menu1op2',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu1Op2}
        />
      ),
    },
    {
      widgetName: 'menu1op3',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu1Op3}
        />
      ),
    },
    //menu2
    {
      widgetName: 'menu2',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu2Options}
        />
      ),
    },
    {
      widgetName: 'menu2op1',
      delay: 1000,
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu2Op1}
        />
      ),
    },
    {
      widgetName: 'menu2op2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu2Op2}
        />
      ),
    },
    {
      widgetName: 'menu2op3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu2Op3}
        />
      ),
    },
    //menu3
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
      widgetName: 'menu3op1',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu3Op1}
        />
      ),
    },
    {
      widgetName: 'menu3op2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu3Op2}
        />
      ),
    },
    {
      widgetName: 'menu3op3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu3Op3}
        />
      ),
    },
    //menu4
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
      widgetName: 'menu4op1',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu4Op1}
        />
      ),
    },
    {
      widgetName: 'menu4op2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu4Op2}
        />
      ),
    },
    {
      widgetName: 'menu4op3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu4Op3}
        />
      ),
    },
    //Menu5
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
      widgetName: 'menu5op1',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu5Op1}
        />
      ),
    },
    {
      widgetName: 'menu5op2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu5Op2}
        />
      ),
    },
    {
      widgetName: 'menu5op3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu5Op3}
        />
      ),
    },
    //Menu6
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
      widgetName: 'menu6op1',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu6Op1}
        />
      ),
    },
    {
      widgetName: 'menu6op2',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu6Op2}
        />
      ),
    },
    {
      widgetName: 'menu6op3',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMenu6Op3}
        />
      ),
    },
    //regresarmenu
    {
      widgetName: 'regresarmenu',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getMoodOptions}
        />
      ),
    },
    
  ],
};

export default config;

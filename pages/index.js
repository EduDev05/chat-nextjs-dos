import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Chatbot from 'react-chatbot-kit';
import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';
import LinksBar from '../components/layouts/LinksBar';

const WebHome = () => {
  return (
    <>
      <div className={styles.links}>
        <LinksBar />
      </div>
      <Chatbot
        className={styles.floatingchatstate}
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </>
  );
};

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TEC BOT 1.0</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

     <WebHome />

    </div>
  )
}

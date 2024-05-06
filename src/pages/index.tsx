import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Heading from '@theme/Heading';
import { useEffect, useLayoutEffect, useState } from 'react';
import { PhotoNamePlayer } from '../components/PhotoNamePlayer';

//todo: loader
const fetchPlayerList = async () => {
  try {
    const response = await fetch("https://api.mcsrvstat.us/3/mc.hardshard.ru");
    if (!response.ok) {
      throw new Error("Error in request or response.");
    }
    const data = await response.json();
    return [data.players.online, data.players.max, data.players.list] || []; // Возвращаем массив игроков или пустой массив, если данные не найдены
  } catch (error) {
    console.error("Error:", error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};

const PlayersList = () => {
  const [playersList, setPlayersList] = useState([]);
  const [online, setOnline] = useState<number>(0);
  const [maxPlayers, setMaxPlayers] = useState<number>(0);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const playerList = await fetchPlayerList();
      setOnline(playerList[0]);
      setMaxPlayers(playerList[1]);
      setPlayersList(playerList[2]);
    };
    fetchData();
  }, []);
  return (
    <div className="row">
      <div className="col col--8 col--offset-2 text--center">
        <h2>Сейчас на сервере {online-1} / {maxPlayers}</h2>
        <div style={{alignContent: "center"}}>
          {
            playersList.map((player, index) => (
              <PhotoNamePlayer nickname={player.name} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

function HomepageHeader() {
const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={"row"}
          style={{gap: 24, justifyContent: "center"}}
        >
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://docs.google.com/forms/d/e/1FAIpQLSd439lToKD3iWyeyhokr8FDmnviJtvespjAiwM_0_tl2tLbHw/viewform"
            >
              Подать заявку
            </Link>
          </div>
          <button 
            className="button button--outline button--secondary button--lg"
            onClick={() => {navigator.clipboard.writeText("mc.hardshard.ru")}}
          >
            <img src="/img/icons/copy.svg" style={{verticalAlign: "middle"}}></img>
            <span style={{marginLeft: 8}}>mc.hardshard.ru</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
    title="Приватный Vanila+ сервер"
    description="Ламповый Vanilla+ бесплатный сервер без приватов, с улучшенным геймплеем и элементами ролевой игры.">
      <HomepageHeader />
      <main>
        <div className="container">
          <PlayersList />
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}



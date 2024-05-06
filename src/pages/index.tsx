import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { PlayersList } from '../components/PlayersListComponent';

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
      description="Ламповый Vanilla+ бесплатный сервер без приватов, с улучшенным геймплеем и элементами ролевой игры."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <PlayersList />
        </div>
      </main>
    </Layout>
  );
}



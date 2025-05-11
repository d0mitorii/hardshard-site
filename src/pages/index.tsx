import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { PlayersList } from "../components/PlayersListComponent";
import { SplashComponent } from "../components/SplashComponent";
import { CopyButton } from "../components/CopyButton";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero padding-bottom--xl", styles.heroBanner)}>
      <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
        <source src="/videos/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={"row"} style={{ gap: 24, justifyContent: "center" }}>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://docs.google.com/forms/d/e/1FAIpQLSd439lToKD3iWyeyhokr8FDmnviJtvespjAiwM_0_tl2tLbHw/viewform"
            >
              Подать заявку
            </Link>
          </div>
          <CopyButton />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Приватный Vanila+ сервер"
      description="Ламповый бесплатный Vanilla+ сервер без приватов, с улучшенным геймплеем и элементами ролевой игры."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <PlayersList />
          <SplashComponent />
        </div>
      </main>
    </Layout>
  );
}

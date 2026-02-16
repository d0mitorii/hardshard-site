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
    <header className={clsx("padding-bottom--lg", styles.heroBanner)}>
      <div className="container" style={{ position: "relative" }}>
        <div
          className={styles.splashDesktop}
          style={{
            position: "absolute",
            left: "78%",
            top: "45%",
            transform: "translate(-50%, -40%) rotate(-20deg)",
            zIndex: 2,
            pointerEvents: "none",
            width: "min(750px, 80vw)",
          }}
        >
          <SplashComponent />
        </div>
        <Heading as="h1" className={styles.hero__title_custom}>
          <img
            src="/img/hardshard-logo-full-valentines-style.png"
            alt="HardShard Logo"
            draggable="false"
            className={styles.heroLogo}
          />
        </Heading>
        <div className="row margin-top--lg">
          <div className="col col--8 col--offset-2">
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
        <div className={"row"} style={{ marginTop: 20, gap: 24, justifyContent: "center" }}>
          <Link
            className={`button button--lg button--primary ${styles.eventBadge}`}
            to="/docs/mechanics/morganas-triumph"
          >
            💖 Текущий ивент: «Торжество Морганы»
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <video autoPlay muted loop playsInline className={styles.backgroundMedia}>
        <source src="/videos/backgound-valentine-day.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.backgroundOverlayBottom}></div>
      <Layout
        title="Приватный Vanila+ сервер"
        description="Ламповый бесплатный Vanilla+ сервер без приватов, с улучшенным геймплеем и элементами ролевой игры."
      >
        <HomepageHeader />
        <main>
          <div className="container">
            <PlayersList />
            <div className={styles.splashMobile}>
              <SplashComponent />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

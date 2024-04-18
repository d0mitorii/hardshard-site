import Layout from "@theme/Layout";
import Heading from '@theme/Heading';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="О проекте"
      description="">
      <main>
        <div className="container">
          <Heading as="h1" className="hero__title center">
            О проекте
          </Heading>
          <p>HardShard — Vanilla+** Minecraft-сервер, построенный на принципах честной и комфортной игры, взаимодействия с сообществом и участия в ролевой игре.</p>
          <p>Наш сервер лишен платных привилегий, приватов и дающих излишнее преимущество команд вроде <code>/tpa</code> и <code>/home</code>.</p>
          <p>Сервер поддерживается как со стороны сообщества, члены которого проводят множество ивентов, так и со стороны админстрации, которая старается радовать игроков нововведениями.</p>
        </div>
      </main>
    </Layout>
  );
}
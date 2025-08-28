import { useEffect, useState } from "react";
import { SPLASHES } from "../splashes";

export const SplashComponent = () => {
  const [splash, setSplash] = useState<string | null>(null);

  useEffect(() => {
    // Тестовый вариант: случайный сплеш при каждом обновлении страницы
    const randomIndex = Math.floor(Math.random() * SPLASHES.length);
    setSplash(SPLASHES[randomIndex]);

    // Оригинальный вариант (по дате, для продакшена)
    /*
    const currentDate = new Date().toDateString();
    const seed = currentDate
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % SPLASHES.length;
    const randomSplash = SPLASHES[randomIndex];
    setSplash(randomSplash);
    */
  }, []);

  return (
    <div
      className="margin-bottom--lg col col--6 col--offset-3"
      style={{ alignContent: "center" }}
    >
      <p
        className="text--warning splash-text"
        style={{
          fontSize: splash
            ? `${Math.max(2.2 - splash.length * 0.04, 1.1)}rem`
            : "1.7rem",
        }}
      >
        {splash ? splash : "Загружаю..."}
      </p>
    </div>
  );
};

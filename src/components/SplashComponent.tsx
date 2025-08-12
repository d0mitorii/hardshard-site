import { useEffect, useState } from "react";
import { SPLASHES } from "../splashes";

export const SplashComponent = () => {
  const [splash, setSplash] = useState<string | null>(null);

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const seed = currentDate.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % SPLASHES.length;
    const randomSplash = SPLASHES[randomIndex];
    setSplash(randomSplash);
  }, []);

  return (
    <div className="margin-bottom--lg col col--6 col--offset-3" style={{ alignContent: "center" }}>
      <div className="splash-bg">
        <p className="text--warning splash-text">
          {splash ? splash : "Загружаю..."}
        </p>
      </div>
    </div>
  );
};
import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

type TelegramPostProps = {
  channel: string;
  postId: string | number;
  width?: string | number;
};

const TelegramPost: React.FC<TelegramPostProps> = ({
  channel,
  postId,
  width = "100%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!containerRef.current) return;

    // очищаем контейнер
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;

    script.setAttribute("data-telegram-post", `${channel}/${postId}`);
    script.setAttribute(
      "data-width",
      typeof width === "number" ? `${width}` : width
    );
    script.setAttribute("data-userpic", "true");

    // 🔥 ВАЖНО: тёмная тема
    if (colorMode === "dark") {
      script.setAttribute("data-dark", "1");
    }

    containerRef.current.appendChild(script);
  }, [channel, postId, width, colorMode]); // <-- реагирует на смену темы

  return <div ref={containerRef} />;
};

export default TelegramPost;
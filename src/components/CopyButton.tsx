import { useState } from "react";

export const CopyButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mc.hardshard.ru");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Скрыть сообщение через 2 секунды
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        className="button button--outline button--secondary button--lg"
        onClick={handleCopy}
      >
        mc.hardshard.ru
      </button>
      {showAlert && (
        <div className="custom-alert padding--md">
          <span className="text--bold">IP скопирован</span>
        </div>
      )}
    </div>
  );
};
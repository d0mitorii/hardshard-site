import React, { useEffect, useState } from "react";

type Props = {
  id?: string;
  title?: React.ReactNode;
  level?: number;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  children?: React.ReactNode;
};

const RuleCollapse: React.FC<Props> = ({
  id,
  title,
  level = 3,
  defaultOpen = false,
  open,
  onToggle,
  children,
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);

  const isOpen = open !== undefined ? open : internalOpen;

  useEffect(() => {
    const handleExpandAll = () => {
      if (!isOpen) {
        setInternalOpen(true);
        onToggle?.(true);
      }
    };

    const handleCollapseAll = () => {
      if (defaultOpen && isOpen) {
        return;
      }

      if (isOpen) {
        setInternalOpen(false);
        onToggle?.(false);
      }
    };

    window.addEventListener("rule-collapse:expand-all", handleExpandAll);
    window.addEventListener("rule-collapse:collapse-all", handleCollapseAll);

    return () => {
      window.removeEventListener("rule-collapse:expand-all", handleExpandAll);
      window.removeEventListener("rule-collapse:collapse-all", handleCollapseAll);
    };
  }, [defaultOpen, isOpen, onToggle]);

  const handleToggle = () => {
    const next = !isOpen;
    onToggle ? onToggle(next) : setInternalOpen(next);
  };

  const Tag = `h${Math.min(6, Math.max(1, level))}` as keyof JSX.IntrinsicElements;

  return (
    <div className="rule-collapse">
      <Tag id={id} className="anchor rule-collapse__heading">
        <button
          type="button"
          className="rule-collapse__summary"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span className="rule-collapse__title">{title}</span>
          <span
            className={`rule-collapse__chevron ${isOpen ? "is-open" : ""}`}
            aria-hidden
          >
            ▸
          </span>
        </button>
      </Tag>

      <div
        className={`rule-collapse__content ${isOpen ? "is-open" : ""}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default RuleCollapse;

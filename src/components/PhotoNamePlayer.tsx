import { useEffect, useRef, useState } from "react";

const SkinHeadCanvas = ({ src, alt, onError }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, 8, 8);
      ctx.drawImage(img, 8, 8, 8, 8, 0, 0, 8, 8);   // лицо
      ctx.drawImage(img, 40, 8, 8, 8, 0, 0, 8, 8);  // второй слой (шапка)
    };
    img.onerror = () => !cancelled && onError?.();
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      width={8}
      height={8}
      role="img"
      aria-label={alt}
      style={{
        verticalAlign: "top",
        width: "1.75rem",
        height: "1.75rem",
        imageRendering: "pixelated",
      }}
    />
  );
};

export const PhotoNamePlayer = (props) => {
  const [fileFailed, setFileFailed] = useState(false);

  const remoteUrl = `https://mc-heads.net/avatar/${props.skin ? props.skin : props.nickname}`;
  const useFile = props.skinFile && !fileFailed;
  const alt = `Голова игрока ${props.nickname}`;

  return (
    <span
      className="padding--xs pills__item"
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "1rem",
        fontWeight: "var(--ifm-font-weight-semibold)",
        color: props.color,
        ...props.style
      }}
    >
      <span
        style={{
          minWidth: "1.75rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
        }}
      >
        {useFile ? (
          <SkinHeadCanvas
            src={props.skinFile}
            alt={alt}
            onError={() => setFileFailed(true)}
          />
        ) : (
          <img
            src={remoteUrl}
            alt={alt}
            style={{
              verticalAlign: "top",
              width: "1.75rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
      </span>
      {
        props.nickname && `\u00A0${props.nickname}`
      }
    </span>
  );
}

export class Item {
  static lg = (props) => <ItemTextureNameComponent size="3rem" fontSize="1.25rem" {...props} />;
  static sm = (props) => <ItemTextureNameComponent size="1.75rem" fontSize="1rem" {...props} />;
}

export const ItemTextureNameComponent = ({
  item,
  extension = ".png",
  timer = 1500,
  size,
  fontSize,
  color,
  style,
  name,
  ...props
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const items = Array.isArray(item) ? item : [item];
  const src = `/img/textures/item/${items[currentItemIndex]}${extension}`;

  useEffect(() => {
    if (items.length > 1) {
      const interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, timer);
      return () => clearInterval(interval);
    }
  }, [items, timer]);

  return (
    <span
      className="padding--xs pills__item"
      style={{
        display: "inline-flex",
        fontSize,
        alignItems: "center",
        fontWeight: "var(--ifm-font-weight-semibold)",
        color,
        ...style,
      }}
      {...props}
    >
      {items[currentItemIndex] && (
        <span
          style={{
            minWidth: size,
            overflow: "hidden",
            alignItems: "flex-start",
          }}
        >
          <img
            src={src}
            alt={`Текстура ${items[currentItemIndex]}${extension}`}
            style={{
              width: size,
              imageRendering: "pixelated",
              verticalAlign: "top",
              borderRadius: "0.25rem",
            }}
          />
        </span>
      )}
      {name && (items[currentItemIndex] ? <>&nbsp;{name}</> : name)}
    </span>
  );
};

export class Block {
  static lg = (porps) => {
    return (
      <BlockTextureNameComponent 
        size="3rem"
        fontSize="1.25rem"
        {...porps}
      />
    );
  }
  static sm = (porps) => {
    return (
      <BlockTextureNameComponent 
        size="1.75rem"
        fontSize="1rem"
        {...porps}
      />
    );
  }
}

export const BlockTextureNameComponent = ({
  item,
  extension = ".png",
  timer = 1500,
  size,
  fontSize,
  color,
  style,
  name,
  ...props
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const items = Array.isArray(item) ? item : [item];
  const src = `/img/textures/block/${items[currentItemIndex]}${extension}`;
  useEffect(() => {
    if (items.length > 1) {
      const interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, timer);
      return () => clearInterval(interval);
    }
  }, [items, timer]);
  return (
    <span
      className="padding--xs pills__item"
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize,
        fontWeight: "var(--ifm-font-weight-semibold)",
        color,
        ...style,
      }}
      {...props}
    >
      {items[currentItemIndex] && (
        <span
          style={{
            minWidth: size,
            overflow: "hidden",
            alignItems: "flex-start",
          }}
        >
        <img
          src={src}
          alt={`Текстура ${items[currentItemIndex]}${extension}`}
          style={{
            verticalAlign: "top",
            width: size,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </span>
      )}
      {name && (items[currentItemIndex] ? <>&nbsp;{name}</> : name)}
    </span>
  );
};
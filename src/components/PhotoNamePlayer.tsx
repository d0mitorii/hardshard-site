import { useEffect, useState } from "react";

export const PhotoNamePlayer = (props) => {
  const url = `https://cravatar.eu/avatar/${props.skin ? props.skin : props.nickname}/160`;
  return (
    <span
      className="padding--sm pills__item"
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
        <img
          src={url}
          alt={`Голова игрока ${props.nickname}`}
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
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
      className="padding--sm pills__item"
      style={{
        display: "inline-flex",
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
              width: size,
              imageRendering: "pixelated",
              verticalAlign: "middle",
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

export const BlockTextureNameComponent = (props) => {
  const src = `/img/textures/block/${props.item}${props.extension ? props.extension : ".webp"}`;

  return (
    <span
      className="padding--sm pills__item"
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: props.fontSize,
        fontWeight: "var(--ifm-font-weight-semibold)",
        color: props.color,
        ...props.style
      }}
    >
      <span
        style={{
          minWidth: props.size,
          borderRadius: "0.25rem",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={`Текстура ${props.item}${props.extension ? props.extension : ".webp"}`}
          style={{
            verticalAlign: "top",
            width: props.size,
            alignItems: "center",
            justifyContent: "center",
          }} />
      </span>
      {
        props.name && `\u00A0${props.name}`
      }
    </span>
  );
}
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
  static lg = (porps) => {
    return (
      <ItemTextureNameComponent 
        size="2rem"
        fontSize="1.25rem"
        {...porps}
      />
    );
  }
  static sm = (porps) => {
    return (
      <ItemTextureNameComponent 
        size="1.75rem"
        fontSize="1rem"
        {...porps}
      />
    );
  }
}

export const ItemTextureNameComponent = (props) => {
  const src = `/img/textures/item/${props.item}${props.extension ? props.extension : ".png"}`;

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
          alt={`Текстура ${props.item}${props.extension ? props.extension : ".png"}`}
          style={{
            verticalAlign: "top",
            width: props.size,
            imageRendering: "pixelated",
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
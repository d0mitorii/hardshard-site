export const PhotoNamePlayer = (props) => {
  const url = `https://cravatar.eu/avatar/${props.skin ? props.skin : props.nickname}/160`;
  return (
    <div
      className="padding--sm pills__item"
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        ...props.style
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: "0.25rem",
          overflow: "hidden",
        }}
      >
        <img
          src={url}
          alt={`Голова игрока ${props.nickname}`}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }} />
      </div>
      <p
        className="text--no-decoration"
        style={{
          margin: 0,
          fontWeight: "var(--ifm-font-weight-semibold)"
        }}
      >
        {props.nickname}
      </p>
    </div>
  );
}

export class Item {
  static lg = (porps) => {
    return (
      <ItemTextureNameComponent 
        size="3rem"
        fontSize="1.25rem"
        gap="0.75rem"
        {...porps}
      />
    );
  }
  static sm = (porps) => {
    return (
      <ItemTextureNameComponent 
        size="2rem"
        fontSize="1rem"
        gap="0.5rem"
        {...porps}
      />
    );
  }
}

export const ItemTextureNameComponent = (props) => {
  const src = `/img/textures/item/${props.item}.png`;

  return (
    <div
      className="padding--sm pills__item"
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: props.gap,
        ...props.style
      }}
    >
      <div
        style={{
          minWidth: props.size,
          height: props.size,
          borderRadius: "0.25rem",
          overflow: "hidden",
          imageRendering: "pixelated",
          boxSizing: "border-box",
        }}
      >
        <img
          src={src}
          alt={`Текстура ${props.name}`}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }} />
      </div>
      {
        props.name &&
        <p
          style={{
            margin: 0,
            fontSize: props.fontSize,
            lineHeight: props.fontSize,
            fontWeight: "var(--ifm-font-weight-semibold)",
            color: props.color,
          }}
        >
          {props.name}
        </p>
      }
    </div>
  );
}
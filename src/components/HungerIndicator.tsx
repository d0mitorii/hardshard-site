export const Hunger = (props) => {
  if (props.value > Math.round(props.value)) {
    console.log();
  }
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...props.style
      }}
    >
      <div
        style={{
          minWidth: "1.75rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
          marginRight: "0.5ram",
        }}
      >
        <img
          src="/img/textures/item/full_hunger.png"
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
        />
        <img
          src="/img/textures/item/full_hunger.png"
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
        />
      </div>
      <p
        style={{
          margin: 0,
          fontSize: props.fontSize,
          lineHeight: props.fontSize,
          fontWeight: "var(--ifm-font-weight-semibold)",
          color: props.color,
        }}
      >
        {props.value}
      </p>
    </div>
  );
}
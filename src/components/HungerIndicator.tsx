export const Hunger = (props) => {
  const value = parseFloat(props.value);
  const fullHungerCount = Math.floor(value)
  const halfHungerVisible = value - fullHungerCount >= 0.5; 
  const renderFullHunger = () => {
    const fullHungerImages = [];
    for (let i = 0; i < fullHungerCount; i++) {
      fullHungerImages.push(
        <img
          key={`full_hunger_${i}`}
          src="/img/textures/item/full_hunger.png"
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
        />
      );
    }
    return fullHungerImages;
  };
  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        gap: "0.5rem",
        margin: 0,
        fontSize: props.fontSize,
        fontWeight: "var(--ifm-font-weight-semibold)",
        color: props.color,
        ...props.style
      }}
    >
      <span
        style={{
          display: "inline",
          minWidth: "1.75rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
        }}
      >
        {halfHungerVisible && (
          <img
          src="/img/textures/item/half_hunger.png"
          style={{
            verticalAlign: "middle",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
          />
        )}
        {renderFullHunger()}
      </span>
      {props.value}
    </span>
  );
}
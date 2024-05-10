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
          alt="Текстура full_hunger"
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
        justifyContent: "center",
        margin: 0,
        fontSize: props.fontSize,
        fontWeight: "var(--ifm-font-weight-semibold)",
        color: props.color,
        ...props.style
      }}
    >
      {props.value}
      &nbsp;—&nbsp;
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
          alt="Текстура half_hunger"
          style={{
            verticalAlign: "middle",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
          />
        )}
        {renderFullHunger()}
      </span>
    </span>
  );
}
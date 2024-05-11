export const HungerSaturationIndicator = ({
  value, 
  type = "hunger",
}: {
  value: number, 
  type?: "hunger" | "saturation"
}) => {
  const fullHungerCount = Math.floor(value);
  const halfHungerVisible = value - fullHungerCount >= 0.5;
  const renderFullHunger = () => {
    const fullHungerImages = [];
    for (let i = 0; i < fullHungerCount; i++) {
      fullHungerImages.push(
        <img
          key={i}
          src={`/img/textures/item/full_${type}.png`}
          alt={`Текстура full_${type}`}
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
        fontWeight: "var(--ifm-font-weight-bold)",
      }}
    >
      {value}
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
            src={`/img/textures/item/half_${type}.png`}
            alt={`Текстура half_${type}`}
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
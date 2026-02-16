export function ImageZoom(props) {
  return (
    <>
      <div
        className="imageContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom:
            props.marginBottom || props.description
              ? props.marginBottom
              : "1.25rem",
        }}
      >
        <img
          src={props.src}
          alt={props.alt}
          style={{ maxHeight: props.maxHeight || "100%" }}
        />
      </div>
      {props.description && (
        <p className="text--center text--italic">{props.description}</p>
      )}
    </>
  );
}

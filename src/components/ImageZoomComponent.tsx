export function ImageZoom(props) {
  return (
    <div 
      className="imageContainer" 
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem"
      }}
    >
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
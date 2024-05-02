export const PhotoNamePlayer = (props) => {
  const url = `https://cravatar.eu/avatar/${props.skin ? props.skin : props.nickname}/160`;
  return (
    <div
      className="padding--sm"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...props.style}}
    >
      <div 
        className="margin-right--sm"
        style={{
          width: 24,
          height: 24,
          borderRadius: 4,
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
          }}/>
      </div>
      <p 
        style={{
          margin: 0,
        }}
      >
        {props.nickname}
      </p>
    </div>
  );
}
import { useLayoutEffect, useState } from "react";
import { PhotoNamePlayer } from "./PhotoNamePlayer";

//todo: loader
const fetchPlayerList = async () => {
  try {
    const response = await fetch("https://api.mcsrvstat.us/3/mc.hardshard.ru");
    if (!response.ok) {
      throw new Error("Error in request or response.");
    }
    const data = await response.json();
    return [data.players.online, data.players.max, data.players.list] || [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
  
export const PlayersList = () => {
  const [playersList, setPlayersList] = useState([]);
  const [online, setOnline] = useState<number>(0);
  const [maxPlayers, setMaxPlayers] = useState<number>(0);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const playerList = await fetchPlayerList();
      setOnline(playerList[0]);
      setMaxPlayers(playerList[1]);
      setPlayersList(playerList[2]);
    };
    fetchData();
  }, []);
  return (
    <div className="row margin-top--lg margin-bottom--lg">
      <div 
        className="col col--8 col--offset-2 text--center padding--lg "
        style={{
        backgroundColor: "var(--ifm-card-background-color)",
        borderRadius: "var(--ifm-card-border-radius)",
        }}
      >
        <h2>Игроков на сервере {online} / {maxPlayers}</h2>
        <div style={{alignContent: "center"}}>
          {
            playersList.map((player, index) => (
            <PhotoNamePlayer nickname={player.name} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};
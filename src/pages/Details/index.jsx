import { useState, useEffect } from "react";
import GameDetails from "../../components/GameDetails";
import { useLocation } from "react-router-dom";
import '../../App.css'
import Form from "../../components/Form";


const Game = () => {

  const [game, setGame] = useState([]);
  const [screenshots, setScreenshots] = useState([]);

  const location = useLocation();
  const gameid = location.state;

  useEffect(() => {
    async function getCard() {
      const result = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${gameid}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "4e4c14d254mshc8a046b3f04dbb1p1cbaf4jsnac0d0b8dc716",
        },
      });
      const data = await result.json();
      setGame(data);
      setScreenshots(data.screenshots);
      
    }

    getCard();
  }, []);

  return (
    <>   
    <GameDetails title={game.title} description={game.short_description} 
    thumbnail={game.thumbnail} genre={game.genre} platform={game.platform} 
    publisher={game.publisher} screenshots={screenshots} /> 
    <Form id={gameid}/>
    </>
  );
};

export default Game;

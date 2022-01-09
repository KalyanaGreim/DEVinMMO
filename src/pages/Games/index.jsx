import {useEffect, useState} from "react";
import GameCard from "../../components/GameCards";
import '../../App.css'
import Header from "../../components/Header";
import Marca from "../../components/Marca";


const Games = () => {

    useEffect(() => {
        async function getCard() {
          const result = await fetch("https://mmo-games.p.rapidapi.com/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "4e4c14d254mshc8a046b3f04dbb1p1cbaf4jsnac0d0b8dc716"
            }
        });
          const data = await result.json();
          setGames(data);
        }
    
        getCard();
    }, [])

    const [game, setGames] = useState([]);
    const [filter, setFilter] = useState([]);
    const handleChange = (event) => {
        const text = event.target.value;
        setFilter(text);
    }

    return (
        <>
        <Header/>
        <Marca/>
        <h3 className="sub-title">Todos os jogos</h3>
        <center><div className="container-search-box">
            <input type="text" className="search-box" onChange={handleChange} placeholder="Buscar..."/>
        </div></center>

        <div className="">
            
        {game.filter((item)=>{
            if(filter == ""){
                return game;
            } else if (item.title.toLowerCase().includes(filter.toLowerCase())){
                return game;
            }
        }).map((item, index) => (
            
            <div key={index}>
                <GameCard title={item.title} release_date={item.release_date} 
                description={item.short_description} thumbnail={item.thumbnail} id={item.id} 
                publisher={item.publisher} platform={item.platform} />
            </div>
        ))}
        </div>
        </>
    )
}

export default Games;
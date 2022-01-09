import { useEffect, useState} from "react";
import NewsCard from "../../components/NewsCard";
import Header from "../../components/Header";
import '../../App.css'
import Marca from "../../components/Marca";


const News = () => {

    useEffect(() => {
        async function getCard() {
          const result = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "4e4c14d254mshc8a046b3f04dbb1p1cbaf4jsnac0d0b8dc716"
            }
        })
          const data = await result.json();
          setNews(data);
        }
    
        getCard();
    }, [])

    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState([]);
    const handleChange = (event) => {
        const text = event.target.value;
        setFilter(text);
    }

   
    return (
        <>
        <Header/>      
        
        <Marca/>
        <h3 className="sub-title">Principais notícias</h3>
        <center><div className="container-search-box">
        <input type="text" className="search-box" onChange={handleChange} placeholder="Buscar..."/>
        </div></center>
        <div className="">
        {news.filter((item)=>{
            if(filter == ""){
                return news;
            } else if (item.title.toLowerCase().includes(filter.toLowerCase())){
                return news;
            }
        }).map((item) => (
            <NewsCard title={item.title} description={item.short_description} thumbnail={item.thumbnail} />
        ))}
        </div>
        </>
    )
}

export default News;
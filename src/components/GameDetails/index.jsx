import React from "react";
import "../../App.css";
import Inicio from "../Inicio";





const GameDetails = ({
  title,
  thumbnail,
  description,
  genre,
  platform,
  publisher,
  screenshots
}) => {

  return (
    <>
    <body>
      <Inicio/>
        <center>
          <div className="details-page">
            <div>
              <h2 className="title-details">{title}</h2>
              <img className="img-details" src={thumbnail}></img> <br/> 
              {screenshots.map((item)=>(<img src={item.image} className="img-item" alt={item.id}/>))}
              <p className="description-details"><b>{description}</b></p>        
              <p className="genre-platform-detail"><span>Gênero: </span>{genre}  <span>Plataforma: </span>{platform}</p>
              <p className="publisher-detail"><span>Lançado por: </span>{publisher}</p>        
            </div>
          </div>
        </center>
    </body>
    </>
  );
};

export default GameDetails;
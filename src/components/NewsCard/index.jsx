import {  useState } from "react";
import "../../App.css";


const NewsCard = ({
  title,
  thumbnail,
  description
}) => {

  return (
    <>
    <body>
    <center>
      <div className="container">
        <div className="item">
          
          <h3 className="title-cards">{title}</h3>
          <img className="img-card" src={thumbnail}></img>
          <p className="description">{description}</p>
        </div>
      </div>
    </center>
    </body>
        
    </>
  );
};

export default NewsCard;
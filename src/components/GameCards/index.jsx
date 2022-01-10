import { useNavigate } from "react-router-dom";
import "../../App.css";


const GameCard = ({
  title,
  thumbnail,
  description,
  id,
  platform,
  publisher,
  release_date
}) => {

  const navigate = useNavigate();

  const openGame = () => {
    navigate("/details", {state:id});
  }

  return (
    <body>
      <center>
        <div className="container">
          <div className="item" >              
              <img className="img-card" src={thumbnail}></img>
              <h3 className="title-cards">{title}</h3>
              <p className="description"><b>{description}</b></p>
              <p className="publisher-platform-cards">{publisher} - {platform} </p>
              <p className="date-cards">{release_date}</p>
                       
              <button onClick={openGame} className="btn-details" ><b>Ver detalhes</b></button>
          </div>
        </div>
        </center>
    </body>
 
      
        
   
  );
};

export default GameCard;
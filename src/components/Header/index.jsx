import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <>
    <div>
      <header className="component-inicio">
        <nav>            
          
          <div id="passar-mouse"><div id="mostrar">Voltar ao início</div><Link to="/"   style={{  textDecoration:'none', color:'rgb(10, 10, 10)'}}><b>←</b> </Link></div>
          
        </nav>
      </header>
      </div>
    </>
  );
};

export default Header;
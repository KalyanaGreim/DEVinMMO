import React from 'react';
import Games from './pages/Games';
import Details from './pages/Details';
import News from './pages/News';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


const Rotas = () => {
  return (    
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/games" element={<Games />}/>
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/news" element={<News />} />

      </Routes> 
  );
}
export default Rotas;
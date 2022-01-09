import { BrowserRouter} from 'react-router-dom';
import Rotas from './rotas';
import React from 'react';
import './App.css'



const App = () => {
  return (
  
    <BrowserRouter>
    <body>
      <Rotas/>
      </body>
    </BrowserRouter>
    
  );
}
export default App;

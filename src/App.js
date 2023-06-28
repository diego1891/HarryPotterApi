import React, { useState } from 'react';
import Homenavbar from './components/navbars/homenavbar';
import Home from './components/bodys/home'
import './App.scss';
import Gryffindor from './components/houses/gryffindor/gryffindor';


const App = () => {
  const [character,setCharacter] = useState([]);
  return (
    <div>
      <Homenavbar setCharacter={setCharacter}/>
      <Gryffindor character={character}/>
      <Home character={character}/>
    </div>
  );
};

export default App;
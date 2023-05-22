import React, { useState } from 'react';
import Homenavbar from './Components/navbars/homenavbar';
import Gryffindor from './Components/houses/gryffindor/gryffindor';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/bodys/home';


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
      // <BrowserRouter>
      //     <Homenavbar/>
      //   <Routes>
      //     <Route exact path="/" element={<Home/>}/>
      //     <Route exact path="/gryffindor" element={<Gryffindor/>}/>
      //   </Routes>
      // </BrowserRouter>
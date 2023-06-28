import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Homenavbar.scss"
import { fetchCharacter, fetchAllCharacters } from "../../apiService/Api";



        
const Homenavbar = ({setCharacter}) => {
/*  const navegar = useNavigate();
  const handleButtonClick=({ruta})=>{
    navegar(ruta)
  }*/
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = async () => {
      var data = await fetchAllCharacters();
      setCharacters(data);
    };
    getData();
  }, []);

  let inputValue;
  let handleEnter = async (event)=>{
    if(event.key==='Enter'){
    inputValue = event.target.value;
    let response = await fetchCharacter(inputValue);  
    console.log(response.data);
    setCharacter(response.data);    
    }
  }
  let handleClick = async ()=>{

  }
  return (
    <div className="header">
      <div className="logo">
        <img src="./hogwarts.png" alt="Hogwarts" width={120}></img>
      </div>
      <div className="searchBar">
        <input
          className = "searchBarInput"
          type="text"
          placeholder="Ingresa el personaje"
          value = {inputValue}
          onKeyDown={handleEnter}
        />

      </div>
      <div className="btns">
        <button className="Gryfbtn" /*{onClick={() =>handleButtonClick('/gryffindor')}}*/>Gryffindor</button>
        <button className="Slytbtn" onClick={handleClick}>Slytherin</button>
        <button className="Hufflbtn">Hufflepuff</button>
        <button className="Ravbtn">Ravenclaw</button>
      </div>
    </div>
  );
};

export default Homenavbar;
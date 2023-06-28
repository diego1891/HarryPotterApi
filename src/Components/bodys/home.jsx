import {personajes} from "../../assets/func"
import "./home.scss";

const Home = ({ character }) => {
  
  if (!character) {
    return <p>BIENVENIDO</p>;
  }
  return (
    <div className="contenedor">
      {character.map((character, index) => (
        <div key={character.name + index} className="columna">
          <p>{character.name}</p> 
          <div className="carta">
              <img className="imagen" src={character.image} alt=""></img>  
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;

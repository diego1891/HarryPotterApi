import { useEffect,useState } from "react";
import { fetchAllCharacters } from "../../../apiService/Api";
import {personajes} from "../../../assets/func"

const Gryffindor = ({ character }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = async () => {
      var data = await fetchAllCharacters();
      setCharacters(data);
      };
    getData();
    llenarImagenes()
  }, []);
  const llenarImagenes = async()=>{
      const nuevoArray =  characters.map((personaje) => {  console.log("enra personaje_ " + personaje);
      const foundPj = personajes.find((pj) => pj.firstname === personaje.name);
      console.log("foundPJ: "+foundPj);
      if (foundPj) {
        return {
          ...personaje,
          image: foundPj.imageUrl,
        };
      }
      return personaje;
  })
  console.log(nuevoArray);
  }
  if (!characters) {
    return <p>BIENVENIDO</p>;
  }
  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={character.image} alt=""></img>
            <div className="card-body">
              <h4 className="card-title">{character.name}</h4>
              <hr />
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gryffindor;

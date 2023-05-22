import "bootstrap/dist/css/bootstrap.css";
import { useEffect,useState } from "react";
import { fetchAllCharacters } from "../../../ApiService/Api";

const Gryffindor = ({ character }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = async () => {
      var data = await fetchAllCharacters();
      console.log(data);
      setCharacters(data);
    };
    getData();
  }, []);

  if (!characters) {
    return <p>BIENVENIDO</p>;
  }
  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={character.image} alt=""></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gryffindor;

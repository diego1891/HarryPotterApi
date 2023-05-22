import 'bootstrap/dist/css/bootstrap.css';

const Gryffindor = ({ character }) => {
    if (!character) {
      return <p>BIENVENIDO</p>;
    }
    return (
      <div className="row">
        {character.map((character,index)=>(
        <div key={index} className="col">
          <div className="card">
            <img src={character.image} alt="">

            </img>

          </div>

        </div>
        ))}
      </div>
    );
  };
  export default Gryffindor;
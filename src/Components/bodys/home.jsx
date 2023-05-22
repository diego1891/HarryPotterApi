const Home = ({ character }) => {
  if (!character) {
    return <p>BIENVENIDO</p>;
  }
  return (
    <div className="row">
      {character.map((character, index) => (
        <div key={character.name + index} className="col">
          <p>{character.name}</p>
          <div className="card">
            <img src={character.image} alt=""></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;

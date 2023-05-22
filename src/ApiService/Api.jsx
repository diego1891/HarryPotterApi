export const BASE_URL = 'https://hp-api.onrender.com/api/characters/house';
export const API_KEY = process.env.REACT_APP_APIKEY;

const fetchCharacter = async (house) => {
    const URL = `${BASE_URL}/${house}`;
    const response = await fetch(URL);
    let data = await response.json();
    return data;
  };

const fetchAllCharacters = async() => {
  const URL = "https://hp-api.onrender.com/api/characters";
  const response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  return data;
}
export{fetchCharacter, fetchAllCharacters};
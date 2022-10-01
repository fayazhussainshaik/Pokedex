import "./style.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [pokemonName, setpokemonName] = useState("");
  const [pokemonChosen, setpokemonChosen] = useState(false);
  const [pokemonInfo, setpokemonInfo] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setpokemonInfo({
          name: [pokemonName],
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name
        });
        setpokemonChosen(true);
      }
    );
  };
  return (
    <div className="app">
      <div className="titlesection">
        <h1>POKEMON APP</h1>
        <input
          type="text"
          onChange={(event) => {
            setpokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <div className="displaysection">
        {!pokemonChosen ? (
          <h1>Please Search a Pokemon</h1>
        ) : (
          <>
            <h1>{pokemonInfo.name}</h1>
            <img src={pokemonInfo.img} alt="" />
            <h3>Species:{pokemonInfo.species}</h3>
            <h3>Type:{pokemonInfo.type}</h3>
            <h3>HP:{pokemonInfo.hp}</h3>
            <h3>Attack:{pokemonInfo.attack}</h3>
            <h3>Defense:{pokemonInfo.defense}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

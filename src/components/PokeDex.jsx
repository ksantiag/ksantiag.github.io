import react, { useEffect, useState } from "react";
import axios from "axios";

const PokeDex = () => {
  const [pokemon, setPokeMon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   getPokemon();
  // }, []);

  const handleChange = (e) => {
    setPokeMon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  return (
    <div>
      <h1>Get Pokemon Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
          ></input>
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="div-table">
              <div className="div-table-body"></div>
              <div className="div-table-row">
                <div className="div-table-cell">
                  <b>Type</b>
                </div>
                <div className="div-table-cell">{pokemonType}</div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">
                  <b>Height</b>
                </div>
                <div className="div-table-cell">
                  {" "}
                  {Math.round(data.height * 3.9)}"
                </div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">
                  <b>Weight</b>
                </div>
                <div className="div-table-cell">
                  {" "}
                  {Math.round(data.weight / 4.3)} lbs
                </div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">
                  <b>Number of battles</b>
                </div>
                <div className="div-table-cell">{data.game_indices.length}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeDex;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Gif from '../components/Gif'
import "../App.scss";

export default function PokeDex() {
  const [pokemon, setPokeMon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("Pikachu");
  const [pokemonImg, setPokemonImg] = useState([]);
  const [gifData, setGifData] = useState([]);
  const [gifDataUrl, setGifDataUrl] = useState("");

  // cjUaExenXgP009WEGdQSX6aMC8o0WMQh
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      setPokemonName(res.data.name);
      setPokemonImg(res.data.sprites["front_default"]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(gifData);
  }, []);

  const fetchData = async ()=> {
    const toArray = [];
    try {
      const url = "https://api.giphy.com/v1/gifs/search";
      const results = await axios.get(url, {
        params: { api_key: "cjUaExenXgP009WEGdQSX6aMC8o0WMQh", q: pokemonName },
      });
      toArray.push(results.data);
      setGifData(toArray);
      setGifDataUrl(results.data[0].data.images.downsized_large.url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPokemon();
    fetchData();
    console.log(gifData);
  }, []);

  const renderGif = () => {
    return (
      <div>
        <img src={gifDataUrl} />
      </div>
    );
  };
  const handleChange = (e) => {
    setPokeMon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    fetchData();
  };

  return (
    <div className="test">
      <div className="pokedex-container">
        <div>
          <div>
            <div className="pm-image">
              <div className="test">
                <img className="pm-img" src={pokemonImg} />
              </div>
            </div>
            <div className="input-text">
              <span className="text">Get Pokémon Data</span>
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    style={{ fontFamily: "sans-serif" }}
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter Pokemon Name"
                  ></input>
                </label>
              </form>
            </div>
          </div>
          {pokemonData.map((data) => {
            return (
              <div className="data">
                <div>
                  <div className="data-title">
                    <b>Name</b>
                  </div>
                  <div className="capitalize">{pokemonName}</div>
                </div>
                <div>
                  <div className="data-title">
                    <b>Type</b>
                  </div>
                  <div className="">{pokemonType}</div>
                </div>
                <div className="">
                  <div className="data-title">
                    <b>Height</b>
                  </div>
                  <div className=""> {Math.round(data.height * 3.9)}"</div>
                </div>
                <div className="">
                  <div className="data-title">
                    <b>Weight</b>
                  </div>
                  <div className=""> {Math.round(data.weight / 4.3)} lbs</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="gif-container">
          {renderGif()}
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Pokemon from "../components/Pokemon";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [loadMorePokemons, setLoadMorePokemons] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemons = async () => {
    setLoading(true);
    const res = await fetch(loadMorePokemons);
    const data = await res.json();

    setLoadMorePokemons(data.next);
    getPokemonData(data.results);
    setLoading(false);
  };

  const getPokemonData = (results) => {
    results.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      setPokemons((currentList) => [...currentList, data]);
      pokemons.sort((a, b) => a.id - b.id);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {pokemons.map((pokemon, index) => {
            return (
              <Pokemon
                key={index}
                id={pokemon.id}
                image={pokemon.sprites.other.dream_world.front_default}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
              />
            );
          })}
          <button className="load-more" onClick={() => getPokemons()}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default HomePage;

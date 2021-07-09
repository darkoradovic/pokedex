import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Pokemon from "../components/Pokemon";
import { Form, Col, Row } from "react-bootstrap";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
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

  const searchPokemons = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);
  };

  const items = pokemons
    .filter((data) => {
      if (search === null) {
        return data;
      } else if (
        data.name
          .toLowerCase()
          .includes(search.toLowerCase().replace(/\s+/g, ""))
      ) {
        return data;
      }
    })
    .map((pokemon, index) => {
      return (
        <Pokemon
          key={index}
          id={pokemon.id}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        />
      );
    });

  return (
    <>
      <Form.Group  style={{ marginBottom: "50px" }}>
        <Form.Control
          type="text"
          placeholder="Search pokemons"
          onChange={(e) => searchPokemons(e)}
        />
      </Form.Group>
      {loading ? (
        <Loader />
      ) : (
        <Col lg={3}>
          {items}
          {loading ? (
            <Loader />
          ) : (
            <button className="load-more" onClick={() => getPokemons()}>
              Load more
            </button>
          )}
        </Col>
      )}
    </>
  );
};

export default HomePage;

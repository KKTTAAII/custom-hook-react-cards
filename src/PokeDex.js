import React from "react";
import { v4 as uuid } from "uuid";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function PokeDex() {
  const [pokemon, setPokemon, error, removeCards] = useAxios(BASE_URL);
  const addPokemon = async name => {
    setPokemon(name);
  };

  if (error) {
    <div>Oops! Something is wrong.</div>;
  }

  const pokeCards = pokemon.map(cardData => {
    const { sprites, name, stats } = cardData.data;
    return (
      <PokemonCard
        key={uuid()}
        front={sprites.front_default}
        back={sprites.back_default}
        name={name}
        stats={stats.map(stat => {
          const { base_stat } = stat;
          return {
            value: base_stat,
            name: stat.stat.name,
          };
        })}
      />
    );
  });

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <button onClick={removeCards}>Remove all cards!</button>
      <div className="PokeDex-card-area">{pokeCards}</div>
    </div>
  );
}

export default PokeDex;

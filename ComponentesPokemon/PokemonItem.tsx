// Un componente por archivo

import { useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonItemProps = {
  pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonItemProps) {
  const [clicks, setClicks] = useState(0);

  return (
    <button
      onClick={() => setClicks(clicks + 1)} // con onClick react ya reconoce un click
      style={{
        display: "block",
        margin: "0.5rem 0",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      <div>Nombre: {pokemon.name}</div>
      <div>URL: {pokemon.url}</div>
      <div>Veces usado: {clicks}</div>
    </button>
  );
}
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

type Pokemon = { 
  name: string;
  url: string;
};

export default function ListadoPokemones() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        setPokemones(response.data.results);
      } catch (error) {
        console.error("Error al obtener los pokemones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemones();
  }, []);

  return (
    <div>
      <h2>Lista de Pokemones</h2>

      {loading ? (
        <p>Cargando pokemones...</p> 
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
          {pokemones.map((pokemon, index) => (
            <PokemonItem key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

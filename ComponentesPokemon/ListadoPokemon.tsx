"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PokemonItem from "./PokemonItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Pokemon = { 
  name: string;
  url: string;
};

async function fetchPokemones(limit: number) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
  return res.data.results as Pokemon[];
}

export default function ListadoPokemones() {
  const [limit, setLimit] = useState(30);

  const { data: pokemones, isLoading, error } = useQuery({
    queryKey: ["pokemones", limit], // queryKey hace que se vuelva a ejecutar cuando cambie el limit, si no, no se actualiza
    queryFn: () => fetchPokemones(limit), // solicita los pokemones al cambiar el limit, cuando usa el "cargar más"
  });

  if (isLoading)
  return (
    <div>
      <p>Cargando...</p>  
      <Skeleton count={10} height={30} style={{ margin: "10px 0" }} />
    </div>
  );

  if (error) return <p>Error al cargar los Pokemones </p>;

  return (
    <div>
      <h2>Lista de Pokemones</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "1rem",
        }}
      >
        {pokemones?.map((pokemon, index) => (
          <PokemonItem key={index} pokemon={pokemon} />
        ))}
      </div>

      <button
        style={{
          marginTop: "1.5rem",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setLimit(limit + 30)}
      >
        Cargar más
      </button>
    </div>
  );
}

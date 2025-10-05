"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PokemonDetail({ params }: { params: { name: string } }) {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      setPokemon(res.data);
    };
    fetchPokemon();
  }, [params.name]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipos: {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
      <Link href="/">Volver a la lista</Link>
    </div>
  );
}

"use client";

import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonItemProps = {
  pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonItemProps) {
  return (
    <Link
      href={`/Pokemon/${pokemon.name}`}
      style={{
        display: "block",
        margin: "0.5rem 0",
        padding: "1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        textDecoration: "none",
        color: "black",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ textTransform: "capitalize", margin: 0 }}>{pokemon.name}</h3>
      <p style={{ fontSize: "0.9rem", margin: 0, color: "#0ddd14ff" }}>Ver detalles</p>
    </Link>
  );
}

// los componentes de /app son Server Components.
// useEffect y useState, solo funcionan en Client Components, entonces:

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem"; // import del otro componente

// Un componente por archivo (y un export)

type Pokemon = { // Estructura de PokemonItem 
  name: string;
  url: string;
};

export default function ListadoPokemones() {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]); // Inicializa pokemones en vacio
    // Pokemones = variable de estados, set pokemones = funcion para actualizar estado

    useEffect(() => {
        const fetchPokemones = async () => {
        try {
             const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
             setPokemones(response.data.results); // Agrego todo los pokemones y reenderiza
             } catch (error) {
                console.error("Error al obtener los pokemones:", error);
            }
    };
    fetchPokemones(); // Llamo la función
  }, []); // Para que se ejecute solamente cuando se monta el componente
   

  return (
    <div>
      <h2>Lista de Pokemones</h2>
      {pokemones.map((pokemon, index) => (
        <PokemonItem key={index} pokemon={pokemon} /> // Renderiza a cada pokemon de la lista como pokemon item ()
        // Instancia de cada pokemonItem para cada elemento del array,  con esto identifica cada click al pokemon que se le clickea
      ))}
    </div>
  );
}


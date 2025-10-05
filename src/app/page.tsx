import PokemonList from "../../ComponentesPokemon/ListadoPokemon";  // Pokemon item no hace falta por que lo usa listado pokemon dentro
                        // tengo que retroceder dos carpetas (ruta relativa)
export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <PokemonList />
    </main>
  );
}
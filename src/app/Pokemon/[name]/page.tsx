// Ahora es server component
import Link from "next/link";

type Pokemon = { // datos a mostrar del pokemon
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  height: number;
  weight: number;
};

export default async function PokemonDetail({
  params,
}: {

  // Fetch del lado del servidor // Ya no se usa useEffect ni useState como fue para client component
  params: Promise<{ name: string }>;
}) {

  const { name } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("No se pudo obtener el Pokémon");
  }

  const pokemon: Pokemon = await res.json();

  // Renderizado directo del resultado
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textTransform: "capitalize", marginBottom: "1rem" }}>
        {pokemon.name}
      </h1>

      {/* Imagen centrada */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
          }}
        />
      </div>

      <p>
        <strong>Tipos:</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <p>
        <strong>Altura:</strong> {pokemon.height / 10} m
      </p>
      <p>
        <strong>Peso:</strong> {pokemon.weight / 10} kg
      </p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        ← Volver a la lista
      </Link>
    </div>
  );
}

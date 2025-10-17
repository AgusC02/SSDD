export default function Loading() { // React lo utiliza automaticamente mientras se espera una respuesta del fetch
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <p>Cargando información del Pokémon...</p>
    </div>
  );
}

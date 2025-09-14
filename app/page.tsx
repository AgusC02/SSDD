export default function Page() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centra horizontalmente
        justifyContent: "center", // Centra verticalmente
        minHeight: "100vh", // Ocupa toda la pantalla
        textAlign: "center", // Centra el texto
        gap: "1rem", // Espaciado entre elementos
      }}
    >
      {/* Encabezado */}
      <header>
        <h1>Medios de Transporte</h1>
        <p>Lista con distintos medios de transporte</p>
      </header>

      {/* Lista */}
      <section>
        <h2>Vehículos disponibles</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Auto</li>
          <li>Moto</li>
          <li>Camión</li>
          <li>Avión</li>
          <li>Barco</li>
          <li>Bicicleta</li>
          <li>Tren</li>
        </ul>
      </section>

      {/* Imagen */}
      <section>
        <h2>Ejemplo</h2>
        <img
          src="/208.png" /* Imagen guardada en public*/
          style={{ borderRadius: "10px", marginTop: "10px" }}
        />
      </section>

      {/* Botón */}
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
          cursor: "pointer",
        }}
      >
        Boton de prueba
      </button>

      {/* Footer */}
      <footer style={{ marginTop: "20px" }}>
        <p>2025 Proyecto Next.js - Actividad 3 - Agustín Cerdá</p>
      </footer>
    </main>
  );
}

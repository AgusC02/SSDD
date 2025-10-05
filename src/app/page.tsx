import {Header} from "../../Componentes/Header"; 
import {Lista} from "../../Componentes/Lista"; 


export default function Page() {
  return (
  <main
    style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    gap: "1rem",
    }}
  >

      <Header />
      <Lista />

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

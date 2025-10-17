// src/app/layout.tsx
"use client"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [queryClient] = useState(() => new QueryClient()); // Unico cliente

  return (
    <html lang="es">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {/* NAVBAR */}
        <header style={{ borderBottom: "1px solid #e5e7eb", padding: "1rem 2rem" }}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 700 }}>Pokemones</div>
            <div>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                Inicio
              </Link>
            </div>
          </nav>
        </header>
    
        {/* CONTENIDO CENTRAL */} 
        <main style={{ padding: "1.5rem 2rem" }}>
          <QueryClientProvider client={queryClient}>
            {children} 
          </QueryClientProvider>
        </main>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid #e5e7eb", padding: "1rem 2rem", marginTop: 32 }}>
          <small>Agustín Cerdá — Sistemas distribuidos</small>
        </footer>
      </body>
    </html>
  );
}
/* La idea de:
          <QueryClientProvider client={queryClient}>
            {children} 
          </QueryClientProvider>
  Es que todos los componentes puedan usar React Query
*/
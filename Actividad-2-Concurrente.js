const axios = require("axios");

async function obtenerUsuariosyPublicaciones() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const primerosUsuarios = response.data.slice(0, 3); // tomar los 3 primeros, 0 inicio 3 deja de tomar. Toma 0,1,2

    // 2️⃣ Crear promesas para obtener la información de cada usuario y sus publicaciones
    const promesasUsuarios = primerosUsuarios.map(async (u) => {
      const cantPub = await obtenerCantPublicaciones(u.id); // concurrente por cada usuario
      return { nombre: u.name, publicaciones: cantPub };
    });

    const resultados = await Promise.all(promesasUsuarios); // Se esperan a que se resuelvan todas las promesas en paralelo 

    const Usuarios = resultados.map(r => r.nombre);
    const Publicaciones = resultados.map(r => r.publicaciones);

    return { Usuarios, Publicaciones };

  } catch (error) {
    console.error('Error al obtener los usuarios o publicaciones:', error.message);
    return { Usuarios: [], Publicaciones: [] };
  }
}

async function obtenerCantPublicaciones(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return response.data.length;
  } catch (error) {
    console.error(`Error al obtener las publicaciones del usuario ${id}:`, error.message);
    return 0;
  }
}

// Ejecutar y mostrar resultados
obtenerUsuariosyPublicaciones().then(({Usuarios, Publicaciones}) => {
  for (let i = 0; i < Usuarios.length; i++) {
    console.log(`${Usuarios[i]} tiene ${Publicaciones[i]} publicaciones`);
  }
});

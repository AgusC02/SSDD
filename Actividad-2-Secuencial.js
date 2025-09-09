const axios = require("axios");

async function obtenerUsuariosyPublicaciones() {

  let Usuarios = [];
  let CantPublicaciones = [];
  
  try {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    for (let i=0; i<3; i++) {
      Usuarios.push(response.data[i].name);
      CantPublicaciones.push(await obtenerCantPublicaciones(response.data[i].id)); // espera a que se resuelva la promesa
    }

  } catch (error) {
    console.error('Error al obtener los usuarios:', error.message);
  }

  return { Usuarios, CantPublicaciones }; // Retorna un objeto con dos arreglos, corchete seria arreglo
}

async function obtenerCantPublicaciones(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=ID`.replace('ID', id));
    return response.data.length; // Retorna la cantidad de publicaciones del usuario
  }
  catch (error) {
    console.error('Error al obtener las publicaciones del usuario:', error.message);
  }
} 


obtenerUsuariosyPublicaciones().then(({Usuarios, CantPublicaciones}) => {
  for (let i = 0; i < Usuarios.length; i++) {
    console.log(`${Usuarios[i]} tiene ${CantPublicaciones[i]} publicaciones`);
  }
});
// Para que no retorne una promise y si los datos reales, se usa .then
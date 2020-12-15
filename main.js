const ejemplo = 'Hola mundo';
let nombre = 'Sebastian';

// 1. Promesa

/* function cambiarNombre(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {

            nombre = "Raul";
            resolve(true);

        }, 3000);

        
    })
}

cambiarNombre().then(()=>{

})

console.log(nombre); */

// 2. todo es una clase

class Personaje {
  datosPersonaje = {};
  peliculasPersonaje = [];
  peliculasString = '';

  constructor() {
    this.init();
  }

  async init() {
    //1. traiga la informacion del personaje
    await this.traerPersonaje();

    console.log(this.datosPersonaje);

    //2. traiga las peliculas del personaje

    for (const urlPelicula of this.datosPersonaje.films) {
      const nombrePelicula = await this.traerPelicula(urlPelicula);
      this.peliculasPersonaje.push(nombrePelicula);

      this.peliculasString += `${nombrePelicula}, `;
    }

    //3. imprima la infomrcion
    this.imprimirInformacion();
  }

  traerPersonaje() {
    return new Promise(resolve => {
      fetch('https://swapi.dev/api/people/1')
        .then(result => result.json())
        .then(info => {
          this.datosPersonaje = info;
          resolve(true);
        });
    });
  }

  traerPelicula(url) {
    return new Promise(resolve => {
      fetch(url)
        .then(result => result.json())
        .then(info => {
          resolve(info.title);
        });
    });
  }

  imprimirInformacion() {
    document.getElementById('nombre').innerHTML= this.datosPersonaje.name;
    document.getElementById('edad').innerHTML= this.datosPersonaje.birth_year;
    document.getElementById('peliculas').innerHTML= this.peliculasString;
  }
}

const personaje = new Personaje();

// Funcion fetch

/* obtenerPelicula = ()=>{
    return new Promise((resolve,reject)=>{

        fetch('https://swapi.dev/api/films/1')
        .then(result => result.json())
        .then(info => {
            resolve(info);
        });

    })
}

async function init() {

    const pelicula = await obtenerPelicula();

    console.log(pelicula);

}

init();
 */

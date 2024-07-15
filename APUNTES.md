BUG DE DATA DE POKEMONS

- En el curso de fernando herrera se menciona que la page de la carpeta /pokemons puede ser de esta manera:
```jsx
import {SimplePokemon, PokemonsResponse} from "@/app/pokemons";

export const getPokemons = async(limit=20, offset=0):Promise<SimplePokemon[]> => {
  const response:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      const pokemons = response.results.map((pokemon: { url: string; name: any; }) => ({
        id:pokemon.url.split('/').at(-2),
        name: pokemon.name,
      }))
  return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons();
    
    return(
        <div>
            {JSON.stringify(pokemons)}
        <div>
    )
}
```
Esto en apartir de Next13 cambio y ahora para poder hacer este tipo de peticiones se tienen que hacer lo siguiente:

- primero la funcion getPokemons la tenemos que colocar en algun archivo .ts (si es que estamos trabajando con typescript)
- despues en el archivo .jsx mandaremos a llmar a esa varible de esta manera con el useEffect y useState de react para hacer
la peticion:
```jsx
'use client'

import {getPokemons} from "@/app/pokemons";
import {useState, useEffect} from "react";

export default function PokemonPage() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemons(24);
      // @ts-ignore
        setPokemon(data);
    };

    fetchData();
  }, []);
    return (
        <div>
            {JSON.stringify(pokemon)}
        </div>
    )
}
```

De esta manera nos estaremos ahorrando muchos problemas ya que me encontre este error y tarde varias horas encontrando
el porque no me estaba funcionando el codigo que a el si le funcionaba 

Esta es la solucion que encontre en internet


```text
El error indica que getServerSideProps no está soportado en el nuevo directorio app de Next.js. A partir de Next.js 13,
se introdujo la nueva arquitectura basada en el app directory, la cual utiliza componentes y hooks específicos para la 
obtención de datos, en lugar de las funciones tradicionales como getServerSideProps.
```

import {SimplePokemon, PokemonsResponse} from "@/app/pokemons";

export const getPokemons = async(limit=20, offset=0):Promise<SimplePokemon[]> => {
  const response:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      const pokemons = response.results.map((pokemon: { url: string; name: any; }) => ({
        id:pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
      }))
  return pokemons;
}

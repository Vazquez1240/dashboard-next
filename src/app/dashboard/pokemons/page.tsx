'use client'

import {getPokemons} from "@/app/pokemons";
import {useState, useEffect} from "react";
import Image from "next/image";

export default function PokemonPage() {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
   (async () => {
      const data = await getPokemons(40);
      // @ts-ignore
       setPokemon(data);
    })();
  }, []);
    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {pokemon.map(poke => (
                    <>
                        <div>
                            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                                key={poke.id}
                                width={100}
                                height={100}
                                alt={poke.name}/>
                            <p>{poke.name}</p>
                            <p>{poke.id}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

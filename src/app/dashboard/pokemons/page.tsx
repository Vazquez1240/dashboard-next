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

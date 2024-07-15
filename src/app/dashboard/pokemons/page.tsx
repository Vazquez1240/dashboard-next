'use server'
// 'use client'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

const getPokemons = (limit = 20, offset = 0) => {
    try {
        const data = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            // .then(res => res.json())
        return data
        // return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    } catch (error) {
        console.error(error)
    }
}

export default async function PokemonPage() {
    'use client'
    const pokemon =  await getPokemons()
    {console.log(pokemon)}
    return (
        <div>
            <h1>{JSON.stringify(pokemon)}</h1>
        </div>
    )
}

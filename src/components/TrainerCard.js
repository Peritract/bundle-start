import React, { useState } from 'react';

const TrainerCard = ({ name, num }) => {
    const [pokemonCount, setPokemonCount] = useState(num)

    console.log('This is pokemon count', pokemonCount)

    const catchAPokemon = () => {
        let newCount = pokemonCount + 1
        setPokemonCount(newCount)
    }


    return (
        <>
            <h2>Hi, my name is {name} </h2>
            <p>I started with {num} Pokemon when my card rendered </p>
            <button onClick={catchAPokemon}>Catch a pokemon</button>
            <p>Now i have {pokemonCount} Pokemon after I clicked the button</p>
        </>
    )
}


export default TrainerCard

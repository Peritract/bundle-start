import React, { useState, useEffect } from 'react';
import PokemonIndex from './components/PokemonIndex'
import TrainerCard from './components/TrainerCard'

const App = () => {
    const [trainers, setTrainers] = useState([
        {name: 'Ash' , num: 6},
        {name: 'Morgan' , num: 151},
        {name: 'Misty', num: 250},
        {name: 'Brock' , num: 9}
    ])


    const renderTrainerCards = () => trainers.map((trainer, index)=> <TrainerCard key={index} name={trainer.name} num ={trainer.num} />);


    return (
        <>
           <PokemonIndex />
           {renderTrainerCards()}
        </>
    )
}

export default App;

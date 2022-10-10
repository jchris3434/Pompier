import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { PetCard } from './PetCard';

const PETS = [
    { id: 1, name: 'Samu' },
    { id: 2, name: 'Camion Echelle' },
    { id: 3, name: 'Canadair' },
    { id: 4, name: 'Camion Citerne' },
]

export const Basket = () => {
    const [basket, setBasket] = useState([])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item) => setBasket((basket) => 
                            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <React.Fragment>
            <div className='pets'>
                {PETS.map(pet => <PetCard draggable id={pet.id} name={pet.name} key={pet.id}/>)}
            </div>
            <div id="basket1" className='basket' ref={dropRef}>
                {basket.map(pet => <PetCard id={pet.id} name={pet.name} key={pet.id} />)}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    )
}
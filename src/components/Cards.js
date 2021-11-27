import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import memory from '../images/Memory.jpg';
import thinking from '../images/Thinking.jpg';
import breakout from '../images/break-out-game.png';
function Cards() {
    return (
        <div className="cards">
            
            <div className="cards__container">
                <h1>BrainGYM Programs</h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={memory}
                            text="Expand and Preserve your memory abilities with our special exercises which built and designed specifically to strengthening your memory"
                            label='Memory Exercises'
                            path='/memory'
                        />
                        <CardItem 
                            src={thinking}
                            text="Improve your brain concentration with challenging and pleasant exercises"
                            label='Thinking Exercises'
                            path='/'
                        />
                        <CardItem
                            src={breakout}
                            text="Break-Out Game"
                            label="Example for prototype"
                            path='/breakout'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

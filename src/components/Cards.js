import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import memory from '../images/Memory.jpg';
import thinking from '../images/Thinking.jpg';
function Cards() {
    return (
        <div className="cards">
            {/* <div className="training-program-container">
                <h1>Our Personalized Training Program</h1><br/>
                <p>
                    BrainGYM is an innovative brain training program, combining the strengthening
                    of memory and attention infrastructure with learning memory techniques that
                    assist in daily activities.
                </p><br/>
                <p>
                    It's a fun exercise that takes only about 15 minutes a day and doesn't require any
                    installation. The program can be used on any home computer or tablet.
                </p><br/>
                <p>
                    The training adapts to your specific abilities, helping you reach optimal results
                    and realize your brain's potential for memory.
                </p><br/>
                <button>Try It</button>
            </div> */}
            <div className="cards__container">
                <h1>BrainGYM Programs</h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={memory}
                            text="Expand and Preserve your memory abilities with our special games that built and designed specifically to strengthening memory"
                            label='Memory Exercises'
                            //path='/services'
                        />
                        <CardItem 
                            src={thinking}
                            text="Improve your brain concentration with challenging and pleasant exercises"
                            label='Thinking Exercises'
                            //path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

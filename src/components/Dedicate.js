import React from 'react';
import './Dedicate.css';
import background from '../images/olders-and-childs.jpg';
function Dedicate() {
    return (
        <div className="dedicated-container">
            <img className="myImg" src={background}/>
            
            <div className="text-container">
                <h1>Dedicated software for all ages</h1>
                <p> <br/>
                BrainGYM was developed by software engineer student who
                wanted to create a tool that can be useful and effective 
                for all ages, kids in school and even adults in a 
                nursing home can use BrainGYM, our program will customize itself 
                to your abilities and then will build the most effective exercise plan for you
                </p>
            </div>
            
        </div>
    )
}

export default Dedicate;

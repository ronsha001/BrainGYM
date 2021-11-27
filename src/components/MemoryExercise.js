import React, { useEffect, useRef } from 'react'
import './MemoryExercise.css';
import Navbar from './Nav';


export default function MemoryExercise() {
    const canvasRef = useRef(null);

    useEffect( () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
    }, [])

    return (
        <>
            <Navbar></Navbar>

            

            <div className="memory-game-content">
                <canvas ref={canvasRef} className="memory-canvas" id='mycanvas'></canvas>
            </div>
            
        </>
    )
}


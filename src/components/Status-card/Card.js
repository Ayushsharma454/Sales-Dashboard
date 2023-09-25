// Card.js
import React from 'react';
import './card.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

function Card({ status, cost, trend ,image, title ,value, strokeColor , rotation}) {
    return (
        <div className="card">
            <div className='card-left-side'>
                <p>{status}</p>
                <p><span>$</span>{cost}</p>
                <div className='card-wrapper'>
                    <img src={image} alt={title} />
                    <p>{trend}</p>
                </div>
            </div>  
            <div className='progress-circle'>
                <CircularProgressbar value={value} strokeWidth={5} styles={buildStyles({
                    pathColor: strokeColor,
                    rotation: rotation
                })}/>
            </div>
            
        </div>
    );
}

export default Card;

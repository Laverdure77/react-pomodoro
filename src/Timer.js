import React from 'react'
import './timer.css'
export default function Timer() {

    let setTime = 5;
    let setTimeSec = setTime * 60;
    let minutes = parseInt(setTimeSec/60, 10);
    let secondes = parseInt(setTimeSec%60,10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    return (
        <div>
           <p className="timer">
               {`${minutes}:${secondes}`}
            </p> 
        </div>
    )
}

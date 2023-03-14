import React from 'react';
import "./style.css"

function Main({randomNumbers, onDelete}) {
    return (
        <div className="box">
            {randomNumbers.map((item, index) => (
                <div key={index} className="box__content" >
                    <p className="box__title">{item}</p>
                    <button onClick={() => onDelete(index)} className="box__delete">x</button>
                </div>
            ))}
        </div>
    );
}

export default Main;
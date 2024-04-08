import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button 
            type='button' 
            className={`btn ${props.theme}`} 
            onClick={props.handler}
            name={props.name}
        >
            {props.button}
        </button>
    );
}

export default Button;
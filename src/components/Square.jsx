import React from 'react';
import './Square.css'

const Square = (props) => {


    return (
        <button className='square' style={{backgroundColor: props.isActive ? 'red' : ''}} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;

import React from 'react';
import './Square.css'

const Square = (props) => {


    return (
        <button className={'square '+(props.isWinning?'square--winning':props.isCurrent?'square--current':null)}  onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;

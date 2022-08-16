import React from 'react';
import './Board.css'
import Square from './Square';

const Board = ({arrayOfsquares,click}) => {
    return (
        <div className='board'>
           {
           arrayOfsquares.map((el,ind)=>{
            return <Square key={ind} value={el} onClick={()=>click(ind)}/>
           })
           }
        </div>
    );
}

export default Board;


import React from 'react';
import './Board.css'
import Square from './Square';

const Board = ({arrayOfsquares,click,isActive}) => {


    return (
        <div className='board'>
           {
           arrayOfsquares.map((el,ind)=>{
            return <Square key={ind} value={el} isActive={isActive}  onClick={()=>click(ind)}  />
           })
           }
        </div>
    );
}

export default Board;


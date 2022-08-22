import React from 'react';
import './Board.css'
import Square from './Square';


const Board = ({arrayOfsquares,click,color,winningSquares,current}) => {


    return (
        <div className='board'>
           {
           arrayOfsquares.map((el,ind)=>{
            return <Square key={ind} value={el} bgColor={ color} isWinning={winningSquares.includes(ind)}
                           isCurrent={current===ind}
                           onClick={()=> {

                click(ind)
            }}  />
           })
           }
        </div>
    );
}

export default Board;


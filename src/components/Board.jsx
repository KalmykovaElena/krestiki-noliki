import React from 'react';
import './Board.css'
import Square from './Square';


const Board = ({arrayOfsquares,click,color}) => {


    return (
        <div className='board'>
           {
           arrayOfsquares.map((el,ind)=>{
            return <Square key={ind} value={el} bgColor={ color} onClick={()=> {

                click(ind)
            }}  />
           })
           }
        </div>
    );
}

export default Board;


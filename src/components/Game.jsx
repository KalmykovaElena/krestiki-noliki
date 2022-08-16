import React, {useState} from 'react';
import './Game.css'
import Board from './Board'
import {getWinner} from '../halper'

const Game = () => {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [xIsNext,setXisNext]=useState(true)
    const winner = getWinner(board)

   const handleClick=(index)=>{
        const boardCopy=[...board]
        console.log( boardCopy[index])
        if(winner || boardCopy[index]) return
        boardCopy[index]= xIsNext?'X':'0'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
        
    }
    const startNewGame =()=>{
        return (
        <button className='startBtn' onClick={()=>{
            setBoard(Array(9).fill(null))
            setXisNext(true)
        }
        }>Очистить поле</button>
        )
    }
    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board arrayOfsquares={board} click={handleClick}/>
            <p className='gameInfo'>
                {winner? 'победитель '+winner
                :board.every((el)=>!!el)
                ?'У вас ничья'
                :'Сейчас ходит '+(xIsNext?'X':'0')}
            </p>
        </div>
    );
}

export default Game;


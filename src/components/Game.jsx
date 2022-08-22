import React, {useState} from 'react';
import './Game.css'
import Board from './Board'
import {getWinner} from '../halper'

const Game = () => {
    const [board,setBoard]=useState([Array(9).fill(null)]);
    const [xIsNext,setXisNext]=useState(true)
    const [stepNumber,setStepNumber]=useState(0)
    const winner = getWinner(board[stepNumber])
    const [color,setColor]=useState('')


   const handleClick=(index)=>{
       const historyPoint=board.slice(0,stepNumber+1)
       const current=historyPoint[stepNumber]

       const squares=[...current]
       if(winner || squares[index]) return
       squares[index]= xIsNext?'X':'0'

       setBoard([...historyPoint,squares])
       setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
       setColor('green')

    }
    const startNewGame =()=>{
        return (
        <button className='startBtn' onClick={()=>{
            jumpTo(0)
        }
        }>Очистить поле</button>
        )
    }
    const jumpTo=(step)=>{
        setStepNumber(step)
        setXisNext(step%2===0)
        console.log(stepNumber)
    }
const renderMoves=()=>{
   return board.map((el,ind)=>{
            const destination = ind?`Go to move #${ind}`:`Go to start`
            return <li key={ind}>
                <button onClick={()=>jumpTo(ind)}>{destination}</button>
            </li>
        })
}

    return (
        <div className='wrapper'>
            <div>
            {startNewGame()}
            <Board arrayOfsquares={board[stepNumber]} color={color} click={handleClick} />
            <p className='gameInfo'>
                {winner? 'победитель '+winner
                :board[stepNumber].every((el)=>!!el)
                ?'У вас ничья'
                :'Сейчас ходит '+(xIsNext?'X':'0')}
            </p>
            </div>
            <div className='history'>
                <h3>История</h3>
                {renderMoves()}
            </div>
        </div>
    );
}

export default Game;


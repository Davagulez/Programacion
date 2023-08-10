import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import {Square} from './components/Square.jsx'
import {TURNS} from './constants.js'
import {checkWinnerFrom} from './logic/board.js'
import {WinnerModal} from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

const board = Array(9).fill(null) 

function App() {
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()    
  }

  const checkEndGame = (newBoard) => {
    // revisamos si hay un empate, si no hay mas espacios vacios
    // en el tablero
    return newBoard.every((Square) => Square !== null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) 

    //Guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // false

    }
  }
  return (
    <main className='board'>

      <h1>Ta te ti</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className='game'>  
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              > 
                {square} 
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>

    </main>
  )
}

export default App

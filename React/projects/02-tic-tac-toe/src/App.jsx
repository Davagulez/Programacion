import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const board = Array(9).fill(null) 

const Square = ({children, updateBoard, index, isSelected}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={className}>
      <span className='cell__content'>
        {children}
      </span>
    </div>
  )
}

//tarea: aplicar otro metodo/logica de programacion
// para saber quien es el ganador
const WINNER_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]


function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardTocheck) => {
    // revisamos todas las combinaciones ganadoras
    // para saber si hay un ganador
    for (const combo of WINNER_COMBINATIONS) {
      const [a,b,c] = combo
      if (
        boardTocheck[a] && // 0 -> x u o
        boardTocheck[a] === boardTocheck[b] && 
        boardTocheck[a] === boardTocheck[c]) {
        return boardTocheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
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

      {
        winner !== null && (
          <section className='winner'>
           <div className='text'>
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'El ganador es: ' + winner
                  
                }
              </h2>
           </div>
           
           <header className='win'>
              {winner && <Square>{winner}</Square>}
           </header>

           <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
           </footer>
           
          </section>
        )
      }
    </main>
  )
}

export default App

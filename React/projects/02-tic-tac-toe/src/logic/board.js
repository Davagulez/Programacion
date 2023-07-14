import { WINNER_COMBINATIONS } from '../constants.js'

export const checkWinnerFrom = (boardTocheck) => {
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
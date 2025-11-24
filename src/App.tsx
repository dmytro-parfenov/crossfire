import { type FC } from 'react'
import './App.css'
import { Board } from './Board/Board'
import { Piece } from './Board/Piece/Piece'

export const App: FC = () => {
  return <main>
    <Board rows={7} cols={7} onClick={console.log}>
      <Piece type="Pawn" row={3} col={4} />
      <Piece type="Bishop" row={6} col={6} />
    </ Board>
  </main>
}

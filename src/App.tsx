import { useCallback, useState, type FC } from 'react'
import './App.css'
import { Board } from './Board/Board'
import { Piece } from './Board/Piece/Piece'
import type { Piece as PieceEntity } from './types/Piece';

const board = {
  rows: 7,
  cols: 7
}

const piecesData: PieceEntity[] = [{
  id: '1',
  type: 'Pawn',
  row: 3,
  col: 4
}, {
  id: '2',
  type: 'Bishop',
  row: 6,
  col: 6
}];

export const App: FC = () => {
  const [pieces, setPieces] = useState(piecesData);

  const [selectedPieceId, setSelectedPieceId] = useState<string>();

  const handleBoardClick = useCallback((row: number, col: number) => {
    if (!selectedPieceId) {
      return;
    }

    setPieces(state => {
      return state.map(piece => {
        return piece.id === selectedPieceId ? ({ ...piece, row, col }) : piece;
      })
    });

    setSelectedPieceId('');
  }, [selectedPieceId])

  return <main>
    <Board
      rows={board.rows}
      cols={board.cols}
      onClick={handleBoardClick}>
      {pieces.map(({ id, type, row, col }) =>
        <Piece
          key={id}
          type={type}
          row={row}
          col={col}
          onClick={setSelectedPieceId.bind(this, id)} />)}
    </ Board>
  </main>
}

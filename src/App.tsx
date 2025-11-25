import { useCallback, useState, type FC } from 'react'
import './App.css'
import { Board } from './Board/Board'
import { Piece } from './Board/Piece/Piece'
import type { Piece as PieceEntity } from './types';
import type { Board as BoardEntity } from './types';

const board: BoardEntity = {
  rows: 7,
  cols: 7
}

const piecesData: PieceEntity[] = [{
  id: '1',
  type: 'Pawn',
  position: {
    row: 3,
    col: 4
  }
}, {
  id: '2',
  type: 'Bishop',
  position: {
    row: 6,
    col: 6
  }
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
        return piece.id === selectedPieceId ? ({ ...piece, position: { row, col } }) : piece;
      })
    });

    setSelectedPieceId('');
  }, [selectedPieceId])

  return <main>
    <Board
      rows={board.rows}
      cols={board.cols}
      onClick={handleBoardClick}>
      {pieces.map(({ id, type, position: { row, col } }) =>
        <Piece
          key={id}
          id={id}
          type={type}
          row={row}
          col={col}
          onClick={setSelectedPieceId} />)}
    </ Board>
  </main>
}

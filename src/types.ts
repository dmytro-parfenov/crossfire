export type PieceType = 'Pawn' | 'Bishop';

export type Position = {
    row: number;
    col: number;
}

export type Piece = {
  id: string;
  type: PieceType;
  position: Position;
}

export type Board = {
    rows: number;
    cols: number;
}
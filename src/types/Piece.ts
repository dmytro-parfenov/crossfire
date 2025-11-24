import type { PieceType } from "./PieceType";

export type Piece = {
  id: string;
  type: PieceType;
  row: number;
  col: number;
}
import { useMemo, type FC } from "react";
import './Piece.css';
import type { PieceType } from "../../types/PieceType";
import Pawn from '../../assets/pieces/Pawn.svg';
import Bishop from '../../assets/pieces/Bishop.svg';

type Props = {
    type: PieceType;
    row: number;
    col: number;
}

export const Piece: FC<Props> = ({ type, row, col }) => {
    const pieceIcon = useMemo(() => {
        switch (type) {
            case "Pawn":
                return Pawn;
            case "Bishop":
                return Bishop;
        }
    }, [type]);

    return <img className="piece" style={{ '--piece-row': row, '--piece-col': col }} src={pieceIcon} alt={type} />;
}
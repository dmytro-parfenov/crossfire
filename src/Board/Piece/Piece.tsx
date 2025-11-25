import { useCallback, useMemo, type FC } from "react";
import './Piece.css';
import type { PieceType } from "../../types";
import Pawn from '../../assets/pieces/Pawn.svg';
import Bishop from '../../assets/pieces/Bishop.svg';

type Props = {
    id: string;
    type: PieceType;
    row: number;
    col: number;
    onClick?: (id: string) => void;
}

export const Piece: FC<Props> = ({ id, type, row, col, onClick }) => {
    const pieceIcon = useMemo(() => {
        switch (type) {
            case "Pawn":
                return Pawn;
            case "Bishop":
                return Bishop;
        }
    }, [type]);

    const handleClick = useCallback(() => onClick?.(id), [id])

    return <img
        className="piece"
        style={{ '--piece-row': row, '--piece-col': col }}
        src={pieceIcon}
        alt={type}
        onClick={handleClick} />;
}
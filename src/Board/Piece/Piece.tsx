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
    disabled?: boolean;
    selected?: boolean;
    onClick?: (id: string) => void;
}

export const Piece: FC<Props> = ({
    id,
    type,
    row,
    col,
    selected,
    disabled,
    onClick
}) => {
    const pieceIcon = useMemo(() => {
        switch (type) {
            case "Pawn":
                return Pawn;
            case "Bishop":
                return Bishop;
        }
    }, [type]);

    const handleClick = useCallback(() => onClick?.(id), [id, onClick])

    return <div
        className="piece"
        style={{
            '--piece-row': row,
            '--piece-col': col,
            pointerEvents: disabled ? 'none' : 'auto',
            border: selected ? '1px solid black' : 'none',

        }}>
        <img
            className="icon"
            src={pieceIcon}
            alt={type}
            onClick={handleClick} />
    </div>;
}
import type { FC, PropsWithChildren } from "react";
import './Board.css';

type Props = {
    rows: number;
    cols: number;
    onClick?: (row: number, col: number) => void;
}

export const Board: FC<PropsWithChildren<Props>> = ({ rows, cols, children }) => {
    return <div className="board" style={{ '--board-rows': rows, '--board-cols': cols }}>{children}</div>
}
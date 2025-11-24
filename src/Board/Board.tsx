import { useCallback, useRef, type FC, type PointerEventHandler, type PropsWithChildren } from "react";
import './Board.css';

const resolveBoardSection = (sections: number, size: number, pointer: number) => {
    return Math.floor(pointer / (size / sections)) + 1;
}

type Props = {
    rows: number;
    cols: number;
    onClick?: (row: number, col: number) => void;
}

export const Board: FC<PropsWithChildren<Props>> = ({ rows, cols, onClick, children }) => {
    const boardElementRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback<PointerEventHandler<HTMLDivElement>>((event) => {
        if (!boardElementRef.current) {
            return;
        }

        const { width, height, top, left } = boardElementRef.current.getBoundingClientRect();

        const x = event.nativeEvent.clientX - left;
        const y = event.nativeEvent.clientY - top;

        const row = resolveBoardSection(rows, height, y);
        const col = resolveBoardSection(cols, width, x);

        onClick?.(row, col);
    }, [rows, cols, onClick]);

    return <div
        className="board"
        ref={boardElementRef}
        style={{ '--board-rows': rows, '--board-cols': cols }}
        onClick={handleClick}>{children}</div>
}
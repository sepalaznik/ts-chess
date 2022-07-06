import React, { FC } from "react";

import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    clickCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, clickCell}) => {
    return (
        <div 
            className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
            onClick={() => clickCell(cell)}
            style={{background: cell.available && cell.figure ? "rgba(0, 128, 0, 0.2)" : ""}}
        >
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    );
};

export default CellComponent;

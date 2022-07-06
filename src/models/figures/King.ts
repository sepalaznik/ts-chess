import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) 
            return false;
        const deltaX = Math.abs(this.cell.x - target.x);
        const deltaY = Math.abs(this.cell.y - target.y);

        if((deltaX === 1 && deltaY === 1) ||
            (deltaX === 1 && deltaY === 0) ||
            (deltaX === 0 && deltaY === 1)) 
            return true;

        return false;
    }
}
import { CSSProperties } from "react";
import { RoadStatus } from "../domain/RoadStatus";

export const POSITION_TOP_LEFT = "RoadTopLeft";
export const POSITION_TOP_RIGHT = "RoadTopRight";
export const POSITION_UPWARD = "RoadUpward";

type Position = 
| typeof POSITION_TOP_LEFT
| typeof POSITION_TOP_RIGHT
| typeof POSITION_UPWARD

function Road(prop: {
    position: Position,
    style?: CSSProperties,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    roadStatus: RoadStatus,
}): JSX.Element
{
    let { position, style, onClick, roadStatus } = prop
    if (roadStatus.isSelected) {
        style = {...style, backgroundColor:'black'}
    }
    return (
        <button className={"Road ".concat(position).concat(" "+roadStatus.owner)} style={style} onClick={onClick} />
    );
}
export default Road

export const POSITION_TOP_LEFT = "RoadTopLeft";
export const POSITION_TOP_RIGHT = "RoadTopRight";
export const POSITION_UPWARD = "RoadUpward";

type Position = 
| typeof POSITION_TOP_LEFT
| typeof POSITION_TOP_RIGHT
| typeof POSITION_UPWARD

function Road(prop: {position: Position}): JSX.Element
{
    const { position } = prop
    return (
        <button className={"Road ".concat(position)} style={{marginLeft:'150px'}}></button>
    );
}
export default Road

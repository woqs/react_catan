import { CSSProperties } from "react";
import { VillageStatus } from "../domain/ClickableItem";

function Village(prop: {
    style?: CSSProperties,
    statuses: Array<VillageStatus>,
    id: number,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}): JSX.Element {
    let { style, id, statuses, onClick } = prop
    const status = statuses[id]
    if (status.isSelected) {
        style = {...style, backgroundColor:'black'}
    }
    if (status.disabled) {
        style = {...style, backgroundColor:'#d1d1d1'}
    }

    return (
        <button
            id={id.toString()}
            className='Village'
            style={style}
            onClick={onClick}
            disabled={status.disabled}
        >
        </button>
    );
}

export default Village

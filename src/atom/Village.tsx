import { CSSProperties } from "react";
import { VillageStatus } from "../domain/VillagesStatus";

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

    return (
        <button
            id={id.toString()}
            className='Village'
            style={style}
            onClick={onClick}
            disabled={status.disabled}
        >
            {id}
        </button>
    );
}

export default Village

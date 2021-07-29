import React from "react"
import { ClickableItem } from "../domain/ClickableItem";

function AvailableActions(prop:{selectedItem?: ClickableItem}): JSX.Element
{
    const { selectedItem } = prop
    return(
        <div style={{width:'200px',height:'400px'}}>
            {selectedItem &&
            <>
                <div>{selectedItem.id}</div>
                <div>{selectedItem.isSelected ? "selected" : "nope"}</div>
            </>}
        </div>
    );
}
export default AvailableActions;

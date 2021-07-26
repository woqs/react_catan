import React from "react"
import { ClickableItem } from "../domain/ClickableItem";

function AvailableActions(prop:{selectedVillage?: ClickableItem}): JSX.Element
{
    const { selectedVillage } = prop
    return(
        <div style={{width:'200px',height:'400px'}}>
            {selectedVillage && 
            <>
                <div>{selectedVillage.id}</div>
                <div>{selectedVillage.isSelected ? "selected" : "nope"}</div>
            </>}
        </div>
    );
}
export default AvailableActions;

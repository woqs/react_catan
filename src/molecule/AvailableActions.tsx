import React from "react"
import { VillageStatus } from "../domain/VillagesStatus";

function AvailableActions(prop:{selectedVillage?: VillageStatus}): JSX.Element
{
    const { selectedVillage } = prop
    return(
        <div style={{width:'200px',height:'400px'}}>
            {selectedVillage && <div>{selectedVillage.disabled? 'tata': 'toto'}</div>}
        </div>
    );
}
export default AvailableActions;

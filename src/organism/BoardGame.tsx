import React, { useState } from "react"
import GenerateBoardProductionCells, { ProductionType } from "../domain/ProductionCell";
import { initiateVillagesStatus, VillageStatus } from "../domain/VillagesStatus";
import AvailableActions from "../molecule/AvailableActions";
import Board from "../molecule/Board";

function BoardGame(): JSX.Element
{
    const [boardProductionCells, setBoardProductionCells] = useState<Array<ProductionType>>()
    const [villageStatus, setVillagesStatus] = useState<Array<VillageStatus>>(initiateVillagesStatus())
    const [selectedVillage, setSelectedVillage] = useState<VillageStatus>()

    return (
        <div style={{display:'flex', marginTop:'30px'}} >
            <Board 
                productionCells={boardProductionCells}
                villageStatusState={[villageStatus, setVillagesStatus]}
                selectedVillageState={[selectedVillage, setSelectedVillage]}
            />
            <AvailableActions selectedVillage={selectedVillage} />
            <button
                style={{height:'30px'}}
                onClick={() => {
                    setBoardProductionCells(GenerateBoardProductionCells())
                }}
            >
                Populate Board
            </button>
        </div>
    );
}
export default BoardGame;

import React, { useState } from "react"
import GenerateBoardProductionCells, { ProductionType } from "../domain/ProductionCell";
import AvailableActions from "../molecule/AvailableActions";
import Board from "../molecule/Board";

function BoardGame(): JSX.Element
{
    const [boardProductionCells, setBoardProductionCells] = useState<Array<ProductionType>>()
    return (
        <div style={{display:'flex', marginTop:'30px'}} >
            <Board productionCells={boardProductionCells} />
            <AvailableActions />
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

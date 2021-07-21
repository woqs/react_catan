import React, { useState } from "react"
import GenerateBoardProductionCells, { ProductionType } from "../domain/ProductionCell";
import Board from "../molecule/Board";

function BoardGame(): JSX.Element
{
    const [boardProductionCells, setBoardProductionCells] = useState<Array<ProductionType>>()
    return (
        <>
            <Board productionCells={boardProductionCells}/>
            <button onClick={() => {
                setBoardProductionCells(GenerateBoardProductionCells())
            }}>
                Populate Board
            </button>
        </>
    );
}
export default BoardGame;

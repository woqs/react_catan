import React, { useState } from "react"
import { ClickableItem, VillageStatus } from "../domain/ClickableItem";
import generateStartingDevelopmentCards, { Development } from "../domain/Development";
import generatePlayers, { Player } from "../domain/Player";
import GenerateBoardProductionCells from "../domain/ProductionCell";
import { Resource } from "../domain/Resource";
import { initiateRoadStatus, RoadStatus } from "../domain/RoadStatus";
import { initiateVillagesStatus } from "../domain/VillagesStatus";
import AvailableActions from "../molecule/AvailableActions";
import Board from "../molecule/Board";

function BoardGame(): JSX.Element
{
    const [boardProductionCells, setBoardProductionCells] = useState<Array<Resource>>()
    const [villageStatus, setVillagesStatus] = useState<Array<VillageStatus>>(initiateVillagesStatus())
    const [roadStatuses, setRoadStatuses] = useState<Array<RoadStatus>>(initiateRoadStatus())
    const [selectedItem, setSelectedItem] = useState<ClickableItem>()

    const [players, setPlayers] = useState<Array<Player>>(generatePlayers(3))
    const [developmentCards, setDevelopmentCards] = useState<Array<Development>>(generateStartingDevelopmentCards())
    const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0])

    return (
        <div style={{display:'flex', marginTop:'30px'}} >
            <Board
                productionCells={boardProductionCells}
                villageStatusState={[villageStatus, setVillagesStatus]}
                roadStatusState={[roadStatuses, setRoadStatuses]}
                selectedItemSetter={setSelectedItem}
            />
            <AvailableActions selectedState={[selectedItem, setSelectedItem]} player={currentPlayer} />
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

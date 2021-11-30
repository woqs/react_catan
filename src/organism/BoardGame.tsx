import React, { useEffect, useState } from "react"
import { ClickableItem, VillageStatus } from "../domain/ClickableItem";
import generateStartingDevelopmentCards, { Development } from "../domain/Development";
import generatePlayers, { Player } from "../domain/Player";
import GenerateBoardProductionCells from "../domain/ProductionCell";
import { Resource } from "../domain/Resource";
import { initiateRoadStatus, RoadStatus } from "../domain/RoadStatus";
import { initiateVillagesStatus } from "../domain/VillagesStatus";
import AvailableActions from "../molecule/AvailableActions";
import Board from "../molecule/Board";
import PlayerInformationsDisplay from "../molecule/PlayerInformationsDisplay";

function BoardGame(): JSX.Element
{
    const [boardProductionCells, setBoardProductionCells] = useState<Array<Resource>>()
    const [villageStatus, setVillagesStatus] = useState<Array<VillageStatus>>(initiateVillagesStatus())
    const [roadStatuses, setRoadStatuses] = useState<Array<RoadStatus>>(initiateRoadStatus())
    const [selectedItem, setSelectedItem] = useState<ClickableItem>()

    const [players, setPlayers] = useState<Array<Player>>(generatePlayers(3))
    const [developmentCards, setDevelopmentCards] = useState<Array<Development>>(generateStartingDevelopmentCards())
    const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0])

    useEffect(() => {
        setBoardProductionCells(GenerateBoardProductionCells())
    }, [])

    return (
        <div>
            <div style={{display:'flex', marginTop:'30px'}} >
                <Board
                    productionCells={boardProductionCells}
                    villageStatusState={[villageStatus, setVillagesStatus]}
                    roadStatusState={[roadStatuses, setRoadStatuses]}
                    selectedItemSetter={setSelectedItem}
                />
                <AvailableActions
                    selectedState={[selectedItem, setSelectedItem]}
                    playerState={[currentPlayer, setCurrentPlayer]}
                    villageStatusState={[villageStatus, setVillagesStatus]}
                    roadStatusState={[roadStatuses, setRoadStatuses]}
                />
            </div>
            <PlayerInformationsDisplay currentPlayer={currentPlayer} />
        </div>
    );
}
export default BoardGame;

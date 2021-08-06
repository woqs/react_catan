import React, { Dispatch, SetStateAction, useState } from "react"
import Action from "../atom/Action";
import { ClickableItem, isInstanceOfVillage, VillageStatus } from "../domain/ClickableItem";
import { Player, removeCardsFromPlayer } from "../domain/Player";
import hasPlayerEnoughResourcesFor, { NEEDED_RESOURCES_CITY, NEEDED_RESOURCES_DEVELOPMENT, NEEDED_RESOURCES_ROAD, NEEDED_RESOURCES_SETTLEMENT } from "../domain/Resource";
import { RoadStatus } from "../domain/RoadStatus";

function AvailableActions(prop:{
    selectedState: [ClickableItem|undefined, Dispatch<SetStateAction<ClickableItem|undefined>>],
    playerState: [Player, Dispatch<SetStateAction<Player>>],
    villageStatusState: [Array<VillageStatus>, Dispatch<SetStateAction<Array<VillageStatus>>>],
    roadStatusState: [Array<RoadStatus>, Dispatch<SetStateAction<Array<RoadStatus>>>],
}): JSX.Element {
    const { selectedState, playerState, villageStatusState, roadStatusState } = prop
    const [ selectedItem, setSelectedItem ] = selectedState
    let [ player, setPlayer ] = playerState
    const [villageStatus, setVillagesStatus] = villageStatusState
    const [roadStatuses, setRoadStatuses] = roadStatusState

    const [isDisabledDevelopmentPurchase, setIsDisabledDevPurchase] = useState<boolean>(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_DEVELOPMENT))
    const [isDisabledCityPurchase, setIsDisabledCityPurchase] = useState<boolean>(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_CITY))
    const [isDisabledSettlementPurchase, setIsDisabledSettlePurchase] = useState<boolean>(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_SETTLEMENT))
    const [isDisabledRoadPurchase, setIsDisabledRoadPurchase] = useState<boolean>(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_ROAD))

    return(
        <div style={{width:'250px',height:'400px'}}>
            <div>
                <Action title="Player Trade" resources={[]} onClick={() => {}} />
                <Action title="Default Trade" resources={[]} onClick={() => {}} />
                <Action title="Development" resources={NEEDED_RESOURCES_DEVELOPMENT} disabled={isDisabledDevelopmentPurchase} onClick={() => {
                    player = removeCardsFromPlayer(player, NEEDED_RESOURCES_DEVELOPMENT)
                    setIsDisabledDevPurchase(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_DEVELOPMENT))
                    setPlayer(player)
                }} />
            </div>
            {selectedItem &&
            <>
                {selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem) && selectedItem.owner === player.color && (selectedItem as VillageStatus).level < 2 &&
                        <Action title="Build City" resources={NEEDED_RESOURCES_CITY} disabled={isDisabledCityPurchase} onClick={() => {
                            const item = {...selectedItem} as VillageStatus
                            item.level=2
                            setSelectedItem(item)
                            const updatedVillageStatus = [...villageStatus]
                            updatedVillageStatus[item.id] = item
                            setVillagesStatus(updatedVillageStatus)
                            player = removeCardsFromPlayer(player, NEEDED_RESOURCES_CITY)
                            setIsDisabledCityPurchase(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_CITY))
                            setPlayer(player)
                        }} />
                    }
                    {!isInstanceOfVillage(selectedItem) && selectedItem.owner}
                </div>
                }
                {!selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem) &&
                    <Action title="Build Settlement" resources={NEEDED_RESOURCES_SETTLEMENT} disabled={isDisabledSettlementPurchase} onClick={() => {
                        const item = {...selectedItem} as VillageStatus
                        item.owner=player.color
                        item.level=1
                        setSelectedItem(item)
                        const updatedVillageStatus = [...villageStatus]
                        updatedVillageStatus[item.id] = item
                        setVillagesStatus(updatedVillageStatus)
                        player = removeCardsFromPlayer(player, NEEDED_RESOURCES_SETTLEMENT)
                        setIsDisabledSettlePurchase(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_SETTLEMENT))
                        setPlayer(player)
                    }} />
                    }
                    {!isInstanceOfVillage(selectedItem) &&
                    <Action title="Build Road" resources={NEEDED_RESOURCES_ROAD} disabled={isDisabledRoadPurchase} onClick={() => {
                        const item = {...selectedItem}
                        item.owner=player.color
                        setSelectedItem(item)
                        const updatedRoadStatuses = [...roadStatuses]
                        updatedRoadStatuses[item.id] = item
                        setRoadStatuses(updatedRoadStatuses)
                        player = removeCardsFromPlayer(player, NEEDED_RESOURCES_ROAD)
                        setIsDisabledRoadPurchase(!hasPlayerEnoughResourcesFor(player, NEEDED_RESOURCES_ROAD))
                        setPlayer(player)
                    }} />
                    }
                </div>
                }
            </>
            }
        </div>
    );
}
export default AvailableActions;

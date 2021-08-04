import React, { Dispatch, SetStateAction } from "react"
import Action from "../atom/Action";
import { ClickableItem, isInstanceOfVillage, VillageStatus } from "../domain/ClickableItem";
import { Player } from "../domain/Player";
import { BRICK, GRAIN, LUMBER, ORE, WOOL } from "../domain/Resource";

function AvailableActions(prop:{
    selectedState: [ClickableItem|undefined, Dispatch<SetStateAction<ClickableItem|undefined>>],
    player: Player
}): JSX.Element {
    const { selectedState, player } = prop
    const [ selectedItem, setSelectedItem ] = selectedState
    return(
        <div style={{width:'250px',height:'400px'}}>
            <div>
                <Action title="Player Trade" resources={[]} onClick={() => {}} />
                <Action title="Default Trade" resources={[]} onClick={() => {}} />
                <Action title="Development" resources={[ORE, WOOL, GRAIN]} onClick={() => {}} />
            </div>
            {selectedItem &&
            <>
                {selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem) && selectedItem.owner === player.color && (selectedItem as VillageStatus).level < 2 &&
                        <Action title="Build City" resources={[ORE, ORE, ORE, GRAIN, GRAIN]} onClick={() => {}} />
                    }
                    {!isInstanceOfVillage(selectedItem) && selectedItem.owner}
                </div>
                }
                {!selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem) && <Action title="Build Settlement" resources={[BRICK, LUMBER, WOOL, GRAIN]} onClick={() => {
                        const item = {...selectedItem}
                        item.owner=player.color
                        setSelectedItem(item)
                    }} />}
                    {!isInstanceOfVillage(selectedItem) && <Action title="Build Road" resources={[BRICK, LUMBER]} onClick={() => {}} />}
                </div>
                }
            </>
            }
        </div>
    );
}
export default AvailableActions;

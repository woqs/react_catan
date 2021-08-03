import React, { Dispatch, SetStateAction } from "react"
import Action from "../atom/Action";
import { isInstanceOfVillage } from "../atom/Village";
import { ClickableItem } from "../domain/ClickableItem";

function AvailableActions(prop:{selectedState: [ClickableItem|undefined, Dispatch<SetStateAction<ClickableItem|undefined>>]}): JSX.Element
{
    const { selectedState } = prop
    const [ selectedItem, setSelectedItem ] = selectedState
    return(
        <div style={{width:'200px',height:'400px'}}>
            {selectedItem &&
            <>
                {selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem)}
                    {!isInstanceOfVillage(selectedItem) && selectedItem.owner}
                </div>
                }
                {!selectedItem.owner &&
                <div>
                    {isInstanceOfVillage(selectedItem)}
                    {!isInstanceOfVillage(selectedItem) && <Action title="Road" resources={[]} onClick={() => {}} />}
                </div>
                }
            </>
            }
        </div>
    );
}
export default AvailableActions;

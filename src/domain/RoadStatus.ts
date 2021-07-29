import { ClickableItem } from "./ClickableItem";

export interface RoadStatus extends ClickableItem {}


export function initiateRoadStatus()
{
    const initialVilagesStatuses = Array<RoadStatus>()
    for(let i=0; i < 72; i++) {
        initialVilagesStatuses.push({disabled: false, id: i, isSelected: false})
    }
    return initialVilagesStatuses
}

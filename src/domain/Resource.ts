import { Player } from "./Player"

export const WOOL = "wool"
export const LUMBER = "lumber"
export const ORE = "ore"
export const BRICK = "brick"
export const GRAIN = "grain"
export const NONE = "desert"

export type Resource =
  | typeof WOOL
  | typeof LUMBER
  | typeof ORE
  | typeof BRICK
  | typeof GRAIN
  | typeof NONE;

export const NEEDED_RESOURCES_DEVELOPMENT: Array<Resource> = [ORE, WOOL, GRAIN]
export const NEEDED_RESOURCES_CITY: Array<Resource> = [ORE, ORE, ORE, GRAIN, GRAIN]
export const NEEDED_RESOURCES_SETTLEMENT: Array<Resource> = [BRICK, LUMBER, WOOL, GRAIN]
export const NEEDED_RESOURCES_ROAD: Array<Resource> = [BRICK, LUMBER]

export type NeededResources =
  | typeof NEEDED_RESOURCES_CITY
  | typeof NEEDED_RESOURCES_DEVELOPMENT
  | typeof NEEDED_RESOURCES_ROAD
  | typeof NEEDED_RESOURCES_SETTLEMENT;

function hasPlayerEnoughResourcesFor(player: Player, resources: NeededResources): boolean {
  if (player.cards) {
    const resourcesToTest = [...resources]
    const playerCards = [...player.cards]
    const filtered = resourcesToTest.map((element) => {
      const index = playerCards.indexOf(element)
      if (index > -1) {
        const found = playerCards[index]
        playerCards.splice(playerCards.indexOf(element), 1)
        return found
      }
      return undefined
    })
    return JSON.stringify(filtered) === JSON.stringify(resourcesToTest)
  }
  return false
}
export default hasPlayerEnoughResourcesFor

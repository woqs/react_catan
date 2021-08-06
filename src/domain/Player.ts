import { Development } from "./Development"
import { BRICK, LUMBER, Resource } from "./Resource"

export const PLAYER_RED = "player_red"
export const PLAYER_BLUE = "player_blue"
export const PLAYER_YELLOW = "player_yellow"

export interface Player {
    color: string
    cards?: Array<Resource|Development>
    availableRoads: number
    availableSettlements: number
    availableCities: number
    playedItems?: Array<string>
}

const PlayerColors = [
    PLAYER_BLUE,
    PLAYER_RED,
    PLAYER_YELLOW
]

function generatePlayers(numberOfPlayers: number): Array<Player> {
    const players = Array<Player>()
    for (let i=0; i < numberOfPlayers; i++) {
        players.push({availableRoads: 15, availableSettlements: 5, availableCities: 4, color: PlayerColors[i], cards:[BRICK, LUMBER, BRICK, LUMBER]})
    }
    return players
}
export default generatePlayers

export function removeCardsFromPlayer(player:Player, cards: Array<Resource|Development>): Player {
    const cardsToRemove = [...cards]
    cardsToRemove.forEach((element) => {
        if(player.cards) {
            player.cards.splice(player.cards.indexOf(element),1)
        }
    })
    console.log(player)
    return player
}

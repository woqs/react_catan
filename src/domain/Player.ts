export const PLAYER_RED = "player_red"
export const PLAYER_BLUE = "player_blue"
export const PLAYER_YELLOW = "player_yellow"

export interface Player {
    color: string
    cards?: Array<string>
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
        players.push({availableRoads: 15, availableSettlements: 5, availableCities: 4, color: PlayerColors[i]})
    }
    return players
}
export default generatePlayers

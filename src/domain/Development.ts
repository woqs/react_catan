export const KNIGHT = "knight"
export const PROGRESS = "progress"
export const VICTORY_POINT = "victory point"

export type Development =
    | typeof KNIGHT
    | typeof PROGRESS
    | typeof VICTORY_POINT

function generateStartingDevelopmentCards(): Array<Development> {
    const cards = Array<Development>()
    for (let i=0; i<14; i++) {
        cards.push(KNIGHT)
    }
    for (let i=0; i<6; i++) {
        cards.push(PROGRESS)
    }
    for (let i=0; i<5; i++) {
        cards.push(VICTORY_POINT)
    }
    return cards
}
export default generateStartingDevelopmentCards

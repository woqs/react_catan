import React from "react"
import { Development } from "../domain/Development"
import { Player } from "../domain/Player"
import { Resource } from "../domain/Resource"

function PlayerInformationsDisplay(props: {currentPlayer: Player}): JSX.Element {
    const { currentPlayer } = props
    const { cards, color } = currentPlayer
    return (
        <div>
            Informations :<br />
            Current Player : {color}<br />
            Cards : {cards?.map((card: Resource|Development) => {
                return card.concat(' ')
            })}
        </div>
    )
}
export default PlayerInformationsDisplay

import { BRICK, GRAIN, LUMBER, NONE, ORE, Resource, WOOL } from "./Resource"

export const allProductionCells: Array<Resource> = [
    BRICK,
    BRICK,
    BRICK,
    ORE,
    ORE,
    ORE,
    WOOL,
    WOOL,
    WOOL,
    WOOL,
    LUMBER,
    LUMBER,
    LUMBER,
    LUMBER,
    GRAIN,
    GRAIN,
    GRAIN,
    GRAIN,
]

function GenerateBoardProductionCells(): Array<Resource>
{
    const boardProduction = Array<Resource>();
    const productionCellsToUse = [...allProductionCells];
    var i = 0;
    while (boardProduction.length < 19) {
        if (i === 9) {
            boardProduction.push(NONE);
        } else {
            var randomIndex = Math.floor(Math.random() * productionCellsToUse.length);
            boardProduction.push(productionCellsToUse[randomIndex]);
            productionCellsToUse.splice(randomIndex, 1);
        }
        i = i+1;
    }

    return boardProduction;
}
export default GenerateBoardProductionCells

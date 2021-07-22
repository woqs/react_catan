const PRODUCTION_WOOL = "wool"
const PRODUCTION_LUMBER = "lumber"
const PRODUCTION_ORE = "ore"
const PRODUCTION_BRICK = "brick"
const PRODUCTION_GRAIN = "grain"
export const PRODUCTION_NONE = "desert"

export type ProductionType =
  | typeof PRODUCTION_WOOL
  | typeof PRODUCTION_LUMBER
  | typeof PRODUCTION_ORE
  | typeof PRODUCTION_BRICK
  | typeof PRODUCTION_GRAIN
  | typeof PRODUCTION_NONE;

export const allProductionCells: Array<ProductionType> = [
    PRODUCTION_BRICK,
    PRODUCTION_BRICK,
    PRODUCTION_BRICK,
    PRODUCTION_ORE,
    PRODUCTION_ORE,
    PRODUCTION_ORE,
    PRODUCTION_WOOL,
    PRODUCTION_WOOL,
    PRODUCTION_WOOL,
    PRODUCTION_WOOL,
    PRODUCTION_LUMBER,
    PRODUCTION_LUMBER,
    PRODUCTION_LUMBER,
    PRODUCTION_LUMBER,
    PRODUCTION_GRAIN,
    PRODUCTION_GRAIN,
    PRODUCTION_GRAIN,
    PRODUCTION_GRAIN,
]

function GenerateBoardProductionCells(): Array<ProductionType>
{
    const boardProduction = Array<ProductionType>();
    const productionCellsToUse = [...allProductionCells];
    var i = 0;
    while (boardProduction.length < 19) {
        if (i === 9) {
            boardProduction.push(PRODUCTION_NONE);
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

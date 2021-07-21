import React from "react"
import Cell from "../atom/Cell"
import { ProductionType, PRODUCTION_NONE } from "../domain/ProductionCell"
import '../App.css';

function Board(prop:{productionCells?: Array<ProductionType>}): JSX.Element
{
    const { productionCells } = prop
    return(
        <div className="Board">
            <div className="VillageLine"></div>
            <div className="CellLine">
                <Cell production={ productionCells ? productionCells[0]: undefined } marginLeft={130}/>
                <Cell production={ productionCells ? productionCells[1]: undefined } />
                <Cell production={ productionCells ? productionCells[2]: undefined } />
            </div>
            <div className="VillageLine"></div>
            <div className="CellLine DownCellLine">
                <Cell production={ productionCells ? productionCells[3]: undefined } marginLeft={65}/>
                <Cell production={ productionCells ? productionCells[4]: undefined } />
                <Cell production={ productionCells ? productionCells[5]: undefined } />
                <Cell production={ productionCells ? productionCells[6]: undefined } />
            </div>
            <div className="VillageLine"></div>
            <div className="CellLine DownCellLine">
                <Cell production={ productionCells ? productionCells[7]: undefined } />
                <Cell production={ productionCells ? productionCells[8]: undefined } />
                <Cell production={PRODUCTION_NONE} />
                <Cell production={ productionCells ? productionCells[9]: undefined } />
                <Cell production={ productionCells ? productionCells[10]: undefined } />
            </div>
            <div className="VillageLine"></div>
            <div className="CellLine DownCellLine">
                <Cell production={ productionCells ? productionCells[11]: undefined } marginLeft={65}/>
                <Cell production={ productionCells ? productionCells[12]: undefined } />
                <Cell production={ productionCells ? productionCells[13]: undefined } />
                <Cell production={ productionCells ? productionCells[14]: undefined } />
            </div>
            <div className="VillageLine"></div>
            <div className="CellLine DownCellLine">
                <Cell production={ productionCells ? productionCells[15]: undefined } marginLeft={130} />
                <Cell production={ productionCells ? productionCells[16]: undefined } />
                <Cell production={ productionCells ? productionCells[17]: undefined } />
            </div>
            <div className="VillageLine"></div>
        </div>
    )
}
export default Board

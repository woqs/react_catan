import React from "react"
import Cell from "../atom/Cell"
import { ProductionType } from "../domain/ProductionCell"
import '../App.css';
import Village from "../atom/Village";

function Board(prop:{productionCells?: Array<ProductionType>}): JSX.Element
{
    const { productionCells } = prop
    return(
        <div className="Board">
            <div className="CellLine">
                <Village style={{marginLeft:'115px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[0]: undefined } marginLeft={-80}/>
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[1]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[2]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
            </div>
            <div className="CellLine DownCellLine">
                <Village style={{marginLeft:'50px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[3]: undefined } marginLeft={-80}/>
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[4]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[5]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[6]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
            </div>
            <div className="CellLine DownCellLine">
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[7]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[8]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[9]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[10]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[11]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
            </div>
            <div className="CellLine DownCellLine">
                <Village style={{marginLeft:'-15px', marginTop:'-20px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[12]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[13]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[14]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[15]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
            </div>
            <div className="CellLine DownCellLine">
                <Village style={{marginLeft:'50px', marginTop:'-20px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[16]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[17]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
                <Cell production={ productionCells ? productionCells[18]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}}/>
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}/>
            </div>
            <div className="CellLine DownCellLine">
                <Village style={{marginLeft:'115px', marginTop:'-35px'}}/>
                <Village style={{marginLeft:'36px', marginTop:'8px'}}/>
                <Village style={{marginLeft:'36px', marginTop:'-35px'}}/>
                <Village style={{marginLeft:'37px', marginTop:'8px'}}/>
                <Village style={{marginLeft:'37px', marginTop:'-35'}}/>
                <Village style={{marginLeft:'37px', marginTop:'8px'}}/>
                <Village style={{marginLeft:'37px', marginTop:'-35px'}}/>
            </div>
        </div>
    )
}
export default Board

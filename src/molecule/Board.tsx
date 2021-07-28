import React, { Dispatch, SetStateAction } from "react"
import Cell from "../atom/Cell"
import { ProductionType } from "../domain/ProductionCell"
import '../App.css';
import Village from "../atom/Village";
import { getArroundVillagesIds, VillageStatus } from "../domain/VillagesStatus";
import { ClickableItem } from "../domain/ClickableItem";
import Road from "../atom/Road";

function Board(prop:{
    productionCells?: Array<ProductionType>,
    villageStatusState: [Array<VillageStatus>, Dispatch<SetStateAction<Array<VillageStatus>>>],
    selectedItemState: [ClickableItem|undefined, Dispatch<SetStateAction<ClickableItem|undefined>>],
}): JSX.Element {
    const { productionCells, villageStatusState, selectedItemState } = prop
    const [villageStatus, setVillagesStatus] = villageStatusState
    const [selectedItem, setSelectedItem] = selectedItemState
    function isInstanceOfVillage(object: ClickableItem) {
        return 'level' in object
    }

    function resetSelected(newSelected: ClickableItem) {
        const villages = [...villageStatus]
        for (let i=0; i<villages.length; i++) {
            const village = villages[i]
            village.isSelected = false
            villages[i] = village
        }
        if(newSelected && isInstanceOfVillage(newSelected)) {
            const village = villages[newSelected.id]
            village.isSelected = true
            villages[newSelected.id] = village
        }
        setVillagesStatus(villages)
    }

    function onVillageClick(id: number) {
        let aroundVillagesIds = getArroundVillagesIds(id)
        let newVillageStatuses = [...villageStatus]
        for (let i = 0; i < aroundVillagesIds.length; i++) {
            let villageId = aroundVillagesIds[i]
            const village = newVillageStatuses[villageId]
            village.disabled = true
            newVillageStatuses[villageId] = village
        }
        setVillagesStatus(newVillageStatuses)
        setSelectedItem(newVillageStatuses[id])
        resetSelected(newVillageStatuses[id])
    }

    return(
        <div className="Board">
            <div className="RoadLine">
                <Road position="RoadUpward" style={{marginLeft:'115px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
            </div>
            <div className="CellLine">
                <Village style={{marginLeft:'115px', marginTop:'23px'}} statuses={villageStatus} id={0} onClick={() => onVillageClick(0)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={1} onClick={() => onVillageClick(1)} />

                <Cell production={ productionCells ? productionCells[0]: undefined } marginLeft={-80}/>

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={2} onClick={() => onVillageClick(2)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={3} onClick={() => onVillageClick(3)} />

                <Cell production={ productionCells ? productionCells[1]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={4} onClick={() => onVillageClick(4)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={5} onClick={() => onVillageClick(5)} />

                <Cell production={ productionCells ? productionCells[2]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={6} onClick={() => onVillageClick(6)} />
            </div>
            <div className="RoadLine DownCellLine">
                <Road position="RoadUpward" style={{marginLeft:'50px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
            </div>
            <div className="CellLine">
                <Village style={{marginLeft:'50px', marginTop:'23px'}}  statuses={villageStatus} id={7} onClick={() => onVillageClick(7)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={8} onClick={() => onVillageClick(8)} />

                <Cell production={ productionCells ? productionCells[3]: undefined } marginLeft={-80}/>

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={9} onClick={() => onVillageClick(9)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={10} onClick={() => onVillageClick(10)} />

                <Cell production={ productionCells ? productionCells[4]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={11} onClick={() => onVillageClick(11)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={12} onClick={() => onVillageClick(12)} />

                <Cell production={ productionCells ? productionCells[5]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={13} onClick={() => onVillageClick(13)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={14} onClick={() => onVillageClick(14)} />

                <Cell production={ productionCells ? productionCells[6]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={15} onClick={() => onVillageClick(15)} />
            </div>
            <div className="RoadLine DownCellLine">
                <Road position="RoadUpward" style={{marginLeft:'-15px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'10px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
            </div>
            <div className="CellLine">
                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={16} onClick={() => onVillageClick(16)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={17} onClick={() => onVillageClick(17)} />

                <Cell production={ productionCells ? productionCells[7]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={18} onClick={() => onVillageClick(18)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={19} onClick={() => onVillageClick(19)} />

                <Cell production={ productionCells ? productionCells[8]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={20} onClick={() => onVillageClick(20)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={21} onClick={() => onVillageClick(21)} />

                <Cell production={ productionCells ? productionCells[9]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={22} onClick={() => onVillageClick(22)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={23} onClick={() => onVillageClick(23)} />

                <Cell production={ productionCells ? productionCells[10]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={24} onClick={() => onVillageClick(24)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={25} onClick={() => onVillageClick(25)} />

                <Cell production={ productionCells ? productionCells[11]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={26} onClick={() => onVillageClick(26)}/>
            </div>
            <div className="RoadLine DownCellLine">
                <Road position="RoadTopRight" style={{marginLeft:'15px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
            </div>
            <div className="CellLine">
                <Village style={{marginLeft:'-15px', marginTop:'-20px'}} statuses={villageStatus} id={27} onClick={() => onVillageClick(27)} />
                <Village style={{marginLeft:'35px', marginTop:'23px'}}   statuses={villageStatus} id={28} onClick={() => onVillageClick(28)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}}  statuses={villageStatus} id={29} onClick={() => onVillageClick(29)} />

                <Cell production={ productionCells ? productionCells[12]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={30} onClick={() => onVillageClick(30)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={31} onClick={() => onVillageClick(31)} />

                <Cell production={ productionCells ? productionCells[13]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={32} onClick={() => onVillageClick(32)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={33} onClick={() => onVillageClick(33)} />

                <Cell production={ productionCells ? productionCells[14]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={34} onClick={() => onVillageClick(34)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={35} onClick={() => onVillageClick(35)} />

                <Cell production={ productionCells ? productionCells[15]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={36} onClick={() => onVillageClick(36)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={37} onClick={() => onVillageClick(37)} />
            </div>
            <div className="RoadLine DownCellLine">
                <Road position="RoadTopRight" style={{marginLeft:'80px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}} />
            </div>
            <div className="CellLine">
                <Village style={{marginLeft:'50px', marginTop:'-20px'}} statuses={villageStatus} id={38} onClick={() => onVillageClick(38)} />
                <Village style={{marginLeft:'35px', marginTop:'23px'}}  statuses={villageStatus} id={39} onClick={() => onVillageClick(39)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={40} onClick={() => onVillageClick(40)} />

                <Cell production={ productionCells ? productionCells[16]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={41} onClick={() => onVillageClick(41)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={42} onClick={() => onVillageClick(42)} />

                <Cell production={ productionCells ? productionCells[17]: undefined } marginLeft={-80} />
                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={43} onClick={() => onVillageClick(43)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={44} onClick={() => onVillageClick(44)} />

                <Cell production={ productionCells ? productionCells[18]: undefined } marginLeft={-80} />

                <Village style={{marginLeft:'-15px', marginTop:'23px'}} statuses={villageStatus} id={45} onClick={() => onVillageClick(45)} />
                <Village style={{marginLeft:'35px', marginTop:'-20px'}} statuses={villageStatus} id={46} onClick={() => onVillageClick(46)} />
            </div>
            <div className="CellLine" style={{marginTop: '-10px'}}>
                <Village style={{marginLeft:'115px', marginTop:'-35px'}} statuses={villageStatus} id={47} onClick={() => onVillageClick(47)} />
                <Village style={{marginLeft:'36px', marginTop:'8px'}}    statuses={villageStatus} id={48} onClick={() => onVillageClick(48)} />
                <Village style={{marginLeft:'36px', marginTop:'-35px'}}  statuses={villageStatus} id={49} onClick={() => onVillageClick(49)} />
                <Village style={{marginLeft:'37px', marginTop:'8px'}}    statuses={villageStatus} id={50} onClick={() => onVillageClick(50)} />
                <Village style={{marginLeft:'37px', marginTop:'-35px'}}  statuses={villageStatus} id={51} onClick={() => onVillageClick(51)} />
                <Village style={{marginLeft:'37px', marginTop:'8px'}}    statuses={villageStatus} id={52} onClick={() => onVillageClick(52)} />
                <Village style={{marginLeft:'37px', marginTop:'-35px'}}  statuses={villageStatus} id={53} onClick={() => onVillageClick(53)} />
            </div>
            <div className="RoadLine" style={{marginTop: '-55px'}}>
                <Road position="RoadTopRight" style={{marginLeft:'150px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'30px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'40px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'35px'}} />
                <Road position="RoadTopRight" style={{marginLeft:'40px'}} />
                <Road position="RoadTopLeft" style={{marginLeft:'35px'}} />
            </div>
        </div>
    )
}
export default Board

import React, { Dispatch, SetStateAction } from "react"
import Cell from "../atom/Cell"
import '../App.css';
import Village, { isInstanceOfVillage } from "../atom/Village";
import { getArroundVillagesIds, VillageStatus } from "../domain/VillagesStatus";
import { ClickableItem } from "../domain/ClickableItem";
import Road from "../atom/Road";
import { RoadStatus } from "../domain/RoadStatus";
import { Resource } from "../domain/Resource";

function Board(prop:{
    productionCells?: Array<Resource>,
    villageStatusState: [Array<VillageStatus>, Dispatch<SetStateAction<Array<VillageStatus>>>],
    roadStatusState: [Array<RoadStatus>, Dispatch<SetStateAction<Array<RoadStatus>>>],
    selectedItemSetter: Dispatch<SetStateAction<ClickableItem|undefined>>,
}): JSX.Element {
    const { productionCells, villageStatusState, selectedItemSetter, roadStatusState } = prop
    const [villageStatus, setVillagesStatus] = villageStatusState
    const [roadStatuses, setRoadStatuses] = roadStatusState

    function resetSelected(newSelected: ClickableItem) {
        const villages = [...villageStatus]
        for (let i=0; i<villages.length; i++) {
            const village = villages[i]
            village.isSelected = false
            villages[i] = village
        }
        const roads = [...roadStatuses]
        for (let i=0; i<roads.length; i++) {
            const road = roads[i]
            road.isSelected = false
            roads[i] = road
        }
        if(newSelected && isInstanceOfVillage(newSelected)) {
            const village = villages[newSelected.id]
            village.isSelected = true
            villages[newSelected.id] = village
        } else if (newSelected) {
            const road = roads[newSelected.id]
            road.isSelected = true
            roads[newSelected.id] = road
        }
        setRoadStatuses(roads)
        setVillagesStatus(villages)
    }

    function onVillageClick(id: number) {
        let aroundVillagesIds = getArroundVillagesIds(id)
        let newVillageStatuses = [...villageStatus]
        for (let i = 0; i < aroundVillagesIds.length; i++) {
            const villageId = aroundVillagesIds[i]
            const village = newVillageStatuses[villageId]
            village.disabled = true
            newVillageStatuses[villageId] = village
        }
        setVillagesStatus(newVillageStatuses)
        selectedItemSetter(newVillageStatuses[id])
        resetSelected(newVillageStatuses[id])
    }

    function onRoadClick(id: number) {
        selectedItemSetter(roadStatuses[id])
        resetSelected(roadStatuses[id])
    }

    return(
        <div className="Board">
            <div className="RoadLine">
                <Road position="RoadUpward" style={{marginLeft:'115px'}}  roadStatus={roadStatuses[0]} onClick={() => onRoadClick(0)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[1]} onClick={() => onRoadClick(1)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[2]} onClick={() => onRoadClick(2)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[3]} onClick={() => onRoadClick(3)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[4]} onClick={() => onRoadClick(4)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[5]} onClick={() => onRoadClick(5)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[6]} onClick={() => onRoadClick(6)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[7]} onClick={() => onRoadClick(7)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[8]} onClick={() => onRoadClick(8)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[9]} onClick={() => onRoadClick(9)} />
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
                <Road position="RoadUpward" style={{marginLeft:'50px'}}   roadStatus={roadStatuses[10]} onClick={() => onRoadClick(10)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[11]} onClick={() => onRoadClick(11)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[12]} onClick={() => onRoadClick(12)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[13]} onClick={() => onRoadClick(13)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[14]} onClick={() => onRoadClick(14)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[15]} onClick={() => onRoadClick(15)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[16]} onClick={() => onRoadClick(16)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[17]} onClick={() => onRoadClick(17)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[18]} onClick={() => onRoadClick(18)} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}}    roadStatus={roadStatuses[19]} onClick={() => onRoadClick(19)} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}}   roadStatus={roadStatuses[20]} onClick={() => onRoadClick(20)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[21]} onClick={() => onRoadClick(21)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[22]} onClick={() => onRoadClick(22)} />
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
                <Road position="RoadUpward" style={{marginLeft:'-15px'}}  roadStatus={roadStatuses[23]} onClick={() => onRoadClick(23)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[24]} onClick={() => onRoadClick(24)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[25]} onClick={() => onRoadClick(25)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[26]} onClick={() => onRoadClick(26)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[27]} onClick={() => onRoadClick(27)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[28]} onClick={() => onRoadClick(28)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[29]} onClick={() => onRoadClick(29)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[30]} onClick={() => onRoadClick(30)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[31]} onClick={() => onRoadClick(31)} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}}    roadStatus={roadStatuses[32]} onClick={() => onRoadClick(32)} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}}   roadStatus={roadStatuses[33]} onClick={() => onRoadClick(33)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[34]} onClick={() => onRoadClick(34)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[35]} onClick={() => onRoadClick(35)} />
                <Road position="RoadTopLeft" style={{marginLeft:'10px'}}  roadStatus={roadStatuses[36]} onClick={() => onRoadClick(36)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[37]} onClick={() => onRoadClick(37)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[38]} onClick={() => onRoadClick(38)} />
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
                <Road position="RoadTopRight" style={{marginLeft:'15px'}} roadStatus={roadStatuses[39]} onClick={() => onRoadClick(39)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[40]} onClick={() => onRoadClick(40)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[41]} onClick={() => onRoadClick(41)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[42]} onClick={() => onRoadClick(42)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[43]} onClick={() => onRoadClick(43)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[44]} onClick={() => onRoadClick(44)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[45]} onClick={() => onRoadClick(45)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[46]} onClick={() => onRoadClick(46)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[47]} onClick={() => onRoadClick(47)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[48]} onClick={() => onRoadClick(48)} />
                <Road position="RoadUpward" style={{marginLeft:'6px'}}    roadStatus={roadStatuses[49]} onClick={() => onRoadClick(49)} />
                <Road position="RoadTopLeft" style={{marginLeft:'7px'}}   roadStatus={roadStatuses[50]} onClick={() => onRoadClick(50)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[51]} onClick={() => onRoadClick(51)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[52]} onClick={() => onRoadClick(52)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[53]} onClick={() => onRoadClick(53)} />
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
                <Road position="RoadTopRight" style={{marginLeft:'80px'}} roadStatus={roadStatuses[54]} onClick={() => onRoadClick(54)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[55]} onClick={() => onRoadClick(55)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[56]} onClick={() => onRoadClick(56)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[57]} onClick={() => onRoadClick(57)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[58]} onClick={() => onRoadClick(58)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[59]} onClick={() => onRoadClick(59)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[60]} onClick={() => onRoadClick(60)} />
                <Road position="RoadUpward" style={{marginLeft:'10px'}}   roadStatus={roadStatuses[61]} onClick={() => onRoadClick(61)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[62]} onClick={() => onRoadClick(62)} />
                <Road position="RoadTopRight" style={{marginLeft:'30px'}} roadStatus={roadStatuses[63]} onClick={() => onRoadClick(63)} />
                <Road position="RoadUpward" style={{marginLeft:'5px'}}    roadStatus={roadStatuses[64]} onClick={() => onRoadClick(64)} />
                <Road position="RoadTopLeft" style={{marginLeft:'5px'}}   roadStatus={roadStatuses[65]} onClick={() => onRoadClick(65)} />
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
                <Road position="RoadTopRight" style={{marginLeft:'150px'}} roadStatus={roadStatuses[66]} onClick={() => onRoadClick(66)} />
                <Road position="RoadTopLeft" style={{marginLeft:'30px'}}   roadStatus={roadStatuses[67]} onClick={() => onRoadClick(67)} />
                <Road position="RoadTopRight" style={{marginLeft:'40px'}}  roadStatus={roadStatuses[68]} onClick={() => onRoadClick(68)} />
                <Road position="RoadTopLeft" style={{marginLeft:'35px'}}   roadStatus={roadStatuses[69]} onClick={() => onRoadClick(69)} />
                <Road position="RoadTopRight" style={{marginLeft:'40px'}}  roadStatus={roadStatuses[70]} onClick={() => onRoadClick(70)} />
                <Road position="RoadTopLeft" style={{marginLeft:'35px'}}   roadStatus={roadStatuses[71]} onClick={() => onRoadClick(71)} />
            </div>
        </div>
    )
}
export default Board

import React from "react";
import '../App.css';
import { Resource } from "../domain/Resource";

const DICE_VALUES = [
    10,
    2,
    9,
    12,
    6,
    4,
    10,
    9,
    11,
    undefined,
    3,
    8,
    8,
    3,
    4,
    5,
    5,
    6,
    11,
]

export const MAPPING_VILLAGE_AROUND_DICE_VALUE = [
    [0,1,2,8,9,10],
    [2,3,4,10,11,12],
    [4,5,6,12,13,14],
    [7,8,9,17,18,19],
    [9,10,11,19,20,21],
    [11,12,13,21,22,23],
    [13,14,15,23,24,25],
    [16,17,18,27,28,29],
    [18,19,20,29,30,31],
    undefined,
    [22,23,24,33,34,35],
    [24,25,26,35,36,37],
    [28,29,30,38,39,40],
    [30,31,32,40,41,42],
    [32,33,34,42,43,44],
    [34,35,36,44,45,46],
    [39,40,41,47,48,49],
    [41,42,43,49,50,51],
    [43,44,45,51,52,53],
]

function Cell(prop: { marginLeft?: number, production?: Resource, id: number }): JSX.Element
{
    const { marginLeft, production, id } = prop;
    const marginText = marginLeft ? marginLeft.toString().concat('px')  : ""
    const classToBeAdded = production ? production : ""
    return(
        <div className={"RoundCell ".concat(classToBeAdded)} style={{marginLeft: marginText}}>
            <div style={{ marginTop:"60px", fontWeight: "bold" }}>
                {DICE_VALUES[id]}
            </div>
        </div>
    )
}
export default Cell

import React from "react";
import '../App.css';
import { ProductionType } from "../domain/ProductionCell";

function Cell(prop: { marginLeft?: number, production?: ProductionType }): JSX.Element
{
    const { marginLeft, production } = prop;
    const marginText = marginLeft ? marginLeft.toString().concat('px')  : ""
    const classToBeAdded = production ? production : ""
    return(
        <div className={"RoundCell ".concat(classToBeAdded)} style={{marginLeft: marginText}}>
        </div>
    )
}
export default Cell

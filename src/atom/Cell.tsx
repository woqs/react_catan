import React from "react";
import '../App.css';
import { Resource } from "../domain/Resource";

function Cell(prop: { marginLeft?: number, production?: Resource }): JSX.Element
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

import React from "react"
import { Resource } from "../domain/Resource";

function Action(prop: {title: string, resources: Array<Resource>, onClick: CallableFunction}): JSX.Element {
    const { title, resources, onClick } = prop
    return (
        <div>
            <div>{title} <button type="button" onClick={() => onClick()}>Build</button></div>
            <div>Resources : </div>
        </div>
    );
}
export default Action

import React from "react"
import { Resource } from "../domain/Resource";

function Action(prop: {title: string, resources: Array<Resource>, onClick: CallableFunction, disabled?: boolean}): JSX.Element {
    const { title, resources, onClick, disabled } = prop
    return (
        <div>
            <button disabled={disabled} style={{width:'100%'}} type="button" onClick={() => onClick()}>{title}</button>
            { resources.length > 0 && <div>Resources : <br/>{resources.map((resource) => { return resource })}</div> }
        </div>
    );
}
export default Action

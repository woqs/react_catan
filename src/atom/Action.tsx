import React from "react"
import { Resource } from "../domain/Resource";

function Action(prop: {title: string, resources: Array<Resource>, onClick: CallableFunction}): JSX.Element {
    const { title, resources, onClick } = prop
    return (
        <div>
            <div><button style={{width:'100%'}} type="button" onClick={() => onClick()}>{title}</button></div>
            { resources.length > 0 && <div>Resources : <br/>{resources.map((resource) => { return resource })}</div> }
        </div>
    );
}
export default Action

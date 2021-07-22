import { CSSProperties } from "react";

function Village(prop: {style?: CSSProperties}): JSX.Element
{
    const { style } = prop
    return (
        <button className='Village' style={style} />
    );
}

export default Village

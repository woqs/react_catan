function Village(prop: {className: string}): JSX.Element
{
    const { className } = prop
    return (
        <button className={className} />
    );
}

export default Village

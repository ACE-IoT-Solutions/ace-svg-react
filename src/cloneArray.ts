const cloneArray = (array: unknown[]) => {
    const cloned: unknown[] = [];
    array.forEach((item: unknown) => {
        cloned.push(item);
    })
    return cloned;
}

export default cloneArray;
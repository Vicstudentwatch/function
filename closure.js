const outerFunc = (x) => {
    const innerFunc = (y) => {
        return x + y;
    }
    return innerFunc;
}

const outerFunction = outerFunc(3);
console.log(outerFunction);
console.log(outerFunction(2));
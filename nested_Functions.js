const outerFunc = () =>{
    console.log("outer");
    const inneFunc = () => console.log("inner");
    inneFunc();
}
outerFunc();
const repeatFunction = (fun,n) => {
    for(let i=0;i<n;i++){
        fun();
    }
}

const func = () =>{
    console.log("hi");
}

repeatFunction(func,10)
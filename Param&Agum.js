//PARAMETER
//when declaring a function
function printX(paramX){
    console.log("declaring and calling a function : " + paramX);
}

//argument
//when calling a function
printX('x')

// default parameters
const addDoubledNumber=(a,b=0)=>{
    console.log("default Parameters: " + 2*(a+b));
}
addDoubledNumber(3);
addDoubledNumber(5,6);

//rest parameters
//A function can only have one rest parameter

const RestParam = ( a,...b) => {
    console.log("rest parameters : ");
    console.log(a,",",b);
}
RestParam(1,2,34,54,4,5,6,6,7,7,4)



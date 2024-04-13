// const AddArray = (arr,...arr2) => {
//     let arr3 = arr2.join();
//     console.log(arr.concat(arr3.split(",")).join(" "));
// }
// console.log(AddArray([1,6,8,9,6],23,3,4,4,5,6,7,88));
let firstNumber = 2;
let SecondNumber = 3;
let sign = '-';

const simpleCalcFunction = (num1,num2,sign) => {
    let sum;

    switch (sign) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 + num2;
            break;
        case '*':
            sum = num1 + num2;
            break;
        case '/':
            sum = num1 + num2;
            break;
    
        default:
            console.log("error");
            break;
    }  
    console.log(sum);  

}
simpleCalcFunction(firstNumber,SecondNumber,sign);


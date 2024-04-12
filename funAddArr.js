const AddArray = (arr,...arr2) => {
    let arr3 = arr2.join();
    console.log(arr.concat(arr3.split(",")).join(" "));
}
console.log(AddArray([1,6,8,9,6],23,3,4,4,5,6,7,88));
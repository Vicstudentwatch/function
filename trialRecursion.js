let x = 0;

const recursion = (n) =>{
   if(n===0){
    return;
   }
    x += n;
    recursion(n-1);
    return x;
}
console.log(recursion(3));

// function to find sum of any numbers using rest and spread operator.

function sum(...a){
    const sum = a.reduce((i, s)=>(s+i));
    return sum;
    
}
function sum2(...a){
    let summ = 0;
    for(i of a){
        summ = summ + i;
    }
    return summ;
}
console.log(sum2(1,2,3,4));

console.log("Sum = ",sum(1,2,3,2,4,6,7,8));

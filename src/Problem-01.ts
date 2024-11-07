
//problem-01
//sum of array elements
function sumArray(arr:number[]):number{
    let sum=0;
    for(let value of arr){ sum+=value; }
    return sum;
}

// console.log(sumArray([1,2,3,4,5]));
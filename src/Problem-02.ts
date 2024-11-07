//problem-02
//remove duplicates from the number array
//solving with the set

function removeDuplicates(arr:number[]):number[]{
    const uniqueArray=[...new Set(arr)];
    return uniqueArray;
}
// console.log(removeDuplicates([1,2,2,3,2,3,4,5]));
/* let n = 10;
let sum = 0;
for(let i = 1; i <= n; i++){
    sum = sum + i
}
console.log(sum) */


let arr = [3, 5, 6, 5]

function getSum(arr){
    let sum =0
    for(let i = 0; i < arr.length; i++){
        const index = i
        const element = arr[index]
        sum = sum + element
        // console.log(element)
    }
    return sum
}
const myNumber = getSum(arr)
console.log(myNumber)



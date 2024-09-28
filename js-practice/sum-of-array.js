/* const num = [3, 5, 6, 6]
function getSum(num){
    let sum = 0
    for(let i=0; i<num.length; i++){
        const element = num[i]
        sum +=element

    }
    return sum
}
const result = getSum(num)
console.log(result) */

const num = [3, 5, 6, 6, 7]
function getSum(num){
    let oddNum =[]
    for(let i=0; i<num.length; i++){
        const element = num[i]
        
        if(element % 2 !== 0){
            oddNum.push(element)
        }
        
    }
    return oddNum
  
}
const result = getSum(num)
console.log(result)
let num = [4, 5, 6, 7]
function arrAvg(num){
    let sum = 0
    for(let i=0; i<num.length; i++){
        const element = num[i]
        sum += element
    }
    return (sum/num.length)
}
let result = arrAvg(num)
console.log(result)
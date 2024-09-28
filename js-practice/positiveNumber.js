let num = [3, 5, 7, 22, 5, -5, -7, 4,8]
function positiveNumbers(num){

    let newArr = []
    for(let i =0; i<num.length; i++){
        const element = num[i]
        if(element >= 0){
            newArr.push(element)
        }else if(element < 0){
            break
        }
    }
    return newArr
}
let result = positiveNumbers(num)
console.log(result)
function radianToDegree(radian){
    const PI = 3.1416
    degree = (radian * (180/PI)).toFixed(2)
    return degree
}
let result = radianToDegree(1)
console.log(result)
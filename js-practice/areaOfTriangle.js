function areaOfTriangle(a, b, c){
    s = (a+b+c)/2
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c)) 
    return area
}
let result = areaOfTriangle(3, 4, 5)
console.log(result)

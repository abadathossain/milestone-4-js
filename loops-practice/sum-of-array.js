
let myNumbers = [4, 5, 6, 7]
function getArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(sum)
    }
    // return sum
}

getArray(myNumbers)
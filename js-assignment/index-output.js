/* Problem 1:
simplification of a function which is follow the BODMAS rules. Input number always positive
 */
function mindGame(number) {
    if ((typeof number !== 'number') || number == null || number == "" || number <= 0) {
        return "Please provide valid input";
    }
    const result = (((number * 3) + 10) / 2) - 5;

    return result;
}
// const output = mindGame(33);
// console.log(output);


/* Problem 2:
simplification of a function which is follow the string length rules. Input number always string if input any number than waring for valid input
 */
function evenOdd(str) {
    const strLength = str.length;
    if ((typeof str !== 'string') || str == "" || str == 'number' || str == null) {
        return "Please provide valid input";
    }
    if (strLength % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }

}
// const result = evenOdd('Batch7');
// console.log(result);

/* Problem 3:
this function is a simplification rules follow and if input without number than waring for valid input
 */
function isLGSeven(number) {
    if ((typeof number !== 'number') || number == null || number == "") {
        return "Please provide valid input";
    }
    const result = number - 7;
    if (result < 7) {
        return result;
    } else {
        return (number * 2);
    }
}
// const output1 = isLGSeven(15);
// console.log(output1);

/* Problem 4:
this function is a simplification rules follow the array rules. if input any negative data than output is number of bad data
 */
function findingBadData(array) {
    if (array.length == 0) {
        return "Please provide valid input";
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            count++;
        }
    }
    return count;
}
// const array = [2, -5, -7, -13];
// const result2 = findingBadData(array);
// console.log(result2);

/* Problem 5:
this function is a simplification rules follow the distribution rules.
 */

function gemsToDiamond(firstFrndGems, secondFrndGems, thirdFrndGems) {
    if (typeof firstFrndGems !== 'number' || typeof secondFrndGems !== 'number' || typeof thirdFrndGems !== 'number'){
        return "Please provide valid input";
    }
    const result = (firstFrndGems * 21) + (secondFrndGems * 32) + (thirdFrndGems * 43);
    if (result > 2000) {
        return (result - 2000);
    } else if (result < 1000) {
        return result;
    }
}
const output2 = gemsToDiamond(1,1,1);
console.log(output2);

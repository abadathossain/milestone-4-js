function mindGame(number) {
    if ((typeof number !== 'number') || number == null || number == "" || number <= 0) {
        return "Please provide valid input";
    }
    const result = ((number * 3) + 10) / 2 - 5;

    return result;
}
const output = mindGame(-15);
console.log(output);

// -------------------------------------------------------

function evenOdd(str) {
    const strLength = str.length;
    if ((typeof str !== 'string') || str == "") {
        return "Please provide valid input";
    }
    if (strLength % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }

}
const result = evenOdd('Batch7');
console.log(result);

// ----------------------------------------

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
const output1 = isLGSeven(6);
console.log(output1);

// --------------------------------------


function findingBadData(array) {

    if ((typeof array[i] !== 'number') || array[i] == null || array[i] == "") {
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

const array = [2, -5, -7, -13];
const result2 = findingBadData(array);
console.log(result2);
// ------------------------------------------------------------

function gemsToDiamond(firstFrndGems, secondFrndGems, thirdFrndGems) {
   /*  if ((typeof (firstFrndGems || secondFrndGems || thirdFrndGems) !== 'number') || (firstFrndGems || secondFrndGems || thirdFrndGems) == null || (firstFrndGems || secondFrndGems || thirdFrndGems) == "") {
        return "Please provide valid input";
    } */
    const result = (firstFrndGems * 21) + (secondFrndGems * 32) + (thirdFrndGems * 43);
    if (result > 2000) {
        return (result - 2000);
    } else if (result < 1000) {
        return result;
    }


}
const output2 = gemsToDiamond(1, 1, 1);
console.log(output2);

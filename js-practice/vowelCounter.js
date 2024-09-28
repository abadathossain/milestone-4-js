
function countVowel(letter) {
  
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ){
    return 'vowel'
}else{
    return 'consonant'
}

}
let result =  countVowel('i')
console.log(result)

// crackerz solution

const solution = (letter)=> {
    //Write Your solution Here
   //dont forget to return
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ){
      return 'vowel'
  }else{
      return 'consonant'
  }
  };

  let result1 =  solution('k')
console.log(result1)

//------------------------------------------------------

/* const vowels = ["a", "e", "i", "o", "u"]

function countVowel(vowel) {
  
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}


const result = countVowel("Enter a string");

console.log(result); */



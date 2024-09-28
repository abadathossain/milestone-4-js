let nameOne = "Abadat"
let nameTwo = "Mukta"

let nameOneLength = nameOne.length
let nameTwoLength = nameTwo.length
if(nameOneLength > nameTwoLength){
    // console.log(nameOne.split(""))
    console.log(nameOne.split('').reverse().join(''))
}else{
    console.log(nameTwo.split('').reverse().join(''))
}
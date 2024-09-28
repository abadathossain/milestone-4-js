function reverseName(nameOne, nameTwo){
    let nameOneLength = nameOne.length
    let nameTwoLength = nameTwo.length
    if(nameOneLength > nameTwoLength){
        return nameOne.split("").reverse().join("")
    }else{
        return nameTwo.split("").reverse().join("")
    }
}
let result = reverseName('Abadat', 'Farzifarah')

console.log(result)


function largestFriend(names){
    let largest = names[0]
    for(let i=0; i<names.length; i++){
        const element = names[i]
        if(largest.length < element.length){
            largest = element
        }
        
    }
    return largest
}
let names = ["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]
let result = largestFriend(names)

console.log(result)


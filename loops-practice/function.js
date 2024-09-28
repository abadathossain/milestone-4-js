/* function bar(){
    console.log('bar')
}
function foo(){
    console.log('foo')
    bar()
}
// foo() */

/* const userName = "AbdulKarim"
const inputName = "abdulKariM"
if(userName.toLowerCase() === inputName.toLowerCase()){
    console.log('Valid User')
}else{
    console.log("Invalid User")
} */

let first = 5;
let second = 7;
console.log(first, second)

const temp = first;
first = second;
second = temp;
console.log(first, second)

console.log(Math.round(Math.random()*10) )

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))
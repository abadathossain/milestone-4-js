function isJavaScriptFile(fileName){
   if(fileName.endsWith("index.js")){
    return true
   }else{
    return false
   }
}
let result = isJavaScriptFile("index.js")
console.log(result)
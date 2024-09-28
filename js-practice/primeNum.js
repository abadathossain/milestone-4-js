/* function primeNum(n){
    if(n<=1){
        console.log('No')
    }
    for(let i=2; i<n; i++){
        if(n%i == 0){
            console.log('yes', i)
            
            
        }else{
            console.log('No', i)
        }
    }
    
}

primeNum(20) */




function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

// Driver Code

isPrime(15) 
    ? console.log("true") 
    : console.log("false");
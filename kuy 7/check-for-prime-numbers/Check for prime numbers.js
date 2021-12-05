function isPrime(n) {
    if(n===0){
        return false
    }
    if (n === 2) {
        return true
    }
    if(n===1){
        return false
    }
    for (let i = 3; i <n ; i+=2) {
        if (Number.isInteger(n / i))
            return false
    }
    return true
    }

console.log(isPrime(0)) // false
console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(11))// true
console.log(isPrime(12))// false
console.log(isPrime(61))// true
console.log(isPrime(571))// true
console.log(isPrime(573))// false
console.log(isPrime(25))//false

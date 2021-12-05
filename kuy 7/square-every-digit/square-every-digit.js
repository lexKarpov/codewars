function squareDigits(num){
    let numSting= num.toString()
    let digits = numSting.split('');
    for (let i = 0; i < digits.length; i++) {
        digits[i] = digits[i]**2
    }


    return +digits.join('')
}









console.log(squareDigits(3212)) // 9414

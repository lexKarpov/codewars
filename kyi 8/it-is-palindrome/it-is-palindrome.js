function isPalindrome(x) {
    let result =0
    x = x.toLowerCase();
    let splitx = x.split('') //arrow
    for (let i = 0; i < splitx.length; i++) {
        if (splitx[i-1] === splitx[splitx.length-i]){
            result = result + 1
        }

    }
    if(result === splitx.length){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('Кучук'))
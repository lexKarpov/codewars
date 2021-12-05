function digPow(n, p){
    nSplit = n.split('')
    let res = [];
    for (let i = 0; i < nSplit.length; i){
        res += nSplit[i]**i
    }
}

digPow('8923', 1)
function removeExclamationMarks(s) {
    let res = []
    let sSplit = s.split('')
    for (let i = 0; i < sSplit.length; i++) {
        if(sSplit[i]!=='!'){
            res.push(sSplit[i])
        }
    }


    return res.join('');
}

console.log(removeExclamationMarks('Пидорам - на волю!'))
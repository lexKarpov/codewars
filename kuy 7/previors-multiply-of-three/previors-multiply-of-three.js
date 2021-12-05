function prevMultOfThree (n){
    let nStr = n.toString();
    let nSplit = nStr.split('')
    for (let i = nSplit.length; i >=0; i--) {
        if(+nSplit.join('') % 3!==0){
            nSplit.splice(i, 1)
        }

    }
    if(nSplit.length===0){
        return null
    }
    return +nSplit.join('')
}

console.log(prevMultOfThree( 36))

function bump(x){
    let xSplit = x.split('')
    let bump = 0
    let equal = 0
    for (let i = 0; i < xSplit.length; i++) {
        if(xSplit[i]=== 'n'){
            bump+=1
        }else {
            equal+=1
        }
    }
    if (bump < 15){
        return 'Woohoo!'
    }else {
        return 'Car Dead'
    }
}

console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
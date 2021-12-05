function createArrayOfTiers(num) {
    let array = []
    let numStr = num.toString()
    let numSplit= numStr.split('')
    for (let i = 0; i < numSplit.length; i++) {
        let arrPush = `${numSplit[i-1]}${numSplit[i]}`
    array.push(arrPush)
    }
    return array;
}



console.log((createArrayOfTiers(2017))) // ["2", "20", "201", "2017"]
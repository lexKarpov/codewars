function sumStrings(a,b) {
let aa= +a
    let bb= +b
    const sum = BigInt(aa) + BigInt(bb);
    return (sum).toString()

}


console.log((sumStrings('712', '8100')))    //'579'
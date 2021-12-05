function duplicateCount(text) {
    let res = []
    let texto = text.toLowerCase();
    let coin = 0;

    for (let i = 0; i < texto.length; i++){
        let gama = texto.split(texto[i]).length-1;
        if(gama > 1){
            res.push(texto[i])
            coin += i
        }
    }
    let anus = res.sort()


    for (let j = 0; j < anus.length; j++) {
        if(anus[j]===anus[j+1]) {
            anus.splice(anus[j+1], 1)
        }
        while(anus[j]===anus[j+1]){
            anus.splice(anus[j+1], 1)
        }
    }


    return res.length

}

console.log(duplicateCount(""))                     // 0
console.log(duplicateCount("abcDe"))                // 0
console.log(duplicateCount("aabbcde"))              // 2
console.log(duplicateCount("aabBcde"))              // 2,"should ignore case");
console.log(duplicateCount("Indivisibility"))       //1
console.log(duplicateCount("Indivisibilities"))     // 2





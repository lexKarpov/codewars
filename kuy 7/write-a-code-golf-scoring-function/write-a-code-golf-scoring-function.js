function golfScore(code) {
    let codeSplit=code.split(' ')
    let score = 0
    
    return codeSplit.length
}


// console.log(golfScore(`hello world`)) //2
console.log(golfScore(`h e l l o  w o r l d`)) //10
// console.log(golfScore(`hello_world`)) // 1
// console.log(golfScore(`10293 10000 999 42`)) //4
// console.log(golfScore(`1 2 3`)) //3
// console.log(golfScore(`abc10293 10000def t9e9e9`))//3


function travelChessboard(s){
    let spl = s.split('');
    let startX = spl[1]
    let startY = spl[3]
    let finishX = spl[6]
    let finishY = spl[8]
    let finishedX = finishX - startX
    let finishedY = finishY - startY
    let arrOne = [0]
    let arrTwo = [1]

    for (let i = 1; i < 8; i++) {
        arrOne.push(1)
    }
    let anus = 0
    function finder (arr1, arr2, fin) {

        for (let k = 0; k < 7; k++) {
            let result = arr2[k] + arr1[k + 1]
            arr2.push(result)
        }
        if(finishedY===0){
            return anus+=1
        }
        fin--
        if(fin === 0){
            return anus+=arr2[finishedX]
        }else{
            let a = arr1.slice(0,-arr1.length)
            let b = arr2.slice(0,-arr1.length)
            b.push(1)
            for (let i = 0; i < arr2.length; i++){
                a.push(arr2[i])
            }
            finder(a, b, fin)
        }

    }

    finder(arrOne,arrTwo,finishedY)
    return anus

}

travelChessboard("(1 8)(4 8)")//6
// [[1, 1], [3, 3]]


//  0  1  1  1  1  1  1  1
//  1  2  3  4  5  6  7  8
//  1  3  6  10 15 21 28 36
//  1  4  10 20 35 56 84 120
//  1  5  15 35 70 .  .  .
//  1  6  21 56 .  .  .  .
//  1  7  28 84 .  .  .  .
//  1  8  36 120.  .  .  .



// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let a = arr1.slice(0,-arr1.length)
//
//
// for (let i = 0; i < arr2.length; i++){
//     a.push(arr2[i])
// }
// console.log(a)

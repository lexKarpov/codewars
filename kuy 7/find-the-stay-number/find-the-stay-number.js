
// let max = Math.min.apply(null, arr)
// let res = 0
// let index = arr.indexOf(max, 0)
// if(arr.length-1 ){
//     res +=1}
// console.log(index)

// если из длины массива убрать макс элемент, и длина массива станет= длина -1, то вернуть маск


// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);
// function stray(numbers) {
//     for(let i=0; i < numbers.length; i++) {
//         if (numbers[i] === numbers[i+1]) {
//             delete numbers[i];
//         } else {
//             return numbers[i+1]
//             break
//         }
//     }
// }

console.log(stray([54, 20, 54, 54]))

function stray(numbers) {
    let res = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1]){
            delete numbers[i], numbers[i + 1]
        }
        else if(numbers[i+1] === numbers[i+2]){
            return numbers[i]
        }
        else {
            return res.push(numbers[i + 1])
            break
        }

    }

}




//if (res === undefined){
//     return `${numbers[numbers.length - 1]}`
// }else{
//     return res[0]
// }


// другое решение
function stray(numbers) {
    var a = numbers.sort();

    if(a[0] != a[1]) {
        return a[0]
    }
    return a[a.length-1]
}
//другое решение

// function stray(numbers){
//   for ( let num of numbers ){
//     if ( numbers.indexOf(num) === numbers.lastIndexOf(num) ){
//       return num
//     }
//   }
// }
const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]


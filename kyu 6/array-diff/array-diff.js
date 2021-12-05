function arrayDiff(a, b) {


    let les = []
    let res = a
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]){
                delete (res[i])
            }
        }
    }
    for(let j = 0; j < res.length; j++){
        if(Number.isInteger(res[j])){
            les.push(res[j])
        }
    }



    if (b.length < 1) {
        return a

    }
    return les
}

 // console.log(arrayDiff([], [4,5]))            // []
console.log(arrayDiff([3,4], [3]))           // [4]
console.log(arrayDiff([1,8,2,2,2,2,2], []))        // []
console.log(arrayDiff([1,2,2], [2]))      // [1]
console.log(arrayDiff([1,2,3], [1,2]))    //[3]



//
// Array.prototype.common = function(a) {
//     return this.filter(function(i) {
//         return a.indexOf(i) >= 0;
//     });
// };

//
// alert([1,2,3,4,5].common([4,5,6])); // "4, 5"
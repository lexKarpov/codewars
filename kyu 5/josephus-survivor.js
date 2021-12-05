function josephusSurvivor(n,k){
    let array = []
    for (let m=1; m < n+1; m++){
        array.push(m)
    }
if(k>n){
    k = k - array.length
    for (let i = -1; i < 80; i += k) {
        delete array[i]
        let p = array.slice(0, k - 1)
        array.splice(0, k)
        for (let j = 0; j < p.length; j++) {
            array.push(p[j])
            k+=1
        }
    }
    // if(array.length>1){
    //     array.splice(0,1)
    // }
    return array
}

//         for (let i = -1; i < 1000; i += k) {
//             delete array[i]
//             let p = array.slice(0, k - 1)
//             array.splice(0, k)
//             for (let j = 0; j < p.length; j++) {
//                 array.push(p[j])
//             }
//
//         }
// if(array.length>1){
//     array.splice(0,1)
// }
//
// return +(array.join())
}



// console.log(josephusSurvivor(7,3))  //4
console.log(josephusSurvivor(11,19)) //10
// console.log(josephusSurvivor(1,300))  //1
// console.log(josephusSurvivor(14,2))  //13
// console.log(josephusSurvivor(100,1))  //100


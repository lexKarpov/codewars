function pyramid(n) {
    let num = '1'
    let arr = []

    for( let i = 0; i < n; i++){
        let array = []
        array[i] = num*1
        arr[i]= array
        for (let j = 0; j < arr.length; j++) {
            if(array[j] === undefined){
                array[j]= 1
            }
        }
    }
  return arr
}


// console.log(pyramid(1)) // [[1]];
console.log(pyramid(2)) // [[1], [1, 1]];
console.log(pyramid(3)) // [[1], [1, 1], [1, 1, 1]];

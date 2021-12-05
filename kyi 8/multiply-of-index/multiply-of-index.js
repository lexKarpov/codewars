function aa(arr){
    let array = [];
    // arr.splice(0,1)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]/i === Math.floor(arr[i]/i) && arr[i]/i !== 0){
            array.push(arr[i]);
        }
    }return array
}

console.log(aa([22, -6, 32, 82, 9, 25] ))
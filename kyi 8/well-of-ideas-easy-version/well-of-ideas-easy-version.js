function well(x){
    let result = 0
    for (let i = 0; i < x.length; i++) {
        if(x[i]==='good') {
        result+=1
        }
    }
    if(result>2){
        return 'I smell a series!'
    }
    if(result ===1 || result ===2){
        return 'Publish!'
    }
    return 'Fail!'

}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) //'I smell a series!'
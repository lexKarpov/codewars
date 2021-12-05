function halvingSum(n) {
    let res =n
    let x = 2
    do{
        res += Math.floor(n/x)
        x=x*2
    }while (Math.floor(n/x) > 0)
    return res
}



console.log(halvingSum(25))

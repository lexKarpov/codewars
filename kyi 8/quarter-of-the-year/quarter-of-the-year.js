function quarterOf(month){
if (month<4){
    return 1
}
    if (month>=4 && month<=6){
        return 2
    }
    if(month<=9 && month>6)
    return 3
if (month>9 && month<=12){
    return 4
}
}

console.log(quarterOf(4))
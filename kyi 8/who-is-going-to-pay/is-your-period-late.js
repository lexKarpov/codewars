function periodIsLate(last, today, cycleLength){
   let coin = Number(today-last) / 86400000

    if (coin > cycleLength){
        return true
    }
        return false;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
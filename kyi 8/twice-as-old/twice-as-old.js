function twiceAsOld(dadYearsOld, sonYearsOld) {
    let batya = dadYearsOld
    let syn = sonYearsOld*2
    while (batya < syn) {
        batya++;
    }

    while (batya > syn) {
        batya--;
    }
    let res = batya - dadYearsOld
    if (res<0){
        res = res*-1
    }


    return res
}

console.log(twiceAsOld(13, 7))



function twiceAsOld(dadYearsOld, sonYearsOld) {
    let res = 0
    if(dadYearsOld > sonYearsOld*2){
        do{
            dadYearsOld--
            sonYearsOld--
            res+=1
        }
        while (dadYearsOld > sonYearsOld*2)
        return res
    }


    else if(dadYearsOld < sonYearsOld*2){
        do{
            dadYearsOld++
            sonYearsOld++
            res+=1
        }
        while (dadYearsOld < sonYearsOld*2)
        return res
    }
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

function twiceAsOld(a, b) {
    return a>2*b ? a-2*b : 2*b-a;
}


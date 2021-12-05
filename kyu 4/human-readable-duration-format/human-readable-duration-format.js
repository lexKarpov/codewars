function formatDuration (seconds) {
if (seconds===0){
    return 'now'
}
    if(seconds/60 < 1){
    return `${seconds} second`
}else {
    if (seconds / 60 > 60) {
        if (seconds / 3600 > 60 && seconds / 3600 < 86400) {
            if(seconds / 3600 > 24){

            }
        } else {
            let hours = Math.floor(seconds/ 3600)//2
            let secondeProt = minute - Math.floor(minute)
            let seconde = secondeProt * 60
            let minuteProt = seconds/3600 - hours //0.001
            let minute = minuteProt * 60// 0.09
            if (seconde < 1){
                let seconde = Math.round(minute*60)
                return `${hours} hours ${seconde} seconds11`
            }else {
                let secondeProt = minute - Math.floor(minute)
                let seconde = secondeProt * 60
                if(hours>=24){
                    let days = Math.floor(hours/24)
                    hours = hours - 24*days
                    return `${days} days, ${hours} hourse, ${Math.floor(minute)} minutes ${Math.floor(seconde)} secondso`
                }else {
                    return `${hours} hourse ${Math.floor(minute)} minutes ${Math.round(seconde)} secondso`
                }

            }
        }
    } else {   // minutes
        let minute = Math.floor(seconds / 60)
        let seconde = (seconds/60 - minute) * 60
        if(minute%60===0){
            let minute = Math.floor(seconds / 3600)
            return `${minute} hoursesss`
        }
        if(seconde<1){
            return `${minute} minutes`
        }
        return `${minute} minutes : ${Math.floor(seconde)} second1`
    }
}
        }
console.log(formatDuration(7260))
//CODEWARS
//Who is going to pay for the wall?
//1(my)
function whoIsPaying(name){
    let nameSplit = name.split('')
    if(nameSplit.length<3){
        return [name]
    }else{
        let resArr = nameSplit.slice(0, 2)
        let result = [name, resArr.join('')]
        return result
    }
}

console.log(whoIsPaying("so"))

//2
function whoyIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
}

console.log(whoIsPaying('sorka'))
//3
const whoIsPaying = name =>
    [...new Set([name, name.slice(0, 2)])]


whoIsPaying = name => name.length <= 2 ? [name] :  [name, name[0] + name[1]];
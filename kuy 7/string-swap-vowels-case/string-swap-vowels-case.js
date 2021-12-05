function swapVowelCase(str) {
let res = ''
    let strS = str.split('');
for (let i = 0; i < strS.length; i++){
    if(strS[i]==='a' || strS[i]==='e' || strS[i]==='i' || strS[i]==='o' || strS[i]==='u'){
        res += strS[i].toUpperCase()
    }else{
        res += strS[i]
    }
return res

}
}


console.log((swapVowelCase("C Is AlIvE!"))) //"C is alive!"
console.log(swapVowelCase("to"))
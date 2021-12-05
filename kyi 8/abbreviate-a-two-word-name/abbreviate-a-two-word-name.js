function abbrevName(name){
   let name3 = name.slice(0, 1)
    let name1 = name.split(' ')
    let name2 = name1[1].slice(0, 1)
let one = name3.toUpperCase()
    let two = name2.toUpperCase()

    return `${one}.${two}`
}


console.log(abbrevName("sam Harris"))
function list(names){
    let result = [];
    for (let i = 0; i < names.length; i++) {
       result.push(names[i].name)
    }
    if(result.length>2){
       let resTwoo = `${result[result.length-2]} & ${result[result.length-1]}`
       let resNoTwoo = result.splice(0, result.length-2).join(', ')
       return  `${resNoTwoo}, ${resTwoo}`

    }
    if(result.length===2){
        return `${result[0]} & ${result[1]}`
    }
    if(result.length===0){
        return ''
    }
    if(result.length===1){
        return result.toString()
    }
return result
}




        console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) // 'Bart, Lisa, Maggie, Homer & Marge'

        console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])) // 'Bart, Lisa & Maggie'

        console.log(list([{name: 'Bart'},{name: 'Lisa'}])) // 'Bart & Lisa'

        console.log(list([{name: 'Bart'}])) // 'Bart'
        console.log(list([])) // ''

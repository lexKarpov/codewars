function rotate(str){
    if(str === ''){
        return []
    }

    let res = []

    let o = 0
    function filter(stroke){
        o++
        if(stroke.length==o){
            res.push(str)
            return true
        }else{
            let a  = stroke.slice(1,stroke.length)
            let g = `${a}${stroke[0]}`
            res.push(g)
            filter(g)
            console.log(res)
        }

    }
    filter(str)


    return res
}
console.log(rotate('Hello'))
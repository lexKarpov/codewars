function countBy(x, n) {
    let z = [];
    for (let i = x; i < n *x+1 ; i = i+x) {
        z.push(i)
    }
    return z;
}

console.log(countBy(1,10))
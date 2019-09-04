const fib = function(n,arr= []){
	if (n === 1) {
        return 1
    }
    if (n ===2) {
        return 1
    }
    else {
       const number = fib(n-1) + fib(n-2)
       return number
    }
}
const fibDriver = function(n){
    const arr = [1]
    var number = 3
    i = 1
    while( i<n){
        number = fib(i)
        arr.push(number)
        i++;
    }
    return arr
}

//console.log(fib(1))
//console.log(fib(2))
//console.log(fib(3))
//console.log(fib(4))
//console.log(fib(5))
//console.log(fib(6))
//console.log(fib(7))
//console.log(fib(8))
console.log(fibDriver(8))
console.log(fibDriver(15))


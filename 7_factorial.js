const factorial = function(n) {
        if (n<=2){
            return n 
    } 
    else {
        return n * factorial(n-1)
    }
}

const tester = (number)=>{
    console.log(`testing ${number} = ${factorial(number)}`)
}
console.log(factorial(3))
tester(2)
tester(3)
tester(5)
tester(8)
const triangleNumber = function(n){
	if( n ===1 ){
            return n
    }
    if (n>1){
        return n + triangleNumber(n-1)
    }
}

console.log(triangleNumber(3))
console.log(triangleNumber(5))
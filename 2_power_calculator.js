const powerCalculatorRec = function(base,exp) {
	if (exp <0){
		return `exponent should be >=0`
    }
    if (exp ===0){
        return 1
    }
    if (exp ===1){
        return base
    }
    else {
        return base * powerCalculatorRec(base,exp-1)
    }
}
console.log(powerCalculatorRec(5,3))
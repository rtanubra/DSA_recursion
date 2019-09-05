/**
 * Conversion steps:
    Divide the number by 2.
    Get the integer quotient for the next iteration.
    Get the remainder for the binary digit.
    Repeat the steps until the quotient is equal to 0.
 */

const binary= (number) =>{
    var answer = ""
    const binaryHelper=(quotient,binarNumber="")=>{
    
        if (quotient===0){
            answer= binarNumber
        }
        else {
            var remainder = quotient%2
            var newQuotient = Math.floor(quotient/2)
            var remainderAsString = remainder.toString()
            binarNumber += remainderAsString
            console.log(newQuotient,binarNumber)
            binaryHelper(newQuotient,binarNumber)
        }
        
    }
    binaryHelper(number)
    answer = answer.split("").reverse().join("")
    return answer 

}

console.log(binary(31))
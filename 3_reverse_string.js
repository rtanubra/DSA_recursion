const reverseString = function(myStr) {
        if (myStr.length ===1){
            return myStr
    }
    else {
        return myStr.substr(-1) + reverseString(myStr.substr(0, myStr.length-1))
    }
}

console.log(reverseString('abcd'))
const mySplitter= function(str, sep, arr=[] ) {
    var position = str.indexOf(sep)
    if(position === -1){
        return [...arr,str]
    }
    else{
        const strToAdd = str.slice(0,position)
        const new_arr = [...arr,strToAdd]
        const newStr = str.slice(position+1)
        return mySplitter(newStr,sep,new_arr)
    }
}

console.log(`feeding 'apple-bear-sniper',"-")`)
console.log(mySplitter('apple-bear-sniper',"-"))
console.log(`feeding 'apple',"-"`)
console.log(mySplitter('apple',"-"))
console.log(`feeding 'apple/me/you/someotherpeople/thenothers',"/" `)
console.log(mySplitter('apple/me/you/someotherpeople/thenothers',"/"))
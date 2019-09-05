
const genAnagram = (word)=>{
    const anagrams = []
    const genAnagramHelper = (word,anagram = "")=>{
        if (word === ""){
            console.log('created',anagram)
            anagrams.push(anagram)
            return
        }
        for (let i = 0 ; i<word.length; i++){
            anagram += word[i];
            //recursive portion we call the function again
            console.log(anagram,i)
            console.log('input',word.slice(0,i)+word.slice(i+1),anagram,i)
            //put it on and explore
            genAnagramHelper(word.slice(0,i)+word.slice(i+1),anagram)
            //take off the letter and try again.
            anagram = anagram.slice(0,anagram.length-1)
            console.log('here-popping',anagram)
        }  
    }
    genAnagramHelper(word)
    return anagrams
}


console.log(genAnagram('abc'))

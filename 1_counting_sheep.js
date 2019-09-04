const countSheep = function(sheepNumber) {
	if ( sheepNumber === 0) {
		console.log("All sheep jumped over the fence")
    } else {
	console.log(`${sheepNumber }: Another sheep jumps over the fence`)
	countSheep(sheepNumber-1)
    }
}   

console.log(countSheep(20))
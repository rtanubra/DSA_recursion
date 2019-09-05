let mySmallMaze = [
    ['X', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]

let maze = [
    ['X', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

/**
 * Start at the starting point given in fx
 * 
 */

const mazeRunner = function(maze){
    const completed = []
    const mazeRun = function(currMaze, currLocation, letters=""){
        //Check if we can go right.
        if (currLocation[1]<currMaze[0].length-1){
            if (currMaze[currLocation[0]][currLocation[1]+1] === "e"){
                const newletters = letters + "R"
                completed.push(newletters)
                //console.log(newletters,"done")
                return newletters
            }
            if (currMaze[currLocation[0]][currLocation[1]+1] === " "){
                const newletters = letters + "R"
                currMaze[currLocation[0]][currLocation[1]+1]= "X"
                //console.log(newletters)
                //console.log(currMaze)
                mazeRun([...currMaze],[currLocation[0],currLocation[1]+1],newletters)
            }
        }
        //Check if we can go down.
        if(currLocation[0]<currMaze.length-1){
            if (currMaze[currLocation[0]+1][currLocation[1]] === "e"){
                letters = letters + "D"
                //console.log(letters,"done")
                completed.push(letters)
                return letters
            }
            if (currMaze[currLocation[0]+1][currLocation[1]] === " "){
                const newletters = letters + "D"
                currMaze[currLocation[0]+1][currLocation[1]]= "X"
                //console.log(newletters)
                //console.log(currMaze)
                mazeRun([...currMaze],[currLocation[0]+1,currLocation[1]],newletters)
            }
        }
        //Check if we can go left.
        if(currLocation[0]>0){
            if (currMaze[currLocation[0]][currLocation[1]-1] === "e"){
                const newletters = letters + "L"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (currMaze[currLocation[0]][currLocation[1]-1] === " "){
                const newletters = letters + "L"
                currMaze[currLocation[0]][currLocation[1]-1]= "X"
                //console.log(newletters)
                //console.log(currMaze)
                mazeRun([...currMaze],[currLocation[0],currLocation[1]-1],newletters)
            }
        }
        //Check if we can go up.
        if (currLocation[0]>0){
            if (currMaze[currLocation[0]-1][currLocation[1]] === "e"){
                const newletters = letters + "U"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (currMaze[currLocation[0]-1][currLocation[1]] === " "){
                const newletters = letters + "U"
                currMaze[currLocation[0]-1][currLocation[1]]= "X"
                //console.log(newletters)
                //console.log(currMaze)
                mazeRun([...currMaze],[currLocation[0]-1,currLocation[1]],newletters)
            }
        }
    }
    
    
    var i = 0
    while (i<maze.length){
        console.log(maze[i])
        i++
    }
    mazeRun([...maze],[0,0])
    //console.log(completed)
    //return all solution
    return completed
}

console.log(mazeRunner(mySmallMaze))
//console.log("*"*20)
console.log(mazeRunner(maze))
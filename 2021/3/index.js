import fs from "fs"

const input = fs.readFileSync("input.txt", "utf-8").split("\n")
let finna = []

input.forEach(line => {
    let o = 0
    let i = 0 
    line.split("").map(char =>{
        if (char == 0) o ++
        if (char == 1) i ++
    })
    let result = i > o ? 1 : 0

    finna.push(result)
})
console.log(parseInt( finna.join(""), 2))


import { error } from "console"
import * as fx from "fs"



fstat.readFile("", (error, data) => {
    if (error)
    {
        console.log("my error", error)
    }
    console.log(data)
})


fstat.readFile("", "utf8", (error, data) => {
    if(error)
    {
        throw error 
    }
    console.log(data)
})


fs.readFile(path.join(process.cwd(), "files", "debby.txt"), (err, data) => {
    if (err)
    {
        throw err
    }
    console.log(data.toString())
})  

// create filter: 
fs.writeFile(path.join(process.cwd(), "files", "ike.txt"), "hi guys im creating new file", (err, data) => {
if(err)
{
    throw err
}
console.log("file created succesfully")

fs.readFile("", "utf8", (err,data) => {
    if (err)
    {
       throw err
    
    }
    console.log(data)
})
})


//update filte: 
fs.appendFile(path.join(process.cwd(), "files", "debby.txt", "I'm feeling strong and awake"), (err, data) => {
    if (err)
    {
        throw err
    }

    console.log('updated successfully')
})  



// fs.readFile("./file/paa.txt","utf8" ,(err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// console.log(process.cwd())
// fs.readFile(path.join(process.cwd(), "file", "paa"), (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data.toString())
// })

// fs.writeFile(path.join(process.cwd(), "file", "Ike.txt"), "I am ike", (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log("file created")


//     fs.readFile("./file/paa.txt", "utf8",(error, data)=>{
//         if(error){
//             throw error
//         }
//         console.log(data)
//     })
// })




// Promise


// let myPromise = new Promise((resolve, error) => {
//     error("sapa dea")
//     // error(i no get money)
// })

// const onSuccess = (data)  => {
//     console.log(`i have gotten an alart of $(data)`)

// }

// const onError = (erro) => {
//     console.log(`hesaid ${error}`)
// }

// let receiver = myPromise.then(onSuccess, onError)
// console.log(receiver)

// const getProductName = () => {
//     return new Promise((resolve, error) => {
//         setTimeout(() => {
//            error("jeans don cost") 
//         }, 5000);
//     })
// }

// const onSuccessp = (data) => {
//     console.log("success", data)
// }
// const onErrorp = (error) => {
//     console.log(error)
// }

// getProductName()
//         .then(onSuccessp)
//         .catch(onErrorp)
//////////////////
let myPromise = new Promise((resolve, error) => {
    error("sapa dea")
    // error(i no get money)
})

const onSuccess = (data)  => {
    console.log(`i have gotten an alart of $(data)`)

}

const onError = (error) => {
    console.log(`he said ${error}`);
}

let receiver = myPromise.then(onSuccess, onError)
console.log(receiver)

const getProductName = () => {
    return new Promise((resolve, error) => {
        setTimeout(() => {
           error("jeans") 
        }, 5000);
    })
}

const getPrice = (value) => {
    return new Promise((resolve, error) => {
        if (value === "jeans") 
        {
           resolve('10000')    
        } else if (value === "pants")
        {
            resolve('8000') 
        }else if (value === "t-shirt")
        {
            resolve("7000")
         } else 
         {
                error("product not found")
            }
        
    })
}

const discount = (value) =>  {
    return new Promised ((resolve, reject) => {

        switch (value) {
            case "10000":
                resolve("discount")
                break;
                case "8000":
                resolve("discount")
                break;
                case "7000":
                resolve("discount")
                break;
                default: 
                reject ("invalid price")
                break

        }
    })
}

const onSuccessp = (data) => {
    console.log("success", data)
}
const onErrorp = (error) => {
    console.log(error)
}

getProductName()
        .then(getPrice)
        .then(discount)
        .then(onSuccessp)
        .catch(onErrorp)

//Await 
const getFood = () => {
    return new Promise((resolve, reject) => {
        resolve("beans and bread")
    })
}

async function foodDataata2() {
    let result = await getFood()
    console.log(result)
}

foodDataata2()
    let foodDATA = async () => {
        let result = await getFood()
        console.log(result)
    }

    foodDATA()

// console.log("jim")

// let soap;
// let getSoap=(callback)=>{
//     setTimeout(()=>{
//         console.log("soap is on the way")
//         soap= "joy soap"
//         console.log("soap is ready")
//         callback(soap)
//         },4000)
// }

// let bath=(data)=>{
//     console.log(`i am bath with ${data}`)
// }
// getsoap(bath)



// let data;
// let buydata =() => {
//     setTimeout(() => {
//         console.log("data dey come")
//         data= "Mtn Sub" 
//         console.log("Ur 30gig data has been activated")
//         callback(data)
//     }, 3000);
// }
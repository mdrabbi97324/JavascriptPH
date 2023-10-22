// const getData = new Promise((resolve, reject) => {
//     const num = Math.floor(Math.random()*10);
//     console.log(num);
//     if(num < 5){

//         resolve(29992 + num);
//     }
//  reject('Reject kar dia mujhe')
// })

// getData 
//         .then(data => console.log(data))
//         .catch(err => console.log(err))


const myFunction = () => {
    return    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random()*10;
            if(randomValue < 5){
                resolve(randomValue);
            } else {
                reject("Error: Operation failed");
            }
            
        },1000);
    })
}


// myPromise
//     .then(result => console.log('Success:', result))
//     .catch(error => console.log('Error:', error))


const handlePromise = async () => {
    try{
        const result = await myFunction();
        console.log("Success: ", result);
    } catch{ 
        const error = await myFunction()
        console.log('Error: ', error);
    }
}

handlePromise()

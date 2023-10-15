console.log(1)
console.log(2)
// console.log(3)
// num()
const timeOutId = setTimeout(() => {
    console.log('lazy logged')
}, 4000);
console.log(4)
console.log(5)
console.log(6)


function doSomething() {
    console.log(3)
}

let num = 0;
const interverId = setInterval(() => {
    num++
    console.log(num);
    if(num === 10) {
        clearInterval(interverId);
    }
}, 1000)

// function num() {
//     console.log(3);
// }
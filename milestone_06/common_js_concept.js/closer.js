function stopWatch (){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}


const watch1 = stopWatch();
console.log(watch1())
console.log(watch1())
console.log(watch1())

let x = true;
if(x){
    console.log('truthy')
}
else{
    console.log('falsy')
}

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);


if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }



/* 
Global execution Context simply javascript object

1. js file create a global object 
2. create a this name object
3. create space for function and variable 
4. variable value set as undefined


First ----------
Phase : Loading/Creation
window : global object
this : window
variable object 
scope chain

second -------
var topic = " Execution Context javascript"

function getTopic() {
    return topic;
}

getTopic();

Phase : Loading/Creation 
window : global object 
this : window 
topic : undefined 
getTopic : fn()
scope chain 

Third -----------

Phase : Execution 
window : global object
this : window
topic : " Execution Context javascript"
getTopic : fn()  // function body as reference in variable
scope chain



Function execution context

1. create a parameter/arguments object  
2. create a this name object
3. create space for function and variable 
4. variable value set as undefined


When call a function it's
phase : Loading/ Creation
arguments = {}
this : window

phase : Execution 
when return inside from a function the execution context will remove


*/
var topic = 'javascript execution context';

function getTopic(){
    return topic;
}

getTopic()



// Below example for function execution context 
var a = 1;


function one() {
    console.log(a); // 1
    function two(){
        console.log(b); // undefined
        var b = 2;
        function three(d) {
            let c = 3;
            console.log(c + d); // 7
        }
        three(4);
    }
    two();
}
one()


// Discover lexical scope ;

function hello(){
    var msg = 'Hello World!'
}

hello();
// console.log(msg);

// Closure 


var sum = 0;

function doSum(a){
    return function(b){
        return a+b;
    };
}

var temp = doSum(5);
sum = sum + temp(8);
console.log(sum)


const function1 = (callback) => {
    // console.log(typeof callback);
    callback()
}


const callback = () => {
    console.log('I am callback function');
}

function1(callback)

const function2 = (a,b,callback) => {
    // const b = 9;
    callback(a, b);
}

const callback2 = (x, y) => {
    console.log('sum = ', x+y)
}

function2(10,20, callback);



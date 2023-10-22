const outerFunction = () => {
    let count = 0;
    return () => {
        count++;
        console.log('count is :', count);
    }
}

const x1 = outerFunction()
// const x2 = outerFunction()
x1()
// x1()
// x1()
// x2()
// x1()
// x2()

outerFunction()

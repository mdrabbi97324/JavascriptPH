// 1 + 2 + 3 + 4 + 5 + 6 + 7

/* let sum = 0;
for (let i = 0; i <=7; i++) {
    sum = sum + i;
}
console.log(sum);
 */
function sumOfNum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers; i++) {
        const element = numbers[i];
        sum = sum + i
    }
    return sum;
}

const total = sumOfNum(7);
console.log(total);
// function reverseSentence(text) {
//         reverseText = '';
//     for (let i = text.length-1; i >= 0; i--) {
//         const element = text[i];
//         reverseText = reverseText + element;
//     }

//     return reverseText;
// }

// const str = 'He is a good boy';
// const result = reverseSentence(str);
// console.log("Reverse Sentence Output : ", result);


function reverseWord(text){
    const words = text.split(' ');
    const output = [];
    // [ 'He', 'is', 'a', 'smallest', 'boy' ]
    for (let i = words.length-1; i >= 0; i--) {
        const element = words[i];
        output.push(element);
    }
    const reverse = output.join(' ')
    return reverse;

}

const str2 = 'He is a smallest boy';
const reverseWordResult = reverseWord(str2);
console.log("Here is the Reverse Word : ", reverseWordResult);

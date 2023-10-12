const name = 'Aj'
const age = 26;
const bari = 'Rajshahi';
const subjects = ['English', 'Math', 'Bangu']
const result = subjects.map(subject => subject);
console.log(result);

const sentence = 'Amar naam ' + name + '. Amar boyos ' + age + '.\nAmar bari ' + bari;

console.log(sentence)

const sentence1 = `
Amar naam ${name}.
Amar boyos ${age}. 
Amar bari ${bari}.
I like ${subjects.map(subject => subject).join(', ')}`
console.log(sentence1);
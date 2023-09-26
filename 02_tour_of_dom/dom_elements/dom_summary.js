const para = document.createElement('p');
const node = document.createTextNode('This is new para');
para.appendChild(node);

// console.log(para);

const element = document.getElementById('div1');
element.appendChild(para);
// console.log(element);

const span = document.createElement('span');
const element2 = document.getElementById('div1');
element2.appendChild(span);
const spanText = document.querySelector('span').innerText = 'This span text create using innerText';
// console.log(element2);

const div1 = document.getElementById('div1')
// console.log(div1);

const para2 = document.createElement('p');
const para2Text = document.createTextNode('This is para2Text insert as a first child using insertBefore()');
para2.appendChild(para2Text);
const child = document.getElementById('p1');
para2.style.fontWeight = 'bold';
element.insertBefore(para2, child);

// child.remove(child);
// child.parentNode.removeChild(child);


element.replaceChild()
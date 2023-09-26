// option one
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option two

const makeBlue = document.getElementById('make-blue')
makeBlue.onclick = makeBlueColor;

function makeBlueColor() {
    document.body.style.backgroundColor = 'blue';
}


const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleColor() {
    document.body.style.backgroundColor = 'purple';
}

// option 4 ====
const makeButtonPink = document.getElementById('make-pink');
       makeButtonPink.addEventListener('click', makePink);

       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }

// option 4 another 

const makeButtonGold = document.getElementById('make-gold');
makeButtonGold.addEventListener('click', function makeGold(){
    document.body.style.backgroundColor = 'gold';
})

// option 4 final

document.getElementById('make-tomato').addEventListener('click',function makeTomato(){
    document.body.style.backgroundColor = 'tomato';
})
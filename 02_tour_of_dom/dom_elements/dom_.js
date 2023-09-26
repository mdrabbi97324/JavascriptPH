

const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightgray';

placesContainer.classList.add('yellow-bg');


const placeAdd = document.createElement('li');
const PlaceName = document.createTextNode('Farmgate');
placeAdd.appendChild(PlaceName);
const placeParent = document.getElementById('place-list');
placeParent.appendChild(placeAdd);



const mainContainer = document.getElementById('main-container');
const createSection = document.createElement('section');
const addHeading = document.createElement('h1');
const headingText = document.createTextNode('Choose Biriany Item');
addHeading.appendChild(headingText);
createSection.appendChild(addHeading);
console.log(createSection);
createSection.innerHTML =
   `<p>I like biriyani </p>
    <ul id='biriyani-list'>
        <li>kacchi</li>
        <li>morog polao</li>
        <li>egg polao</li>
    </ul>`;
    console.log(createSection);
mainContainer.appendChild(createSection);

const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid blue';
    section.style.marginBottom = '10px';
    section.style.paddingLeft = '20px';
    section.style.borderRadius = '5px';
    section.style.backgroundColor = 'lightgreen';

}




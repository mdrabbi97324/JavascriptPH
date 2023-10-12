function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data))
}


function displayData(data) {
    for(const user of data){
        console.log(user)
    }
}


function loadUsers2 () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData2(data))
}

function displayData2 (data) {
    const users = document.getElementById('users')
    for(const user of data){
        // console.log(user)
        const li = document.createElement('li');
        li.innerText = user.name;
        li.style.fontWeight = 'normal';
        users.appendChild(li);
    }
}



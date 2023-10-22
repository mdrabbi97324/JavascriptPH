post()
function post (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('post-container');
    for(const user of data){
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>UserId - ${user.userId}</h3>
        <h4>Title : ${user.title}</h4>
        <p>Descriptin : ${user.body}</p>
        `;
        postContainer.appendChild(div);
        div.classList.add('post')
    }
}


/* function handleCategory() {
    console.log('hello');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    console.log('World')
}

const handleCategory2 = async () => {
    console.log('Hello First');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data);
    console.log('Hello Second')
}

handleCategory()
handleCategory2() */

const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  // console.log(data.data.news_category)
  // data.data.news_category.map(e => console.log(e.category_id, e.category_name))
  data.data.news_category.slice(0, 3).forEach((category) => {
    const tabContainer = document.getElementById("tab-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <a class='tab mr-5'>${category.category_name}</a>`;
    tabContainer.appendChild(div);
  });
};

handleCategory();

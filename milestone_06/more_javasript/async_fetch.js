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
        <a onclick="handleLoadNews('${category.category_id}')" class='tab mr-5'>${category.category_name}</a>`;
    tabContainer.appendChild(div);
  });
};

const handleLoadNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    );
    const dataC = await res.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML=""  ;
  dataC.data.forEach(news => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src=${news.image_url}
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                  ${news.title.slice(0,30)}...
                    <div class="badge badge-secondary p-5">${news.rating.badge}</div>
                  </h2>
                  <p>
                    ${news.details.slice(0,30)}...
                  </p>
                  <h3>Total Views : ${news.total_view ? news.total_view : 'No view'}</h3>
                  <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                      <div>
                        <div class="avatar online">
                          <div class="w-14 rounded-full">
                            <img src= ${news.author.img}/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>${news.author.name ? news.author.name : 'Unavailable'}</h6>
                        <small>${news.author.published_date ? news.author.published_date : 'Date unavailable'}</small>
                      </div>
                    </div>
                    <div class="card-detaild-btn">
                      <button
                      onclick="handleModal('${news._id}')"
                        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `
    cardContainer.appendChild(div);
  })

};

const handleModal = async newsId => {
  const response = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
  const newsData = await response.json();
  const modalContainer = document.getElementById('modal-container');
  const div = document.createElement('div');
    div.innerHTML =   `
  <dialog id="my_modal_2" class="modal">
  <div class="modal-box">
  <p class="py-4">Press ESC key or click outside to close</p>
  <h2 class="font-bold text-lg">ID : ${newsData.data[0]._id}</h2>
      <h3 class="font-semibold text-lg"><span class="font-bold underline">Title :</span> ${newsData.data[0].title}</h3>
      <h4 class="font-medium text-lg"><span class="font-bold underline" >Description :</span> ${newsData.data[0].details}</h4>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>`
  modalContainer.appendChild(div);
  const modal = document.getElementById('my_modal_2');
  modal.showModal()


}

handleCategory();
handleLoadNews('01')


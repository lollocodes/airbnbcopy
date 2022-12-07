const cardContainer = document.querySelector('.store')

let cardData = [];

  async function fetchDataJSON() {
    const response = await fetch('./assets/data/bnb.json');
    const movies = await response.json();
    return movies;
  }
  fetchDataJSON().then(movies => {
    movies; // fetched movies
    cardData.push(movies)

    cardData[0].forEach(element => {
      let card = document.createElement("article");
      card.classList.add("card")
      card.innerHTML = `
      
      <div class="card-image-container">
        <img
          class="card-image"
          width="300"
          itemprop="image"
          src="${element.image.ref}"
          alt="${element.image.alt}"
        />
      </div>
    
      <i class="fa-solid fa-heart heart-this"></i>
      <section class="card-body">
        <div class="card-description" itemprop="description">
          <h3 class="description-name" itemprop="name">${element.name}</h3>
          <p class="description-host">${element.host}</p>
          <p class="description-date">${element.date}</p>
          <p class="description-price">${element.price}</p>
        </div>
    
        <span class="card-rating">${element.rating}</span>
      </section>`;
      cardContainer.appendChild(card)


    });
  });


function myFunction() {
  var x = document.getElementById("user-action-list");
  if (x.className === "user-action-list") {
    x.className += " responsive";
  } else {
    x.className = "user-action-list";
  }
}

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const pageNav = document.getElementById("pageNav");

  if (document.documentElement.scrollTop > 100) {
    pageNav.classList.add("scrolled");
  } else {
    pageNav.classList.remove("scrolled");
  }
}

import { homeFactreeData } from "../Data/homefactreedata.js";


const homeCardContainer = document.getElementById('home-cards-container');
const officeCardContainer = document.getElementById('office-cards-container');

const functionCards = () => {
    homeFactreeData.forEach((data) => {
        const cardHTML = `
        <div class="card swiper-slide px-auto" style="width: 15rem;" data-category="${data.category}">
            <div class="card-img">
                <img src="${data.imageUrl}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <div class="card-text">
                   <p>${data.description}</p>
                </div>
                <div class="row">
                    <div class="col pt-1"><h4 class="product-price">${data.price}</h4></div>
                    <div class="col text-end"><button type="button" class="btn card-btn" data-bs-toggle="modal" data-bs-target="#${data.button_id}">View Detail</button></div>
                </div>
            </div>
        </div> `;

        if (data.category === "Home") {
            homeCardContainer.innerHTML += cardHTML;
        } else if (data.category === "Office") {
            officeCardContainer.innerHTML += cardHTML;
        }
    });
};

functionCards();

const modalcontainer = document.querySelector('.modal-container');

const modalfunction = () => {
    homeFactreeData.map((data) => {
        modalcontainer.innerHTML += `
        <div class="modal fade" id="${data.button_id}" tabindex="-1" aria-labelledby="sofaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content" style="background-color: #f8f9fa;">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 mb-3 mb-lg-0">
                                    <img src="${data.imageUrl}" alt="Sofa Image" class="img-fluid rounded w-100 shadow-sm">
                                </div>
                                <div class="col-lg-6">
                                    <h2 class="fw-bold">${data.title}</h2>
                                    <p class="text-muted">${data.description}</p>

                                    <h3 class="fw-bold"><strong>${data.price}</strong></h3>

                                    <p class="fw-semibold mt-2 mb-1">Available Colors:</p>
                                    <div class="btn-group mb-3" role="group" aria-label="Color selection">
                                        <input type="radio" class="btn-check" name="colorOptions" id="colorCharcoal${data.button_id}">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorCharcoal${data.button_id}">Charcoal</label>

                                        <input type="radio" class="btn-check" name="colorOptions" id="colorSage${data.button_id}">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorSage${data.button_id}">Sage</label>

                                        <input type="radio" class="btn-check" name="colorOptions" id="colorSteel${data.button_id}" autocomplete="off">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorSteel${data.button_id}">Steel</label>
                                    </div>

                                    <button class="btn btn-dark w-100 mb-3">Place Order</button>
                                    <div class="row border rounded border-black">
                                        <h4>Quick-Info:</h4>
                                        <div class="col">
                                            <h6>Dimensions:</h6>
                                            <h6>Materials:</h6>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-end" style="font-size: 0.8rem;">${data.dimensions}</h6>
                                            <h6 class="text-end" style="font-size: 0.8rem;">${data.materials}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="${data.PDF_file}" type="button" class="btn btn-outline-dark">Download file</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
};

modalfunction();


// Initialize Home Swiper
const homeSwiper = new Swiper('.home-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.home-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.home-next',
    prevEl: '.home-prev',
  },
  breakpoints: {
    0:   { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024:{ slidesPerView: 3 },
  },
});

// Initialize Office Swiper
const officeSwiper = new Swiper('.office-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.office-pagination',
      clickable: true,
      dynamicBullets: true  
    },
    navigation: {
      nextEl: '.office-next',
      prevEl: '.office-prev',
    },
    breakpoints: {
      0:   { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024:{ slidesPerView: 3 },
    },
});
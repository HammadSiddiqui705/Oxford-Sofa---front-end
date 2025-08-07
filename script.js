const navEl = document.querySelector(".navbar")

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add("navbar-scrolled");
    }
    else if (window.scrollY <= 56) {
        navEl.classList.remove("navbar-scrolled");
    }
})


// Featured cards 
const CardsData = [
    {
    button_id: 1,
    brand_name: "Habitt",
    category: "Home",
    imageUrl: "../Habitt/Images/3.jpg",
    title: "Modern L-Shaped Sofa",
    description: "Spacious L-shaped sofa with plush cushions and contemporary fabric.",
    price: "$352",
    materials: "Fabric, Wood Frame",
    dimensions: "96\" × 64\" × 38\"",
    width: 84,
    depth: 60,
    height: 32,
    colors: 3,
    PDF_File: "1.pdf"
  },
  {
    button_id: 2,
    brand_name: "Habitt",
    category: "Home",
    imageUrl: "../Habitt/Images/2.jpg",
    title: "Velvet Armchair",
    description: "Luxurious velvet armchair with high-density foam and wooden legs.",
    price: "$113",
    materials: "Velvet, Wood",
    dimensions: "96\" × 64\" × 38\"",
    width: 34,
    depth: 30,
    height: 35,
    colors: 2,
    PDF_File: "5.pdf"
  },
    {
    button_id: 39,
    brand_name: "Home Factree",
    category: "Office",
    imageUrl: "../Home Factree/Images/9.jpg",
    title: "Meeting Room Table",
    description: "Sleek rectangular table with modern legs for team sessions.",
    price: "$259",
    materials: "Plywood, Metal Base",
    dimensions: "96\" × 64\" × 38\"",
    width: 84,
    depth: 36,
    height: 30,
    colors: 2,
    PDF_File: "1.pdf"
  },
  {
    button_id: 40,
    brand_name: "Home Factree",
    category: "Office",
    imageUrl: "../Home Factree/Images/10.jpg",
    title: "Work Pod Set",
    description: "2-seat work pod with dividers and drawers for each user.",
    price: "$315",
    materials: "Laminated Board, Aluminum",
    dimensions: "96\" × 64\" × 38\"",
    width: 60,
    depth: 60,
    height: 30,
    colors: 4,
    PDF_File: "2.pdf"
  },
    {
    button_id: 26,
    brand_name: "Home Fashion",
    category: "Office",
    imageUrl: "../Home Fashion/Images/6.jpg",
    title: "Adjustable Task Chair",
    description: "Comfortable task chair with swivel base and breathable mesh.",
    price: "$78",
    materials: "Mesh, Plastic, Steel",
    dimensions: "96\" × 64\" × 38\"",
    width: 22,
    depth: 24,
    height: 42,
    colors: 3,
    PDF_File: "1.pdf"
  },
  {
    button_id: 27,
    brand_name: "Home Fashion",
    category: "Office",
    imageUrl: "../Home Fashion/Images/7.jpg",
    title: "Office Writing Desk",
    description: "Simple and compact desk with pull-out drawer and wood finish.",
    price: "$135",
    materials: "Laminated MDF, Metal Legs",
    dimensions: "96\" × 64\" × 38\"",
    width: 48,
    depth: 24,
    height: 30,
    colors: 2,
    PDF_File: "3.pdf"
  },
  {
    button_id: 13,
    brand_name: "InterWood",
    category: "Home",
    imageUrl: "../Interwood/Images/3.jpg",
    title: "Reversible Sectional Sofa",
    description: "L-shaped sectional with reversible chaise and easy-clean fabric.",
    price: "$499",
    materials: "Polyester, Metal Frame",
    dimensions: "96\" × 64\" × 38\"",
    width: 90,
    depth: 60,
    height: 34,
    colors: 4,
    PDF_File: "1.pdf"
  },
  {
    button_id: 14,
    brand_name: "InterWood",
    category: "Home",
    imageUrl: "../Interwood/Images/4.jpg",
    title: "Minimalist Armchair",
    description: "Comfortable armchair with clean lines, perfect for compact spaces.",
    price: "$145",
    materials: "Cotton Fabric, Solid Wood",
    dimensions: "96\" × 64\" × 38\"",
    width: 32,
    depth: 28,
    height: 34,
    colors: 2,
    PDF_File: "4.pdf"
  },
]


const CardContainer = document.querySelector('.cards-container')

const functionCards = () => {
    CardsData.map((data) => {
        // console.log(data)
        CardContainer.innerHTML += `
        <div class="card p-2 m-2" style="width: 18rem;" data-brand="${data.brand_name}">
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
                    <div class="col"><button type="button" class="btn card-btn" data-bs-toggle="modal" data-bs-target="#${data.button_id}">View Detail</button></div>
                </div>
            </div>
        </div> `

    })
}

functionCards()

const modalcontainer = document.querySelector('.modal-container')

const modalfunction = () => {
    CardsData.map((data) => {
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
                                        <input type="radio" class="btn-check" name="colorOptions" id="colorCharcoal">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorCharcoal">Charcoal</label>

                                        <input type="radio" class="btn-check" name="colorOptions" id="colorSage">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorSage">Sage</label>

                                        <input type="radio" class="btn-check" name="colorOptions" id="colorSteel" autocomplete="off">
                                        <label class="btn btn-outline-dark btn-sm m-1 border rounded border-black"
                                            for="colorSteel">Steel</label>
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
                        <a href="${data.PDF_File}" type="button" class="btn btn-outline-dark">Download file</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
};

modalfunction();




// Filter Button


const buttons = document.querySelectorAll(".filter-btn")
const cards = document.querySelectorAll(".card");

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const brand = button.getAttribute('data-brand');


        cards.forEach(card => {
            if(brand == 'all' || card.getAttribute('data-brand') === brand){
                card.style.display = 'block';
            }
            else{
                card.style.display = 'none';
            }
        });
    });
});


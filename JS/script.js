const chairs = [
    {
        id: 1,
        title: "Minimal LCD chair",
        category: "Chair",
        newPrice: 180,
        oldPrice: 250,
        image: "../assets/img/Chair(1).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 2,
        title: "Minimal iconic chair",
        category: "Chair",
        newPrice: 120,
        oldPrice: 150,
        image: "../assets/img/Chair(2).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 3,
        title: "Dining chairs",
        category: "Chair",
        newPrice: 100,
        oldPrice: 120,
        image: "../assets/img/Chair(3).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 4,
        title: "Buskbo armchair",
        category: "Chair",
        newPrice: 130,
        oldPrice: 150,
        image: "../assets/img/Chair(4).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 5,
        title: "Modern chairs",
        category: "Chair",
        newPrice: 100,
        oldPrice: 120,
        image: "../assets/img/Chair(5).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 6,
        title: "Plastic dining chair",
        category: "Chair",
        newPrice: 130,
        oldPrice: 150,
        image: "../assets/img/Chair(6).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 7,
        title: "Minimal Wood chair",
        category: "Chair",
        newPrice: 180,
        oldPrice: 250,
        image: "../assets/img/Chair(7).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
    {
        id: 8,
        title: "Elegent wood chair",
        category: "Chair",
        newPrice: 120,
        oldPrice: 150,
        image: "../assets/img/Chair(8).png",
        favourites: "../assets/img/favourites.svg",
        addCart: "../assets/img/addCart.svg",
        more: "../assets/img/more.svg"
    },
];

const containerChair = document.querySelector(".chairRow");

window.addEventListener("load", () => {
    if (!localStorage.getItem("chairs")) {
        localStorage.setItem("chairs", JSON.stringify(chairs));
    } else {
        const database = JSON.parse(localStorage.getItem("chairs"));

        cardChairs(database);
    }
});

function cardChairs(base) {
    const template = base.map(item => {
        return `
            <div class="card">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.category}">
                </div>
                <div class="card-text">
                    <p class="card-category">${item.category}</p>
                    <p class="card-title">${item.title}</p>
                    <div class="card-price">
                        <p class="card-newPrice">$${item.newPrice}</p>
                        <p class="card-oldPrice">$${item.oldPrice}</p>
                    </div>
                </div>
                <div class="card-menu">
                    <img src="${item.favourites}" alt="">
                    <img src="${item.addCart}" alt="">
                    <img src="${item.more}" alt="">
                </div>
            </div>
        `
    }).join("")
    containerChair.innerHTML = template;
};


/*SEARCH*/

const searchButton = document.querySelector(".header-search-button");
const searchInput = document.querySelector(".header-search-input");

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const database = JSON.parse(localStorage.getItem("chairs"));

    const search = database.filter(item => item.title.toLowerCase().includes(value));
    cardChairs(search);
})
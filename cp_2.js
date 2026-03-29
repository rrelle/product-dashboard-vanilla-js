const url = "https://www.course-api.com/javascript-store-products";

function fetchProducts() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                console.log(product.fields.name);
            });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data);
        };
    } catch(error) {
      handleError(error);
    }           
function displayProducts(products) {
    const container = document.getElementById("product-container");
    products.slice(0, 5).forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const name =product.fields.name;
        const price = product.fields.price;
        const image = product.fields.image[0].url;
        card.innerHTML = `
        h3>${name}</h3>
        img src="${image}" alt="${name}">
        p>Price: $${price}</p>
        `;
        container.appendChild(card);
    });
}
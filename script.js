const products = [

    { 

        name: 'Shirts', 
        price: 1499, 
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'White Classic Slim Fit Geometric Self Design Casual Shirt.' 

    },
    { 
        name: 'Jackets', 
        price: 2999, 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Typography Printed Stand Collar Varsity Jacket.' 
    },
    { 
        name: 'Jeans', 
        price: 1899, 
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Men 501 Straight Fit Stretchable Mid-Rise Jeans.' 
    },
    { 
        name: 'Hoodies', 
        price: 1999, 
        image: 'https://plus.unsplash.com/premium_photo-1669850858863-6fe7bf233483?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Men Colourblocked Hooded hoodie.' 
    },
    { 
        name: 'T-shirts', 
        price: 999, 
        image: 'https://images.unsplash.com/photo-1416339698674-4f118dd3388b?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Typography Printed Stand Collar T-shirt.' 
    },
    { 
        name: 'Cargo pant', 
        price: 2499, 
        image: 'https://images.unsplash.com/photo-1633963643586-1a39077623be?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Step into style with SHOPEASY high-quality clothing for all seasons.' 
    },
    { 
        name: 'Puffer jacket', 
        price: 3499, 
        image: 'https://images.unsplash.com/photo-1612889002697-ac0a7fa8fde4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'Discover the finest quality puffer jacket range.' 
    },
    { 
        name: 'Sweatshirt', 
        price: 1499, 
        image: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        description: 'SHOPEASY offers a range of of sweat shirts.' 
    },
];


function generateProductCards() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p> <!-- Changed $ to ₹ -->
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

function generateProductCards() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

generateProductCards();

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    const menButton = document.getElementById('men-button');
    const womenButton = document.getElementById('women-button');
    const kidsButton = document.getElementById('kids-button');
    const cartButton = document.getElementById('cart-button');

    homeButton.addEventListener('click', function() {
       
        window.location.href = 'home.html';
        
    });
    menButton.addEventListener('click', function() {
        window.location.href = 'men.html';
    });
    womenButton.addEventListener('click', function() {
        window.location.href = 'women.html';
    });
    kidsButton.addEventListener('click', function() {
        window.location.href = 'kids.html';
    });
    cartButton.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });
    
});
function generateProductCards() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="centered-text">${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p class="centered-description">${product.description}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productsSection.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    const menButton = document.getElementById('men-button');
    const womenButton = document.getElementById('women-button');
    const kidsButton = document.getElementById('kids-button');
    const cartButton = document.getElementById('cart-button');

    homeButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    menButton.addEventListener('click', function() {
        window.location.href = 'men.html';

        womenButton.addEventListener('click', function() {
            window.location.href = 'women.html';


            kidsButton.addEventListener('click', function() {
                window.location.href = 'kids.html';

                cartButton.addEventListener('click', function() {
                    window.location.href = 'cart.html';


                });

            });

        });
    
    });
});

generateProductCards();
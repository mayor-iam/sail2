document.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart");
    const cartIcon = document.querySelector(".cartIcon");
    const closeBtn = document.querySelector(".close");
    const productsContainer = document.querySelector(".products");
    const qtyTotal = document.querySelector(".qtyTotal");
    const cartList = document.querySelector(".cartList");
    const quantityDisplay = document.querySelector(".quantity");
    
    let cartItems = [];
    let totalQuantity = 0;
  
    // Fetch products from data.json
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        loadProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Load products into the DOM
    function loadProducts(products) {
      products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("items");
        productItem.innerHTML = `
          <img src="${product.image.thumbnail}" alt="${product.name}" 
          srcset=
          "${product.image.mobile} 375w,
          ${product.image.tablet} 900w,
          ${product.image.desktop} 1440w"">
          <h5 class="category">${product.category}</h5>
          <h2 class="name">${product.name}</h2>
          <div class="price">$${product.price.toFixed(2)}</div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            Add to Cart
          </button>
        `;
        
        // Append the product item to the container
        productsContainer.appendChild(productItem);
  
        // Add event listener for the button
        productItem.querySelector("button").addEventListener("click", () => {
          addToCart(product);
        });
      });
    }
  
    // Function to toggle the cart visibility
    cartIcon.addEventListener("click", () => {
      cart.style.right = cart.style.right === "0px" ? "-100%" : "0";
    });
  
    // Close the cart when "close" is clicked
    closeBtn.addEventListener("click", () => {
      cart.style.right = "-100%";
    });
  
    // Function to add product to the cart
    function addToCart(product) {
      // Check if product is already in the cart
      const existingItem = cartItems.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({
          name: product.name,
          price: product.price,
          imgSrc: product.image.thumbnail,
          quantity: 1
        });
      }
  
      totalQuantity += 1;
      updateCart();
      updateQuantity();
      showCart();
    }
  
    // Function to update cart display
    function updateCart() {
      cartList.innerHTML = "";
      cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("item");
        cartItem.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.name}">
          <div class="content">
            <div class="name">${item.name}</div>
            <div class="price">$${item.price.toFixed(2)}</div>
          </div>
          <div class="quantity">
            <button class="decrease">-</button>
            <span class="value">${item.quantity}</span>
            <button class="increase">+</button>
          </div>
        `;
  
        // Increase or decrease quantity of an item in the cart
        cartItem.querySelector(".increase").addEventListener("click", () => {
          item.quantity += 1;
          totalQuantity += 1;
          updateCart();
          updateQuantity();
        });
  
        cartItem.querySelector(".decrease").addEventListener("click", () => {
          if (item.quantity > 1) {
            item.quantity -= 1;
            totalQuantity -= 1;
          } else {
            cartItems = cartItems.filter(cartItem => cartItem !== item);
            totalQuantity -= 1;
          }
          updateCart();
          updateQuantity();
        });
  
        cartList.appendChild(cartItem);
      });
    }
  
    // Function to update the total quantity on the cart icon
    function updateQuantity() {
      qtyTotal.textContent = totalQuantity;
      quantityDisplay.textContent = totalQuantity;
    }
  
    // Show the cart when an item is added
    function showCart() {
      cart.style.right = "0";
    }
  });
  
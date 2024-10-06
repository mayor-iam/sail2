# Frontend Mentor - Dynamic Cart with Data Fetching Solution

This is a solution for a simple dynamic shopping cart system that fetches product data from a `data.json` file. This project focuses on loading products dynamically into a shopping page and enabling users to add items to a shopping cart, adjust quantities, and view their selections. It’s a great way to practice working with JavaScript for DOM manipulation, event handling, and working with external data files.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all products fetched from `data.json` on the homepage.
- Add a product to the shopping cart.
- See the total number of items in the cart.
- Increase or decrease the quantity of a product in the cart.
- Remove products from the cart when their quantity reaches zero.
- View the cart contents and toggle its visibility.


### Links

- Solution URL: 
- Live Site URL: 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (for DOM manipulation and fetching data)

### What I learned

This project helped reinforce the concepts of working with external data files (like `data.json`) and dynamically rendering content on the page. The process involved manipulating the DOM using JavaScript, which allowed me to build the product display and shopping cart functionality entirely based on fetched data.

Here’s a snippet of how I dynamically loaded products:

```javascript
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    loadProducts(data);
  })
  .catch(error => console.error('Error fetching data:', error));

function loadProducts(products) {
  products.forEach(product => {
    // Create and insert product HTML structure dynamically
  });
}
```

This method ensures that no hardcoded data is present, and all product information is pulled from the external file, making the system more flexible and scalable.

### Continued development

For future development, I’d like to:

- Implement localStorage to persist cart data so that users don't lose their cart when they refresh the page.
- Add user authentication and allow users to save their carts across sessions.
- Improve the responsiveness of the cart UI, particularly for smaller screen devices.
- Optimize performance for large data sets or slow connections.

### Useful resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This is where I found detailed explanations and examples of using the Fetch API, which was crucial for retrieving data from `data.json`.
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This guide helped me understand how to use Flexbox for structuring the cart and product layout efficiently.

## Author

Stephen K Ogunleye

## Acknowledgments

Thanks to the various resources and tutorials I found online, including MDN and CSS-Tricks, for helping me solidify my understanding of JavaScript's Fetch API and CSS layout techniques. I also took inspiration from Frontend Mentor challenges to improve the design of the cart UI.









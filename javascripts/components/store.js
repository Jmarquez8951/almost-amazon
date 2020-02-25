import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';

const addToCartEvent = () => {
    console.log('you clicked add to cart')
    // let domString = '';
    // domString += `This is the cart`;
    // util.printToDom('cart-container', domString);
};

const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += '<button id="add-to-cart-button" class="btn btn-success">Add to Cart</button>';
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};

// { makeStore :makeStore, addToCartEvent: addToCartEvent}
export default {makeStore};
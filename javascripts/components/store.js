import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js';

const addToCartEvent = () => {
    const book = bookData.getBook();
    console.log('you clicked add to cart')
    cart.addToCart(book);
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
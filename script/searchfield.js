import { menu } from "./menu.js";
import { searchForTermInMenu } from "./search.js";
import { createItemCards } from "./cards.js";

const txtsearch = document.getElementById('search-box');
let timeout; // must be outside handler to avoid being reset to undefined

const handler = () => {
    if (timeout) {
        clearTimeout(timeout);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const foundItem = searchForTermInMenu(txtsearch.value, menu);
        createItemCards(foundItem);
    }, 1000);
}
export const setUpSearch = () => {
    txtsearch.addEventListener('keypress', handler);
}




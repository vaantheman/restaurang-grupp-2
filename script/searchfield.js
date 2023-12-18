import { menu } from "./menu.js";
import { searchForTermInMenu } from "./search.js";
import { createItemCards } from "./cards.js";
let timeout;
const txtsearch = document.getElementById('search-box');

function handler() {
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




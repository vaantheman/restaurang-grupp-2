import { menu } from "./menu.js";
const txtsearch = document.getElementById('search-box');

function handler (){

    //getFeaturedItems = (menu) => return ['food1', 'food2']
    //createItemCards(det du får fråon funktionen ovan)

    console.log(txtsearch.value);
}

txtsearch.addEventListener('keypress', debounce(handler, 300));

function debounce(func, ms)
{
    let timeout;
    return (...args) =>
    {
    if (timeout){
        clearTimeout(timeout);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() =>
     {
    func();
     }, ms);

    }
}


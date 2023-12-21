import { createItemCards } from "./cards.js";
import { addToLocalStorage } from './localStorage.js';
import { menu } from "./menu.js";
import { searchForCategoryInMenu } from "./search.js";

const handleCategoryClick = (cat) => {
	createItemCards(searchForCategoryInMenu(cat, menu));
};

export const setUpCategoriesButtons = () => {
	const starters = document.getElementById('starters');
	const bbqs = document.getElementById('bbqs');
	const drinks = document.getElementById('drinks');

	starters.addEventListener('click', () => handleCategoryClick('starters'));

	bbqs.addEventListener('click', () => handleCategoryClick('bbqs'));

	drinks.addEventListener('click', () => handleCategoryClick('drinks'));
};

export const setUpAddToCartButton = (item) => {
	const addToCartBtn = document.createElement('button');
	addToCartBtn.className = 'item-container__btn';
	addToCartBtn.innerText = 'Add To Cart';

	addToCartBtn.addEventListener('click', () => {
		addToLocalStorage(item);
	});

	return addToCartBtn;
};

export const setUpConfirmOrderButton = () => {
	const confirm = document.getElementById('confirmOrder');
	
	confirm.addEventListener('click', () => alert('Your order have been placed!'));
};

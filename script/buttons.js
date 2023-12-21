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

export const setUpToMenuButton = () => {
	const toMenu = document.getElementById('to-menu-btn');
	const categories = document.getElementById('categories');
	const openModalBtn = document.querySelector('[data-open-modal]');
	const heading = document.querySelector('.content__heading');
	const text = document.querySelector('.content__text');
	const search = document.querySelector('.search-container');

	toMenu.addEventListener('click', () => {
		toMenu.classList.add('hidden');
		categories.classList.remove('hidden');
		openModalBtn.classList.remove('hidden');
		search.classList.remove('hidden');
		heading.classList.add('hidden');
		text.classList.add('hidden');

		createItemCards(menu);
	});
};

import { createItemCards } from "./cards.js";
import { menu } from "./menu.js";
import { searchForCategoryInMenu } from "./search.js";

const handleCategoryClick = (cat) => {
	createItemCards(searchForCategoryInMenu(cat, menu));
};

export const setupCategoriesButtons = () => {
	const starters = document.getElementById('starters');
	const bbqs = document.getElementById('bbqs');
	const drinks = document.getElementById('drinks');

	starters.addEventListener('click', () => handleCategoryClick('starters'));

	bbqs.addEventListener('click', () => handleCategoryClick('bbqs'));

	drinks.addEventListener('click', () => handleCategoryClick('drinks'));
};

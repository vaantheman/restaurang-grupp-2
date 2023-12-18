import { getSearchTerm } from "./search.js";

export const printCatCount = (menu) => {
	for (const cat of allCats) {
		console.log(
			cat,
			menu.filter((item) => item.cats.includes(cat))
		);
	}

	console.log({ fullMenu: menu });
};

export const printFeaturedItems = (menu) => {
	let numFeatured = 0;

	for (const { featured, name, cats } of menu) {
		if (featured) {
			++numFeatured;
			console.log({ featured, name, cat: cats[0] });
		}
	}

	console.log(`${numFeatured} featured items in menu`);
};

export const printMenu = (menu) => {
	for (const item of menu) {
		console.log({ item, searchTerm: getSearchTerm(item) });
	}
};

const allCats = [
	'starters',
	'bbqs',
	'breads',
	'burgers',
	'chocolates',
	'desserts',
	'drinks',
	'fried-chicken',
	'ice-cream',
	'pizzas',
	'porks',
	'sandwiches',
	'sausages',
	'steaks',
];

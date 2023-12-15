export const showCatCount = (menu) => {
	for (const cat of allCats) {
		console.log(
			cat,
			menu.filter((item) => item.cats.includes(cat))
		);
	}

	console.log({ fullMenu: menu });
};

export const showFeaturedItems = (menu) => {
	let numFeatured = 0;

	for (const { featured, name, cats } of menu) {
		if (featured) {
			++numFeatured;
			console.log({ featured, name, cat: cats[0] });
		}
	}

	console.log(`${numFeatured} featured items in menu`);
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

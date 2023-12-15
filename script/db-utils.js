export const showCatCount = (menu) => {
	for (const cat of allCats) {
		console.log(
			cat,
			menu.filter((item) => item.cats.includes(cat))
		);
	}

	console.log({ fullMenu: menu });
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

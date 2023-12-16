import { createItemCards } from './script/cards.js';
import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
import { menu } from './script/menu.js';
import { searchForTermInMenu } from './script/search.js';

printCatCount(menu);
printFeaturedItems(menu);
printMenu(menu);
console.log(searchForTermInMenu('dUcK', menu));
createItemCards(menu);

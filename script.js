import { createItemCards } from './script/cards.js';
import { cartModal } from './script/cartDisplay.js';
import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
import { menu } from './script/menu.js';
import { searchForTermInMenu } from './script/search.js';
import { handleUrlParams } from './script/url.js';

// printCatCount(menu);
// printFeaturedItems(menu);
// printMenu(menu);
handleUrlParams();
console.log(searchForTermInMenu('dUcK', menu));
createItemCards(menu);
cartModal();

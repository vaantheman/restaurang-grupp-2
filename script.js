
import { createItemCards } from './script/cards.js';
import { cartModal } from './script/cartDisplay.js';
import { menu } from './script/menu.js';
import { setUpSearch } from './script/searchfield.js';
import { handleUrlParams } from './script/url.js';

/* APP SETUP */
handleUrlParams();
cartModal();
setUpSearch();
createItemCards(menu); // should only show featured items

/* DEBUGGING */
//import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
// printCatCount(menu);
// printFeaturedItems(menu);
// printMenu(menu);

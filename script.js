import { createItemCards } from './script/cards.js';
import { cartModal } from './script/cartDisplay.js';
import { menu } from './script/menu.js';
import { searchForFeaturedItems } from "./script/search.js";
import { handleUrlParams } from './script/url.js';

/* APP SETUP */
handleUrlParams();
cartModal();
createItemCards(searchForFeaturedItems(menu));

/* DEBUGGING */
//import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
// printCatCount(menu);
// printFeaturedItems(menu);
// printMenu(menu);

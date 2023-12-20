
import { cartModal } from './script/cartDisplay.js';
import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
import { menu } from './script/menu.js';
import { searchForTermInMenu } from './script/search.js';
import {setUpSearch} from './script/searchfield.js';
printCatCount(menu);
printFeaturedItems(menu);
printMenu(menu);
console.log(searchForTermInMenu('dUcK', menu));

cartModal();
setUpSearch();

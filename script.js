import { createItemCards } from './script/cards.js';
import { printMenu, showCatCount, showFeaturedItems } from './script/db-utils.js';
import { menu } from './script/menu.js';

showCatCount(menu);
showFeaturedItems(menu);
printMenu(menu);
createItemCards(menu);

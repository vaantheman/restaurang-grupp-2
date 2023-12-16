import { createItemCards } from './script/cards.js';
import { printCatCount, printFeaturedItems, printMenu } from './script/db-utils.js';
import { menu } from './script/menu.js';

printCatCount(menu);
printFeaturedItems(menu);
printMenu(menu);
createItemCards(menu);

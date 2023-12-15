import { createItemCards } from './script/cards.js';
import { showCatCount, showFeaturedItems } from './script/db-utils.js';
import { menu } from './script/menu.js';

showCatCount(menu);
showFeaturedItems(menu);
createItemCards(menu);

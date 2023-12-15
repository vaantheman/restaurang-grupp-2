import { createItemCards } from './script/cards.js';
import { showCatCount } from './script/db-utils.js';
import { menu } from './script/menu.js';

showCatCount(menu);
createItemCards(menu);

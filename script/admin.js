import { removeItemFromMenu } from "./menu.js";

export const getAdminStatus = () => {
	return localStorage.getItem('admin');
};

const adminToggleFeatured = (item, container) => {
	const toggleFeaturedBtn = document.createElement('button');
	toggleFeaturedBtn.innerText = item.featured ? 'Remove featured' : 'Add Featured';

	toggleFeaturedBtn.addEventListener('click', () => {
		item.featured = !item.featured;
		toggleFeaturedBtn.innerText = item.featured ? 'Remove featured' : 'Add Featured';
	});

	container.appendChild(toggleFeaturedBtn);
};

const adminDeleteItem = (item, container) => {
	const deleteItemBtn = document.createElement('button');
	deleteItemBtn.innerText = 'Remove item';

	deleteItemBtn.addEventListener('click', () => {
		removeItemFromMenu(item.id);
		container.classList.add('item-container--deleted');
	});

	container.appendChild(deleteItemBtn);
};

export const generateAdminElements = (item, container) => {
	adminDeleteItem(item, container);
	adminToggleFeatured(item, container);
};

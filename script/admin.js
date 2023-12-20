export const generateAdminElements = (item) => {
	const toggleFeaturedBtn = document.createElement('button');
	toggleFeaturedBtn.innerText = item.featured ? 'Remove featured' : 'Add Featured';

	toggleFeaturedBtn.addEventListener('click', () => {
		item.featured = !item.featured;
		toggleFeaturedBtn.innerText = item.featured ? 'Remove featured' : 'Add Featured';
	});

	return toggleFeaturedBtn;
};

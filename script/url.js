export const getTableNumber = () => {
	return new URLSearchParams(window.location.search).get('table');
};

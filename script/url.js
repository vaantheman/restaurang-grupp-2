export const handleUrlParams = () => {
	const params = new URLSearchParams(location.search);

	if (params.has('table')) {
		localStorage.setItem('table', params.get('table'));
		history.replaceState(null, '', 'index.html');
	}

};

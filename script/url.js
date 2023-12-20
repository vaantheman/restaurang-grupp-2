export const handleUrlParams = () => {
	const params = new URLSearchParams(location.search);

	if (params.has('table')) {
		localStorage.setItem('table', params.get('table'));
	}

	if (params.has('admin')) {
		localStorage.setItem('admin', params.get('admin'));
	} else {
		localStorage.removeItem('admin');
	}

	history.replaceState(null, '', 'index.html');
};

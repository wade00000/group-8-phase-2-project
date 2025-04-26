import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';

// Custom hook to fetch (get) data from an API
const useFetch = (url) => {
	const [data, setData] = useState(null); // Store fetched data
	const [loading, setLoading] = useState(true); // Track loading state
	const [error, setError] = useState(false);
	const [update, forceUpdate] = useReducer(x => x + 1, 0); // Force re-render
	// This is a workaround to force the component to re-render when the data changes

	useEffect(() => {
		const fetchData = async () => {
			try {
				const json = await axios.get(url);
				setData(json.data); // Save the data
			} catch (error) {
				console.error('Fetch error:', error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, update]);
	return { data, loading, error, forceUpdate};
};

export default useFetch;

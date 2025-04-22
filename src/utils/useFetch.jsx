import axios from 'axios';
import { useState, useEffect } from 'react';

// Custom hook to fetch (get) data from an API
const useFetch = (url) => {
	const [data, setData] = useState(null); // Store fetched data
	const [loading, setLoading] = useState(true); // Track loading state
	const [error, setError] = useState(false);

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
	}, [url]);
	return { data, loading, error };
};

export default useFetch;

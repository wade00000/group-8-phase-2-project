import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [update, forceUpdate] = useReducer(x => x + 1, 0); // Force re-render
		// This is a workaround to force the component to re-render when the data changes

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, update]);

	return { data, loading, error, forceUpdate };
}

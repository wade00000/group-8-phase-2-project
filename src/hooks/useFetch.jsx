import { useReducer, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [update, forceUpdate] = useReducer(x => x + 1, 0); // Force re-render
	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await axios.get(url?.current || url);
			setData(response.data);
		} catch (err) {
			setError(err);
		} finally {
			// setTimeout(() => setLoading(false), 500)
			setLoading(false)
		}
	};

	return { data, loading, error, fetchData, update, forceUpdate };
}

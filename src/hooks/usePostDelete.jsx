import { useState } from 'react';
import axios from 'axios';

export default function usePostDelete() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const postData = async (url, body) => {
		setLoading(true);
		try {
			await axios.post(url, body);
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	const deleteData = async (url) => {
		setLoading(true);
		try {
			await axios.delete(url);
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { postData, deleteData, loading, error };
}

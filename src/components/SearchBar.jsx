import '../Styles/Variables.css';
import '../Styles/Searchbar.css'; 

export default function SearchBar({ handleSubmit, value, handleChange }) {
	

	return (
		<form onSubmit={handleSubmit} className="search-bar">
			<input
				placeholder="Search title..."
				type="search"
				name="search"
				id="search"
				value={value}
				onChange={handleChange}
				className="search-input"
			/>
		</form>
	);
}

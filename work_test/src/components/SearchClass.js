const SearchClass = ({ onChange, buttonClicked }) => {
	const handleClassChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<select onChange={handleClassChange}>
			<option>Select a vehicle</option>
			<option value="car">Car</option>
			<option value="van">Van</option>
			<option value="bus">Bus</option>
		</select>
	);
};

export default SearchClass;

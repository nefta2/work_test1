const SearchComp = ({ keyName, onChange, buttonClicked }) => {
	const handleCompChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<>
			{keyName.length && (
				<select onChange={handleCompChange}>
					<option>{'Select a component'}</option>
					<option value={'all'}>All</option>
					{Object.keys(keyName[0])
						.slice(1)
						.map((key) => (
							<option value={key}>{key}</option>
						))}
				</select>
			)}
		</>
	);
};

export default SearchComp;

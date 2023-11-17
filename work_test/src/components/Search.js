import SearchClass from './SearchClass';
import SearchComp from './SearchComp';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Graph from './Graph';

const Search = ({ classCar, graphMed }) => {
	const [vehicle, setVehicle] = useState('');
	const [component, setComponent] = useState('');

	return (
		<div className="outerSearch">
			<SearchClass onChange={(value) => setVehicle(value)} />
			<SearchComp
				keyName={classCar}
				onChange={(value) => setComponent(value)}
			/>
			<button>View</button>
			{graphMed && graphMed.length && (
				<Graph graphMed={graphMed} vehicle={vehicle} component={component} />
			)}
		</div>
	);
};

export default Search;

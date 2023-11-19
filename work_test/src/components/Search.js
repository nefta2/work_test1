import SearchClass from './SearchClass';
import SearchComp from './SearchComp';
import React, { useEffect, useState } from 'react';
import Graph from './Graph';

const Search = ({ classCar, graphMed }) => {
	const [vehicle, setVehicle] = useState('');
	const [component, setComponent] = useState('');
	const [buttonClicked, setButtonClicked] = useState(false);

	const clickedButton = () => {
		setButtonClicked(true);
	};

	useEffect(() => {
		if (buttonClicked) {
			setButtonClicked(false);
		}
	}, [vehicle, component]);

	return (
		<div className="outerSearch">
			<div className="optionsDiv">
				<SearchClass onChange={(value) => setVehicle(value)} />
				<SearchComp
					keyName={classCar}
					onChange={(value) => setComponent(value)}
				/>
				<button onClick={clickedButton} className="button">
					View
				</button>
			</div>

			{graphMed && graphMed.length && (
				<Graph
					graphMed={graphMed}
					vehicle={vehicle}
					component={component}
					buttonClicked={buttonClicked}
				/>
			)}
		</div>
	);
};

export default Search;

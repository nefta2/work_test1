import React, { useEffect } from 'react';
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Graph = ({ graphMed, vehicle, component }) => {
	const filteredClass = graphMed.filter((dato) => dato.class == vehicle);

	const data = {
		labels:
			component == 'all' ? Object.keys(graphMed[0]).slice(1) : [component],
		datasets: [
			{
				label: component,
				data:
					component == 'all'
						? Object.keys(graphMed[0])
								.slice(1)
								.map((key) => filteredClass.map((dato) => dato[key]))
						: filteredClass.map((dato) => dato[component]),
				backgroundColor: 'aqua',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};
	const options = {
		scales: {
			xAxes: [
				{
					barPercentage: 0.4,
				},
			],
		},
	};
	return (
		<div className="containerBar">
			<Bar data={data} options={options} width={500} />
		</div>
	);
};

export default Graph;

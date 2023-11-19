import React from 'react';
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

const Graph = ({ graphMed, vehicle, component, buttonClicked }) => {
	const filteredClass = graphMed.filter((dato) => dato.class === vehicle);

	const updateBars = buttonClicked && vehicle && component;

	const data = {
		labels:
			component === 'all'
				? Object.keys(graphMed[0]).slice(1).replace(/[_]/g, '')
				: [component],
		datasets: [
			{
				label:
					component === 'all' ? Object.keys(graphMed[0]).slice(1) : [component],
				data: updateBars
					? component === 'all'
						? Object.keys(graphMed[0])
								.slice(1)
								.map((key) => filteredClass.map((dato) => dato[key]))
						: filteredClass.map((dato) => dato[component])
					: [],
				backgroundColor: [
					'#593cfb',
					'#5f43fb',
					'#816bfb',
					'#a99bfc',
					'#d2cbfd',
				],
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

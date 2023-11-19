import Table from './components/Table';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import Graph from './components/Graph';

function App() {
	let [classCar, setClassCar] = useState([]);
	let [graphMed, setGraphMed] = useState([]);

	let [quality, setQuality] = useState('');

	useEffect(() => {
		const getData = async () => {
			const datosFromAPI = await fetchData();
			setClassCar(datosFromAPI);
		};

		getData();
	}, []);

	//UseEffect for Med problema
	useEffect(() => {
		const getData = async () => {
			const datosFromAPI = await fetchMed();
			setGraphMed(datosFromAPI);
		};

		getData();
	}, []);

	//Fetch Data Deviation
	const fetchData = async () => {
		const rest = await fetch('http://localhost:8000/data_parquet');
		const data = await rest.json();
		return data;
	};

	//Fetch Data med
	const fetchMed = async () => {
		const rest = await fetch('http://localhost:8000/get_med');
		const data = await rest.json();
		return data;
	};

	return (
		<div>
			<h1>Desviación estándar</h1>
			<Table classCar={classCar} />
			<h1 id="paddingTop">Promedio</h1>
			<Search classCar={classCar} graphMed={graphMed} />
		</div>
	);
}

export default App;

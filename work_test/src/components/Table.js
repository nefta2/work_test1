const Table = ({ classCar }) => {
	return (
		<>
			{classCar.length && (
				<table style={{ width: 1000 }}>
					<thead>
						<tr className="upperTableTr">
							<th className="upBanners">Componente</th>
							<th className="upBanners">Car</th>
							<th className="upBanners">Van</th>
							<th className="upBanners">Bus</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(classCar[0])
							.slice(1)
							.map((datos, index) => (
								<tr key={index}>
									<th className="dataStyle">{datos}</th>
									{classCar.map((value, index2) => (
										<th key={index2} className="dataStyle">
											{value[datos]}
										</th>
									))}
								</tr>
							))}
					</tbody>
				</table>
			)}{' '}
		</>
	);
};

export default Table;

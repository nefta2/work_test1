const Table = ({ classCar }) => {
	return (
		<>
			{classCar.length && (
				<table style={{ width: 1000 }} className="container">
					<tbody>
						{Object.keys(classCar[0]).map((datos, index) => (
							<tr key={index}>
								<th>{datos}</th>
								{classCar.map((value, index2) => (
									<th key={index2}>{value[datos]}</th>
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

import React from 'react';

const Table = () => {
	const Datos = [{ class: 'car' }, { class: 'van' }];
	return (
		<table style={{ width: 500, align: 'center' }}>
			<tr>
				{Datos.map((datos) => (
					<th>{datos.class}</th>
				))}
			</tr>
			<tr>
				<th>Picanto</th>
				<th>Cul</th>
			</tr>
		</table>
	);
};

export default Table;

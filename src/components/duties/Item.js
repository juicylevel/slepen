import React from 'react';
import { formatDate, formatTime } from '../../utils/date';

const Item = (props) => {
	const tdStyle = {
		padding: '10px',
		border: '1px solid black'
	}
	const resultClass = `fa fa-${props.result === 'success' ? 'check' : 'times'}`;
	const resultStyle = { color: `${props.result === 'success' ? 'green' : 'red'}` }
	// TODO: display deleting progress
	return (
		<tr>
			<td style={ tdStyle }>{ formatDate(props.date) }</td>
			<td style={ tdStyle }>{ props.missionType }</td>
			<td style={ tdStyle }>{ formatTime(props.missionTime) }</td>
			<td style={ tdStyle }>{ formatTime(props.resultTime) }</td>
			<td style={{ ...tdStyle, ...resultStyle, textAlign: 'center' }}>
				<i className={ resultClass } />
			</td>
			<td style={{ ...tdStyle, textAlign: 'center' }} title="удалить" onClick={ props.onDelete }>
				<i className="fa fa-trash-o" style={{ cursor: 'pointer' }} />
			</td>
		</tr>
	)
}

export default Item;
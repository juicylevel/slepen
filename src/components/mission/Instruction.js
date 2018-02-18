import React from 'react';
import { missions } from '../../constants/data';
import { formatTime } from '../../utils/date';

const Instruction = ({ missionType, missionTime, onStart, onCancel }) => {
	const { name } = missions[missionType];
	const missionTimeString = formatTime(missionTime);
	return (
		<div>
			<h3>Боевая тревога!</h3>
			<p>{ `Командир, тебе приказывается уничтожить корабль противника "${name}" за` }</p>
			<p>{ missionTimeString }</p>
			<div>
				<button className="big-button green-button" onClick={ onStart }>Начать</button>
				<button className="big-button" onClick={ onCancel }>Отмена</button>
			</div>
		</div>
	)
}

export default Instruction;
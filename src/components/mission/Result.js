import React, { Component } from 'react';
import { formatTime } from '../../utils/date';

class Result extends Component {
	renderSavingStatus () {
		const { saving } = this.props;
		let text;
		switch (saving) {
			case 'inprogress': text = 'Сохранение результата...'; break;
			case 'completed': text = 'Результат сохранён'; break;
			case 'error': text = 'Ошибка при сохранении результата'; break;
			default: text = '';
		}
		return text;
	}

	render () {
		const { resultTime, saving, onClose } = this.props;
		const resultTimeString = formatTime(resultTime);
		const savingStatus = this.renderSavingStatus();
		const busy = saving === 'inprogress';

		return (
			<div>
				<h3>Результат { resultTimeString }</h3>
				<p>{ savingStatus }</p>
				<div>
					<button className="big-button" onClick={ onClose } disabled={ busy }>Закрыть</button>
				</div>
			</div>
		)
	}
}

export default Result;
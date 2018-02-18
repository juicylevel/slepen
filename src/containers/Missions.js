import React, { Component } from 'react';
import StartButton from '../components/StartButton';

class Missions extends Component {
	handleStartButton = missionType => {
		const { history } = this.props;
		history.push(`/mission/${missionType}`)
	}

	render () {
		return (
			<div>
				<h3>Миссии</h3>
				<div>
					<StartButton 
						type="class1" 
						text={ <span>Атаковать<br/>Класс 1</span> }
						className="green-button" 
						onClick={ this.handleStartButton } 
					/>
					<StartButton 
						type="class2" 
						text={ <span>Атаковать<br/>Класс 2</span> }
						className="yellow-button"  
						onClick={ this.handleStartButton } 
					/>
					<StartButton 
						type="class3" 
						text={ <span>Атаковать<br/>Класс 3</span> }
						className="red-button" 
						onClick={ this.handleStartButton } 
					/>
				</div>
			</div>
		)
	}
}

export default Missions;
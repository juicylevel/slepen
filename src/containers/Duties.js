import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/duties';
import List from '../components/duties/List';

class Duties extends Component {
	confirmDelete () {
		if (window.confirm('Вы подтверждаете удаление дежурства?')) {
			return true;
		} else {
			return false;
		}
	}

	handleDelete = key => {
		const { handleDelete } = this.props;
		if (this.confirmDelete()) {
			handleDelete(key);
		}
	}

	render () {
		const { handleDisplayNext } = this.props;
		return (
			<div>
				<h3>Список дежурств</h3>
				<List { ...this.props } onDelete={ this.handleDelete } onDisplayNext={ handleDisplayNext } />
			</div>
		)
	}

	componentDidMount () {
		const { handleDidMount } = this.props;
		handleDidMount();
	}
}

export default connect(
	state => ({
		...state.duties
	}), 
	dispatch => ({
		handleDidMount: () => dispatch(actions.fetchDuties()),
		handleDisplayNext: () => dispatch(actions.fetchNextDuties()),
		handleDelete: key => dispatch(actions.deleteDuty(key))
	})
)(Duties);
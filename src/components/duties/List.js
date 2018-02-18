import React, { Component } from 'react';
import { map } from 'lodash';
import Item from './Item';

class List extends Component {
	renderStatus () {
		const { loading, items } = this.props;
		// TODO: refactoring
		let status = '';
		if (!loading && (!items || items.length === 0)) {
			status = 'записей нет'
		} else if (loading) {
			status = 'загрузка...'
		}
		//
		return status;
	}

	renderColumns () {
		const thStyle = {
			padding: '10px',
			border: '1px solid black'
		}
		return (
			<tr>
				<th style={ thStyle }>Дата</th>
				<th style={ thStyle }>Тип миссии</th>
				<th style={ thStyle }>Время на выполнение</th>
				<th style={ thStyle }>Время выполнения</th>
				<th style={ thStyle }>Результат</th>
				<th style={ thStyle }>Действия</th>
			</tr>
		)
	}

	renderList () {
		const { items, onDelete } = this.props;
		return map(items, item => {
			return <Item key={ item.id } { ...item } onDelete={ onDelete.bind(null, item.id) } /> 
		})
	}

	renderToolBar () {
		const { hasNext, onDisplayNext } = this.props;
		return (
			hasNext &&
				<div>
					<a onClick={ onDisplayNext }>показать ещё</a>
				</div>
		)
	}

	render () {
		const status = this.renderStatus();
		const columns = this.renderColumns();
		const list  = this.renderList();
		const toolBar = this.renderToolBar();
		const tableStyle = {
			borderCollapse: 'collapse',
    		border: '1px solid black' 
		}
		return (
			<div>
				<table style={ tableStyle }>
					<thead>{ columns }</thead>
					<tbody>{ list }</tbody>
				</table>
				{ toolBar }
				<p>{ status }</p>
			</div>
		)
	}
}

export default List;
import React, { Component } from 'react';
import './table-list.scss';

import TableListItem from '../components/TableListItem';

export default class TableList extends Component {
	render() {
		const { collection, data, ui = [] } = this.props;

		return (
			<div className="table-list">
				<div className="table-list-header">
					{ui.map(prop => <p className="header-item">{prop}</p>)}
				</div>
				{data.map(item => {			
					return (
						<TableListItem
							ui={ui}
							key={item.key}
							label={item.key}
							item={item}
							link={`/collection/${collection}/${item.key}`}
						/>
					)
				})}
			</div>
		);
	}
}

import React, { Component } from 'react';
import './table-list.scss';

import TableListItem from './TableListItem';

export default class TableList extends Component {
	render() {
		const { collection, data, ui = [] } = this.props;

		return (
			<div className="table-list">
				<div className="table-list__header">
					{ui.map(prop => <p className="table-list__header__col">{prop}</p>)}
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

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import typeOf from 'typeof';


const renderValue = (value) => {
	switch (typeOf(value)){
		case 'array':
			return renderArray(value)

		case 'boolean':
			return renderBoolean(value)

		default:
			return value;
	}
}
const renderBoolean = (value) => value ? 'YES' : '';
const renderArray = (array) => array.join(', ');

export default class TableListItem extends Component {
	render() {
		const { link, item, ui } = this.props;
		return (
			<div className="table-list__item">
				<Link className="content" to={link}>
					{ui.map((prop, index) => <p key={index} className="content-item">{renderValue(item[prop])}</p>)}
				</Link>
			</div>
		);
	}
}

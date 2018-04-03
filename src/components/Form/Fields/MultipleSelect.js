// Checkbox.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

import Select from 'react-select'

import 'react-select/dist/react-select.css';

const options = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

class MultipleSelect extends React.Component{
	constructor(props) {
	  super(props)

	  this.state = {
			removeSelected: true,
			disabled: false,
			crazy: false,
			stayOpen: false,
			value: [],
			rtl: false,
	  }
	}

	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}

	render(){
		const { input, meta, ...props} = this.props;

		console.log(input);
		console.log(meta);
		console.log(props);

		return(
		  <span>
				<Select
					multi
					onChange={(value) => this.handleSelectChange(value)}
					options={options}
					placeholder="Select your favourite(s)"
				  removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={this.state.value}
				/>
		    {meta.error && meta.touched && meta.dirty &&
		      <span style={{ color: 'red' }}>{meta.error}</span>
		    }
		  </span>
		)
	}
}


export default dripFormField('tags')(MultipleSelect);
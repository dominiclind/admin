// Checkbox.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'


class Tags extends React.Component{
	constructor(props) {
	  super(props)
	}

	render(){
		const { input, meta, ...props} = this.props;
		return(
		  <span>
		  	<TagsInput value={input.value || []} onChange={(tags) => {
  				input.onChange(tags);
		  	}} />
		    {meta.error && meta.touched && meta.dirty &&
		      <span style={{ color: 'red' }}>{meta.error}</span>
		    }
		  </span>
		)
	}
}


export default dripFormField('tags')(Tags);
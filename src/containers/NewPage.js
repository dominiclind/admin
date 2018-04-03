import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from 'src/components/Form/Form';

import schemas from 'src/schemas';

import {db} from 'src/firebase';

console.log(schemas);

class NewPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedSchema : false
	  };
	}
	
	handleSubmit(values) {
    console.log('This is valid values!!', values);
    db.push(`/${this.state.selectedSchema}`, values).then(res => {
    	console.log(res);
    })
  }

	render(){

		return(
			<div className="home-page">
				<p>protected, only to logged in users</p>
				{/*<Form schema={schemas.password} />*/}

					<select onChange={(e) => {
						this.setState({selectedSchema: e.target.value})
					}}>
						<option value="">select schema</option>
						{Object.keys(schemas).map(key => key !== 'user' ? <option key={key} value={key}>{key}</option>: null)}
					</select>

				{this.state.selectedSchema ? (
					<Form onValidSubmit={(values) => this.handleSubmit(values)} schema={schemas[this.state.selectedSchema || schema]}/>
				) : null}
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(NewPage);
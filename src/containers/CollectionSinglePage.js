import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from 'src/components/Form/Form';

import schemas from 'src/schemas';

import {db} from 'src/firebase';

console.log(schemas);

class CollectionSinglePage extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: false
	  };
	}
	componentDidMount() {
		const { history } = this.props;
		const { collection, id } = this.props.match.params;

		if(schemas[collection] == undefined){
			this.props.history.push('/');
		} else {
			db.get(`/${collection}`).then(res => {
				if(res.val() == null || !res.val()[id]){
					history.push('/')
				}

				const data = res.val()[id];
				this.setState({data})
			})
		}
	}
	
	handleSubmit(values) {
		const {collection, id } = this.props.match.params;
    db.set(`/${collection}/${id}`, values).then(res => {
    	console.log(res);
    })
  }

	render(){
		const {collection, id } = this.props.match.params;

		return !this.state.data ? <p>loading</p> : (
			<div className="edit-page">
				{/*<Form schema={schemas.password} />*/}
				{schemas[collection] ? (
					<Form
						values={this.state.data}
						onValidSubmit={(values) => this.handleSubmit(values)}
						schema={schemas[collection]}/>
				) : null}
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(CollectionSinglePage);
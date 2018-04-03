import React, {Component} from 'react';
import { connect } from 'react-redux';

import {db} from 'src/firebase';

import TableList from 'src/components/TableList/TableList';
import TableListItem from 'src/components/TableList/TableListItem';

import Button from 'src/components/Button/Button';

class HomePage extends Component {
	constructor(props) {
	  super(props);
	}


	render(){
		return(
			<div>
				<h1>dashboard?</h1>
				<Button onClick={() => console.log('hey')}>Click me</Button>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(HomePage);
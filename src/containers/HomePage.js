import React, {Component} from 'react';
import { connect } from 'react-redux';

import {db} from 'src/firebase';

import TableList from 'src/components/TableList/TableList';
import TableListItem from 'src/components/TableList/TableListItem';

class HomePage extends Component {
	constructor(props) {
	  super(props);
	}


	render(){
		return(
			<h1>dashboard?</h1>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(HomePage);
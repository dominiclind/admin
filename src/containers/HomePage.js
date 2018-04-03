import React, {Component} from 'react';
import { connect } from 'react-redux';

import {db} from '../firebase';

import LayoutSidebar from '../components/LayoutSidebar';
import TableList from '../components/TableList';
import TableListItem from '../components/TableListItem';

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
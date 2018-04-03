import React, {Component} from 'react';
import { connect } from 'react-redux';

import {boot} from 'src/actions/session';

class LandingPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentDidMount() {
		// this.props.dispatch(boot())
	}

	render(){

		return(
			<div className="landing-page">
				<h1>Landing page</h1>
				<p>Accessible to all</p>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(LandingPage);
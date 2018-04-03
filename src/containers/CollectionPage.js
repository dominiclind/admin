import React, {Component} from 'react';
import { connect } from 'react-redux';

import schemas from '../schemas';

import {db} from '../firebase';

import TableList from '../components/TableList';


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class CollectionPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: {},
	  	collection: this.props.match.params.collection
	  };
	}
	componentDidMount() {
		const { collection } = this.props.match.params;

		db.get(`/${collection}`).then(res => {
			this.setState({data: res.val()})
		})
	}
	componentDidUpdate(prevProps, prevState) {
     /**
     * this is the initial render
     * without a previous prop change
     */
    if(prevProps == undefined) {
        return false
    }

    /**
     * new collection in town ?
     */
    if (this.state.collection != this.props.match.params.collection) {
			db.get(`/${this.props.match.params.collection}`).then(res => {
				this.setState({data: res.val(), collection: this.props.match.params.collection})
			})
    }
  }

	render(){
		const { collection } = this.props.match.params;
		const current = schemas[collection]
		
		return(
			<div className="home-page">
				<h1>{capitalizeFirstLetter(collection)}</h1>
				<TableList
					ui={current.ui}
					collection={collection}
					data={Object.keys(this.state.data).map(key => {
						const item = this.state.data[key]
						return {
							key,
							...item
						}
					})}
				/>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(CollectionPage);
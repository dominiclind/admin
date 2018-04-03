import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layout-sidebar.scss';

export default class LayoutSidebar extends Component {
	render() {
		return (
			<div className="layout-sidebar">
				<div className="sidebar">
					<div className="logo">logo</div>
					<div className="collections">
						<h5>Collections</h5>
						<ul>
							{this.props.collections.map(key => {
								return (
									<Link key={key}to={`/collection/${key}`}>
										<li>
											{key}
										</li>
									</Link>
								)
							})}
						</ul>
					</div>
					<div className="navigation">
						{this.props.navigation}
					</div>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

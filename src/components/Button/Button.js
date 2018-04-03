import React, { Component } from 'react';
import './button.scss';


export default (props) =>  (
	<button
		className="button"
		onClick={props.onClick}
	>
		Hello Button
	</button>
)
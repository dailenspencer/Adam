import React from 'react';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		
	}
	
	render() {
		return (
			<div className="BarSection" >
				<h>{this.props.name}</h>
				<div id={this.props.id} className="Bar"></div>
			</div>
		);
	}
}
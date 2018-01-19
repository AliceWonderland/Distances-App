import React, { Component } from 'react';

class Result extends Component {
	constructor(props){
		super(props);
		this.state=this.props;
	}

	render() {
		console.log(this.state);
		let origin=this.state.distances[0].origin_addresses[0];
		let dest=this.state.distances[0].destination_addresses[0];
		let duration=this.state.distances[0].rows[0].elements[0].duration.text;
		return (
		  <div>
			  <h1><i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.props.toggle}></i> <span>How Long Is The Drive?</span></h1>
			<hr/>
			<h5>Origin:</h5>
			  {origin}
			<h5>Desination:</h5>
			  {dest}
		  	<h1>{duration}</h1>
		</div>
		);
	}
}

export default Result;
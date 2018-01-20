import React, { Component } from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		this.state=this.props;
	}

	render() {
		console.log(this.state);
		return (
		  <div>
			  <h1>How Long Is The Drive?</h1>
			  <hr/>
			  <form>
				  <h5>Origin:</h5>
				  <input type="text" name="ipOrigin" onChange={this.handleChange} defaultValue={this.state.ipOrigin} onKeyPress={this.props.click} />
				  <h5>Desination:</h5>
				  <input type="text" name="ipDest" onChange={this.handleChange} defaultValue={this.state.ipDest} onKeyPress={this.props.click} />
				  <input type="button" value="Calculate" onClick={this.props.click} />
			  </form>
		  </div>
		);
	}
}

export default Form;
import React, { Component } from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import Result from './Result';
import Form from './Form';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			ipOrigin:'131.107.255.255',
			ipDest:'8.8.8.8',
			coords:[
				{
					"ip": "131.107.255.255",
					"country_code": "US",
					"country_name": "United States",
					"region_code": "WA",
					"region_name": "Washington",
					"city": "Redmond",
					"zip_code": "98052",
					"time_zone": "America/Los_Angeles",
					"latitude": 47.6801,
					"longitude": -122.1206,
					"metro_code": 819
				},
				{
					"ip": "8.8.8.8",
					"country_code": "US",
					"country_name": "United States",
					"region_code": "",
					"region_name": "",
					"city": "",
					"zip_code": "",
					"time_zone": "",
					"latitude": 37.751,
					"longitude": -97.822,
					"metro_code": 0
				}
			],
			distances:[
				{
					"destination_addresses": [
						"8545 166th Ave NE, Redmond, WA 98052, USA"
					],
					"origin_addresses": [
						"Unnamed Road, Mt Hope, KS 67108, USA"
					],
					"rows": [
						{
							"elements": [
								{
									"distance": {
										"text": "1,800 mi",
										"value": 2896698
									},
									"duration": {
										"text": "1 day 2 hours",
										"value": 94781
									},
									"status": "OK"
								}
							]
						}
					],
					"status": "OK"
				}
			],
			showResult:false
		};

		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.toggleResult=this.toggleResult.bind(this);
	}

	handleChange(e){
		console.log(e.target, e.target.name, e.target.value);

		var change = {};
		change[e.target.name] = e.target.value;
		this.setState(change);

		console.log(this.state);
	}

	toggleResult(){
		this.setState({showResult:false});
	}

	handleClick(e){
		console.log('click',e.target.value);
		// e.preventDefault();
		// validate
		// check for numbers and . only
		// show error msg
		if(e.key == 'Enter' || e.target.value==='Calculate'){
			this.setState({showResult:true});
		}

		// axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592&key=AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY',
		//   {
		//   	headers: {
		// 	'Access-Control-Allow-Origin': '*',
		// 	'Access-Control-Allow-Methods': 'POST',
		// 	'Content-Type': 'application/json',
		// 	}
		//   }
		// )
		// .then(res => {res.data})
		// .then(campuses => {console.log(campuses)});
		// .then(campuses => this.setState({ campuses }));

		// fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592&key=AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY',
		//   {
		// 	method: 'get',
		// 	mode: 'no-cors',
		// 	headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
		// 	}
		// ).then(response => response.json());

		return fetch('http://freegeoip.net/json/100.2.212.46', {
			headers: { 'Access-Control-Allow-Origin': '*' },
			mode: 'no-cors'
		}).then(res => {
			if (res.status >= 200 && res.status < 300) {
				return Promise.resolve(res)
			} else {
				return Promise.reject(new Error(res.statusText))
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			return data;
		}).catch(err => {
			console.log('e',err);
		});
	}

	render() {
		let showResult=this.state.showResult;
		return (
			<div className="App">
				<header className="App-header">
					<i className="fa fa-car fa-6" aria-hidden="true"></i>
					<h1 className="App-title">Hello, Distances!</h1>
				</header>
				<main>
					{
						showResult ?
						  <Result {...this.state} toggle={this.toggleResult} />
						  :
						  <div>
							  <h1>How Long Is The Drive?</h1>
							  <hr/>
							  <form>
								  <h5>Origin:</h5>
								  <input type="text" name="ipOrigin" onChange={this.handleChange} defaultValue={this.state.ipOrigin} onKeyPress={this.handleClick} />
								  <h5>Desination:</h5>
								  <input type="text" name="ipDest" onChange={this.handleChange} defaultValue={this.state.ipDest} onKeyPress={this.handleClick} />
								  <input type="button" value="Calculate" onClick={this.handleClick} />
							  </form>
						  </div>
					}
					{/*<Form {...this.state} click={this.handleClick} change={this.handleChange} />*/}
				</main>
			</div>
		);
	}
}

// AIzaSyBPFb3UwyWhtRQbTXLgmXVfIm6pqMhA4fQ
//
// distance matrix api key AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY
// change this later

// ip address to lat/long
// http://freegeoip.net/json/100.2.212.46

// google distance api
// https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592&key=AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY

export default App;
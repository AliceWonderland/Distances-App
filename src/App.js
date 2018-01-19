import React, { Component } from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import Result from './Result';
// import GroceryListLive from './GroceryListLive';
// import BasketListLive from './BasketListLive';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			ipOrigin:'100.2.212.46',
			ipDest:'174.138.48.238',
			coords:[
				{
					"ip": "100.2.212.46",
					"country_code": "US",
					"country_name": "United States",
					"region_code": "NY",
					"region_name": "New York",
					"city": "New York",
					"zip_code": "10128",
					"time_zone": "America/New_York",
					"latitude": 40.7805,
					"longitude": -73.9512,
					"metro_code": 501
				},
				{
					"ip": "174.138.48.238",
					"country_code": "US",
					"country_name": "United States",
					"region_code": "NY",
					"region_name": "New York",
					"city": "New York",
					"zip_code": "10013",
					"time_zone": "America/New_York",
					"latitude": 40.7214,
					"longitude": -74.0052,
					"metro_code": 501
				}
			],
			distances:[
				{
					"destination_addresses": [
						"62 6th Ave, New York, NY 10013, USA"
					],
					"origin_addresses": [
						"230 E 89th St, New York, NY 10128, USA"
					],
					"rows": [
						{
							"elements": [
								{
									"distance": {
										"text": "8.3 mi",
										"value": 13437
									},
									"duration": {
										"text": "27 mins",
										"value": 1629
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
		console.log(e.target);
		// validate
		// check for numbers and . only
		// show error msg

		// set flag true
		this.setState({showResult:true});

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
								  <input type="text" name="ipOrigin" onChange={this.handleChange} defaultValue={this.state.ipOrigin} />
								  <h5>Desination:</h5>
								  <input type="text" name="ipDest" onChange={this.handleChange} defaultValue={this.state.ipDest} />
								  <input type="button" value="Calculate" onClick={this.handleClick} />
							  </form>
						  </div>
					}

				</main>
			</div>
		);
	}
}

// AIzaSyBPFb3UwyWhtRQbTXLgmXVfIm6pqMhA4fQ
//
// distance matrix api key AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY

// ip address to lat/long
// http://freegeoip.net/json/100.2.212.46
// https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592&key=AIzaSyBpgw0eU6ESBVl8ddw-FtVitFZIMeEOTjY

export default App;
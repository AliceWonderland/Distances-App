import React, { Component } from 'react';
import axios from 'axios';
import 'whatwg-fetch';
// import Footer from './Footer';
// import GroceryListLive from './GroceryListLive';
// import BasketListLive from './BasketListLive';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			ipOrigin:'100.2.212.46',
			ipDest:'174.138.48.238',
			ips:[],
			distances:[]
		};

		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}

	handleChange(e){
		console.log(e.target, e.target.name, e.target.value);

		var change = {};
		change[e.target.name] = e.target.value;
		this.setState(change);

		console.log(this.state);
	}

	handleClick(e){
		console.log(e.target);
		// check for numbers and . only
		// show error msg

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
		return (
			<div className="App">
				<header className="App-header">
					<i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i>
					<h1 className="App-title">Hello, Distances!</h1>
				</header>
				<main>
					<h1>How Long Is The Drive?</h1>
					<hr/>
					<form>
						<input type="text" name="ipOrigin" onChange={this.handleChange} defaultValue={this.state.ipOrigin} />
						<input type="text" name="ipDest" 	onChange={this.handleChange} defaultValue={this.state.ipDest} />
						<input type="button" value="Calculate Distance" onClick={this.handleClick}/>
					</form>
					<p>Show my distance</p>
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
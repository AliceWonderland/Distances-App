import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { distancesApp } from './reducers';
import './index.css';
import App from './App';

let store = createStore(distancesApp);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('app')
);


// ReactDOM.render(<App />, document.getElementById('root'));

// import _ from 'lodash';
//
// function component() {
// 	var element = document.createElement('div');
//
// 	// Lodash, currently included via a script, is required for this line to work
// 	element.innerHTML = _.join(['Hello', 'webpack', 'blob'], ' ');
//
// 	return element;
// }
//
// document.body.appendChild(component());
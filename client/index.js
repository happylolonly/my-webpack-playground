import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

console.log(App);

import './test.js';

ReactDOM.render(<App />, document.querySelector('#root'));

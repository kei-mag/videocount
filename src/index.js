import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResponsivePlayer from './component/js/ResponsivePlayer'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	  <React.StrictMode>
	  <ResponsivePlayer src = 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' />
	  </React.StrictMode>,
	  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

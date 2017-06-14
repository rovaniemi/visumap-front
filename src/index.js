import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './main.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

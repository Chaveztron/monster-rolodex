import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //2) importamos la app funcion
import * as serviceWorker from './serviceWorker';
//3) La funcion renderiza la app funcion en forma de etiqueta html
                             // 4) remplazando el elemento root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

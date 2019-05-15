import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/App';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// window.onload = () => {
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// };

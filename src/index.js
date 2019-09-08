import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ReduxStore from './reducers/store';
import App from './components/app';

import './style.scss';

const $root = document.getElementById('react-root');

ReactDOM.render(
    <Provider store={ReduxStore}>
        <App />
    </Provider>,
    $root
);

if (module.hot) {
    module.hot.dispose(() => {
        console.info('module is about to be replaced');
    });
    module.hot.accept(() => {
        console.info('module or one of its dependencies was just updated');
    });
}

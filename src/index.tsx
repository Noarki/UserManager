import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { setupStore } from './_data/store/store';
import Main from './pages/Main';

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./__mocks/browser');

    worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={setupStore()}>
        <Main />
    </Provider>,
);

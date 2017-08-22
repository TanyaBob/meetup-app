import React from 'react';
import './index.css';
import MeetupApp from './MeetupApp';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MeetupApp />
    </Provider>,
    document.getElementById('root')
);

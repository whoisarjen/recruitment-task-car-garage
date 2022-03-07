import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.css';
import MUI from './layout/MUI';
import Navbar from './layout/navbar';
import Home from './pages/Home';
import { store } from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MUI>
                <Navbar>
                    <Home />
                </Navbar>
            </MUI>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
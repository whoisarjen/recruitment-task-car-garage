import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import MUI from './layout/MUI';
import Home from './pages/Home';

ReactDOM.render(
    <React.StrictMode>
        <MUI>
            <Home />
        </MUI>
    </React.StrictMode>,
    document.getElementById('root')
);
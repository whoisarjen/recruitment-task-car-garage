import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.css';
import MUI from './layout/MUI';
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <MUI>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MUI>
    </Provider>,
    document.getElementById('root')
);
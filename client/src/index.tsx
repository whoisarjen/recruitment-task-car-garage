import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.css';
import MUI from './layout/MUI';
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import App from './app';
import Redux from './layout/redux';

ReactDOM.render(
    <Provider store={store}>
        <Redux>
            <MUI>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MUI>
        </Redux>
    </Provider>,
    document.getElementById('root')
);
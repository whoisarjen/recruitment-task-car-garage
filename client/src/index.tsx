import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.css';
import MUI from './layout/MUI';
import Navbar from './layout/navbar';
import Home from './pages/Home';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <MUI>
            <Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Navbar>
        </MUI>
    </Provider>,
    document.getElementById('root')
);
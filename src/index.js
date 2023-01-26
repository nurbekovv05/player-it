import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LayOut from "./components/layOut/LayOut";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LayOut>
                <App />
            </LayOut>
        </BrowserRouter>
    </React.StrictMode>
);


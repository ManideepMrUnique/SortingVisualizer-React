import React from 'react';
import ReactDom from 'react-dom';
import Apps from './Apps';
import './index.css';
import {BrowserRouter} from "react-router-dom";
ReactDom.render(
    <BrowserRouter>
        <Apps/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
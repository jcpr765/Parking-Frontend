import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './App.css';

ReactDOM.render(
    <div>
        <head>
            <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        </head>
        <div className="App">
                <App/>
        </div>
    </div>,
    document.getElementById('root')
);
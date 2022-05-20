import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profiles from "./components/Profiles";
import Home from "./components/Home"
import { Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Route path = '/' component={App}>
        <Route component = {Home} />
        <Route path='/profiles' component={Profiles}/>


    </Route>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

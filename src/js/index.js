// Javascript Entry Point
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from './reducers';
import Layout from './components/layout';


const store = createStore(allReducers);

ReactDOM.render(<Layout />, document.getElementById('app'));
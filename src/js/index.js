// Javascript Entry Point
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from './reducers';


const store = createStore(allReducers);
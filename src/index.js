import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/reducers'
import Header from "./js/components/Header/";


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

const insertPoint = document.getElementById("root");
if (insertPoint)
    ReactDOM.render(
        <Provider store={store}>
            <Header />
        </Provider>,
        insertPoint);


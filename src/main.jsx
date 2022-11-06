import React from "react";
import ReactDOM from "react-dom/client";
import rootReducer from "./reducers/rootReducers";
import { Provider } from "react-redux";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { featuring, logger } from "./middlewares";
import App from "./App";
// import './index.css'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, composedEnhacers);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import './App.css';
import {Main} from "./Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./bll/Store";

function App() {
    return (
        <div className="App">
            {/* hr, provider*/}
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Main} from "./Main";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* hr, provider*/}
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Provider} from "react-redux";
import {store} from "./bll/store";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Counter/>
        </Provider>

    </div>
  );
}

export default App;

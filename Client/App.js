import './App.css';
import {MenuBar} from "./Components/MenuBar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import CreatePage from "./Components/CreatePage";
import RouteController from "./RouteController";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MenuBar/>
            <RouteController/>
        </BrowserRouter>
    </div>
  );
}

export default App;

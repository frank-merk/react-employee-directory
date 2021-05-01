import React from "react";
import Header from "./components/Nav";
import EmployeeDirectory from "./components/EmployeeDirectory";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Nav />
            <EmployeeDirectory />
        </div>
    );
}

export default App;
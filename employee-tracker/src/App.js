import React from "react";
import Nav from "./components/Nav";
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
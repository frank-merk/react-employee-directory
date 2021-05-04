import React from "react";
import "./style.css";


function Nav(props) {
    return (
        // bootstrap navbar dark theme
        <nav className="navbar navbar-expand navbar-dark bg-dark">

            <div className="navbar-collapse row" id="navbarNav">

                {/* <div>
                    <form className="form-inline">
                        <input 
                            value={props.search}
                            onChange={props.handleInputChange}
                            type="search"
                            placeholder="Type Employee Last Name" 
                            aria-label="Search" />
                    </form>
                </div> */}
            </div>
        </nav>


    );
}

export default Nav;
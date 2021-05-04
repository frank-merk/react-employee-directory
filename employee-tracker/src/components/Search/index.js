import React from "react";
import './style.css';

function Search(props) {
    return (
        
        <div className="search">
            <form className="form-inline">
                <input 
                className="form-control"
                name="search" 
                type="text" 
                placeholder="Search By Last Name" 
                value={props.value} 
                onChange={props.handleInputChange}>
                </input>
            </form>
        </div>
    );
}

export default Search;
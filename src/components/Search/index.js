import React from "react";
import './style.css';

function Search(props) {
    return (
        
        <div className="search">
            <form className="form-inline">
                <label><strong>Type a name:</strong></label>
                <input 
                className="form-control"
                name="search" 
                type="text" 
                placeholder="'Dan Employeeberg,' e.g." 
                value={props.value} 
                onChange={props.handleInputChange}>
                </input>
            </form>
        </div>
    );
}

export default Search;
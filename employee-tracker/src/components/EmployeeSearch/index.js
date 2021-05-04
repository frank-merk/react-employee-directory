import React from "react";
import formatDate from "../../utils/formatDate"

function EmployeeSearch(props) {
        return (
            
            <tbody>
            {props.result.filter(employeeSearch => {
                let name = employeeSearch.name.first.toLowerCase() + search.name.last.toLowerCase();
                let searchedEmployee = props.value.toLowerCase();
                let result = name.includes(searchedEmployee);
                return result;
            }).map(result => (
            <tr key={result.login.uuid}>
                <td><img alt="thumbnail" src={results.picture.thumbnail}/></td>
                <td>{result.name.first} {results.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{formatDate(result.dob.date)}</td> 
            </tr>
            ))}
        </tbody>
        )
    }

export default EmployeeSearch;
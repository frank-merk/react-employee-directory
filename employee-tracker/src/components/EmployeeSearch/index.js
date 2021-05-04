import React from "react";
import formatDate from "../../utils/formatDate"

function EmployeeSearch(props) {
        return (
            
            <tbody>
            {props.result.filter(employeeSearch => {
                let name = employeeSearch.name.first.toLowerCase() + employeeSearch.name.last.toLowerCase();
                let searchedEmployee = props.value.toLowerCase();
                let result = name.includes(searchedEmployee);
                return result;
            }).map(results => (
            <tr key={results.login.uuid}>
                <td><img alt="thumbnail" src={results.picture.thumbnail}/></td>
                <td>{results.name.first} {results.name.last}</td>
                <td>{results.phone}</td>
                <td>{results.email}</td>
                <td>{formatDate(results.dob.date)}</td> 
            </tr>
            ))}
        </tbody>
        )
    }

export default EmployeeSearch;
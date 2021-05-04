import React from "react";
import formatDate from "../../utils/formatDate";

function Employee(props) {
return (
    <tbody>
        {props.result.map(results => (
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

export default Employee;
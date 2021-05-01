import React from "react";
import FormatDate from "../../utils/formatDate";

function Employee(props) {
return (
    <tbody>
        {props.result.filter(employee => employee.name.last.includes(props.search)).map(results => (
        <tr key={results.login.uuid}>
            <td><img alt="thumbnail" src={results.picture.thumbnail}/></td>
            <td>{results.name.first} {results.name.last}</td>
            <td>{results.phone}</td>
            <td>{results.email}</td>
            <td>{FormatDate(results.dob.date)}</td> 
        </tr>
        ))}
    </tbody>
    )
}

export default Employee;
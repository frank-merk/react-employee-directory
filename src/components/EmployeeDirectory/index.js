import React, { Component } from "react";
import API from "../../utils/API";
import Employee from "../Employee";
import Search from "../Search";
import './style.css';
import EmployeeSearch from "../EmployeeSearch"


class EmployeeDirectory extends Component {
    state = {
        result: [],
        search: "",
        order: ""
    };
    // Use the api to get a set of random users
     renderEmployees = () => {
        API.employees()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    }
    // render all employees when the component mounts
    componentDidMount() {
        this.renderEmployees();
    }

    
   

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

      // find way to sort users

      // when a user clicks, we check the state order and flip it depending
      handleSortOrder = event => {
        event.preventDefault()

        // setting up default setting to onMount as descending. When a user clicks it, we flip to ascending
        if (`${this.state.order}` === "" || `${this.state.order}` === "descending") {

            this.setState({
                order: "ascending"
            })

            // compare the employees in result and sort them based on their names
            const employeeSorter = this.state.result.sort((a, b) => {
                let employeeA = a.name.last;
                let employeeB = b.name.last;

                if (employeeA < employeeB) {
                    return -1
                }

                return 1;
            });

            this.setState({
                result: employeeSorter
            })
        }

        // now do the inverse, if the user flips back to descending order
        else if (`${this.state.order}` === "ascending") {

            this.setState({
                order: "descending"
            })

            const employeeSorter = this.state.result.sort((a, b) => {
                let employeeA = a.name.last;
                let employeeB = b.name.last;

                if (employeeA > employeeB) {
                    return -1
                }
                return 1;
            });

            this.setState({
                result: employeeSorter
            })
        }
    }

    // display results in a bootstrap table
    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Thumbnail</th>
                        <th scope="col"
                        
                        data-order={this.state.order}
                        onClick={this.handleSortOrder}
                        >
                        
                        <span className = "sorter">Name (click to sort)</span></th>
                        
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    {!this.state.search ? (
                    <Employee
                            result={this.state.result}
                             />
                    ) : (
                            <EmployeeSearch result={this.state.result} 
                            value = {this.state.search} />
                    )}
                    </table>
            </div>
        )
    }
}

export default EmployeeDirectory;
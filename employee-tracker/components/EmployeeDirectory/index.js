import React, { Component } from "react";
import API from "../../utils/API";
import Employee from "../Employee";
import Search from "../Search";
import './style.css';

class EmployeeDirectory extends Component {
    state = {
        result: [],
        search: "",
    };

    // render all employees when the component mounts
    componentDidMount() {
        this.renderEmployees();
    }

    // Use the api to get a set of random users
    renderEmployees = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
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
      handleSortOrder = (event) => {
        event.prevent.default
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
            .then((data) => {
                data.sort((a, b) => a.userId - b.userId);
                this.setState({data: data});

    });
      }

    // display results in a bootstrap table
    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    <Employee
                            result={this.state.result}
                            search={this.state.search}
                        />
                    </table>
            </div>
        )
    }
}

export default EmployeeDirectory;
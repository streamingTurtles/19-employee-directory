import React from "react";
import API from "../api.js"
import Search from "./empBoxSearch" 

// use dateFormat to clean the json date info returned in json
// https://www.npmjs.com/package/dateformat
import DateFormat from 'dateformat'


// create class component based on api protocol for anticipated data
class EmpReturnData extends React.Component {

    state = {
        orderByName: "",
        results: [],
        search: ""
    }


    // make Api call from https://randomuser.me/
    // https://linguinecode.com/post/understanding-react-componentdidmount
    componentDidMount() {
        API.ApiSearch()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log(this.state.results)
        }).catch(err => console.log(err))
    }



     // Manage search bar input
     // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    searchBarInputMgmt = event => {
        if (event.target.name === "search") {
            const searchName = event.target.value.toLowerCase();
            this.setState({ search: searchName })
        }
    }




    // Alphabetize in ascending or descening order by first name
    orderFirstName = () => {
        const firstNameEmp = this.state.results.sort((a, b) => {
        if (b.name.first > a.name.first) {
            return -1
        }
        if (a.name.first > b.name.first) {
            return 1
        }
        return 0;
        });
        if (this.state.orderByName === "makeDescending") {
            firstNameEmp.reverse();
            this.setState({ orderByName: "makeAscending" });
          } else {
            this.setState({ orderByName: "makeDescending" });
          }
          this.setState({ results: firstNameEmp })
    }


    // Alphabetize in ascending or descening order by last name
    orderLastName = () => {
        const lastNameEmp = this.state.results.sort((a, b) => {
        if (b.name.last > a.name.last) {
            return -1
        }
        if (a.name.last > b.name.last) {
            return 1
        }
        return 0;
        });
        if (this.state.orderByName === "makeDescending") {
            lastNameEmp.reverse();
            this.setState({ orderByName: "makeAscending" });
        } else {
            this.setState({ orderByName: "makeDescending" });
        }
        this.setState({ results: lastNameEmp })
    }


    // Render the employee data
    render() {
        return (
        <div>
            <Search searchBarInputMgmt={this.searchBarInputMgmt}
            search={this.state.search} />
            {/* using bootstrap classes for returned data */}
            <div className="table-responsive">
            <table className="table table-striped table-resposive text-center table-hover">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name <span className="downArrow" onClick={this.orderFirstName}></span></th>
                    <th>Last Name <span className="downArrow" onClick={this.orderLastName}></span></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB </th>
                </tr>
                </thead>

                { // first names
                this.state.results && this.state.results.map(item =>
                    item.name.first.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                        <tr>
                        <td><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{DateFormat(item.dob.date, "isoDate")}</td>  
                        </tr>
                    </tbody>

                    :
                    // last names
                    item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                        <tr>
                        <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                            <td>{item.name.first}</td>
                            <td>{item.name.last}</td>
                            <td>{item.phone} </td>
                            <td>{item.email}</td>
                            <td>{DateFormat(item.dob.date, "isoDate")}</td>  
                        </tr>
                        </tbody>
                        :
                        null
                )}
            </table>
            </div>
        </div>
        )
    }


}    
  
export default EmpReturnData;
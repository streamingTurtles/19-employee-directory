import React from "react";
import API from "../api.js"
import Search from "./empBoxSearch"


// create class component based on api protocol for anticipated data
class EmpReturnData extends React.Component {

    state = {        
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


    // Render employee data
    render() {
        return (
        <div>
            <Search handleInputChange={this.handleInputChange}
            search={this.state.search} />
            {/* using bootstrap classes for returned data */}
            <div className="table-responsive">
            <table className="table table-striped table-resposive text-center table-hover">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                    <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
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
                        <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone}</td>
                        <td >{item.email}</td>
                        <td>{item.dob.date}</td>  
                        </tr>
                    </tbody>

                    :
                    // last names
                    item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                        <tr>
                        <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                            <td >{item.name.first}</td>
                            <td >{item.name.last}</td>
                            <td >{item.phone} </td>
                            <td >{item.email}</td>
                            <td>{item.dob.date}</td>  
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
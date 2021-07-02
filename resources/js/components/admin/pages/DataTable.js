import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.deleteMemberrship = this.deleteMemberrship.bind(this);
    }

    deleteMemberrship(e) {
        e.preventDefault();
        axios.delete(`http://127.0.0.1:8000/api/membershipform/` + this.props.obj._id)
            .then((res) => {
                console.log('delet sucessfully')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {

        return ( 
            
        <tr>
            <td>{this.props.obj.fullname}</td>
            <td>{this.props.obj.fathername}</td>
            <td>{this.props.obj.mothername}</td>
            <td>{this.props.obj.phone}</td>
            <td>{this.props.obj.email}</td>
            <td>{this.props.obj.dob}</td>
            <td>{this.props.obj.nid}</td>
            <td>{this.props.obj.comiteename}</td>
            <td>{this.props.obj.officeid}</td>
            <td>{this.props.obj.branchid}</td>
             <td>
                 <Link className="edit-link">
                   <button size="sm" variant="info">Edit</button>
                </Link>
                {/* <Button onClick={this.deleteMemberrship} size="sm" variant="danger">Delete</Button>  */}
                {/* <link className="edit-link" to={"/edit-expense/" + this.props.obj.id}>
                   <button size="sm" variant="info">Edit</button>
                </link> */}
                <button onClick={this.deleteMemberrship} size="sm" variant="danger">Delete</button>
            </td> 
        </tr>
        


        );
    }
}
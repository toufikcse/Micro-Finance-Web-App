import React, { Component } from 'react'
import axios from 'axios';
import Branchdrop from './Branchdrop'
import './comiteesetup.css';
import Swal from 'sweetalert2';
import { BsPlusCircle } from "react-icons/bs";
import StarRateIcon from '@material-ui/icons/StarRate';
import { AiFillSave } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { IconContext } from 'react-icons';

export default class branchsetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            officeid: '',
            branchid: '',
            branchname: '',
            adress: '',
            maximum_somitee: '',
            branch_in_charge: '',
            phone: '',
            email: '',
            getofficeid: [],
            errors: {}


        };
        this.officeid = this.officeid.bind(this);
        this.branchid = this.branchid.bind(this);
        this.branchname = this.branchname.bind(this);
        this.adress = this.adress.bind(this);
        this.maximum_somitee = this.maximum_somitee.bind(this);
        this.branch_in_charge = this.branch_in_charge.bind(this);
        this.phone = this.phone.bind(this);
        this.email = this.email.bind(this);
        this.getofficeid = this.getofficeid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }


    officeid(event) {
        this.setState({ officeid: event.target.value })
    }
    branchid(event) {
        this.setState({ branchid: event.target.value })
    }
    branchname(event) {
        this.setState({ branchname: event.target.value })
    }
    adress(event) {
        this.setState({ adress: event.target.value })
    }
    maximum_somitee(event) {
        this.setState({ maximum_somitee: event.target.value })
    }
    branch_in_charge(event) {
        this.setState({ branch_in_charge: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    email(event) {
        this.setState({ email: event.target.value })
    }


    DataTable() {
        return this.state.getofficeid.map((res, i) => {
            return <Branchdrop obj={res}
                key={i}
            />;
        });


    }



    getofficeid(e) {
        // e.preventdefault();
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/find_office_id')
            .then(res => {
                const getofficeid = res.data;
                this.setState({ getofficeid });
                //    console.log(officeid);
                // this.state.officeid=res.data.bind(this);

            })
    }
    handleValidation() {
        let fields = {
            officeid: this.state.officeid,
            branchid: this.state.branchid,
            branchname: this.state.branchname,
            adress: this.state.adress,
            maximum_somitee: this.state.maximum_somitee,
            branch_in_charge: this.state.branch_in_charge,
            phone: this.state.phone,
            email: this.state.email
        }
        let formIsValid = true;
        let errors = {};
        //Office Id Validation

        if (!fields["officeid"]) {
            formIsValid = false;
            errors["officeid"] = "Cannot be empty";
        }
        //Branch Id Validation

        if (!fields["branchid"]) {
            formIsValid = false;
            errors["branchid"] = "Cannot be empty";
        }
        //Branch Name Validation
        if (!fields["branchname"]) {
            formIsValid = false;
            errors["branchname"] = "Cannot be empty";
        }
        //Address Validation
        if (!fields["adress"]) {
            formIsValid = false;
            errors["adress"] = "Cannot be empty";
        }
        //Maximum-somitee validation
        if (!fields["maximum_somitee"]) {
            formIsValid = false;
            errors["maximum_somitee"] = "Cannot be empty";
        }

        if (fields["maximum_somitee"] > 20) {
            formIsValid = false;
            errors["maximum_somitee"] = "Sorry,maximum limit reached";
        }

        //Branch-In-Charge validation
        if (!fields["branch_in_charge"]) {
            formIsValid = false;
            errors["branch_in_charge"] = "Cannot be empty";
        }

        //Phone No Validation

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }




        this.setState({ errors: errors });
        return formIsValid;
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            const packets = {
                officeid: this.state.officeid,
                branchid: this.state.branchid,
                branchname: this.state.branchname,
                adress: this.state.adress,
                maximum_somitee: this.state.maximum_somitee,
                branch_in_charge: this.state.branch_in_charge,
                phone: this.state.phone,
                email: this.state.email

            };

            axios.post('branchsetup', packets)
                .then(res => {
                    console.log(res.data)
                }

                )
                .catch(error => {
                    console.log("ERROR:: ", error.response.data);

                });

            this.setState({
                officeid: '',
                branchid: '',
                branchname: '',
                adress: '',
                maximum_somitee: '',
                branch_in_charge: '',
                phone: '',
                email: ''
            });

            Swal.fire({
                position: 'center',
                icon: 'sucess',
                title: 'Good Job ',
                text: 'New Branch Added Sucessfully',
                showConfirmButton: false,
                timer: 2000
            });

        }
        else {
            Swal.fire({
                position: 'center',
                icon: "error",
                title: 'Sorry',
                text: 'There is a wrong Input',
                showConfirmButton: false,
                timer: 2000
            });
        }



    }

    Reset = () => {
        this.setState({
            officeid: '',
            branchid: '',
            branchname: '',
            adress: '',
            maximum_somitee: '',
            branch_in_charge: '',
            phone: '',
            email: ''
        });
    }


    render() {
        return (

            <div className='body'>
                <div className='container'>
                    <div className="title" > Branch Setup Form </div>
                    <div className='content'>
                        <form>
                            <div className="user-details">

                                <div className="input-box">
                                    <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Office Id </span>
                                    <select value={this.state.officeid} onClick={this.getofficeid} onChange={this.officeid} >
                                        <option></option>
                                        {this.DataTable()}
                                    </select>
                                    {/* <input type = "text" placeholder = "Enter office name" onChange = { this.officename } required/> */}
                                    <span style={{ color: 'red' }}>{this.state.errors["officeid"]}</span>

                                </div>

                                <div className="input-box">
                                    <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Branch Id </span>
                                    <input type="text" value={this.state.branchid} placeholder="Enter Branch ID" onChange={this.branchid} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["branchid"]}</span>

                                </div>

                                <div className="input-box">
                                    <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Branch Name </span>
                                    <input type="text" value={this.state.branchname} placeholder="Enter Branch Name" onChange={this.branchname} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["branchname"]}</span>

                                </div>

                                <div className="input-box">
                                    <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Adress </span>
                                    <input type="text" value={this.state.adress} placeholder="Enter adress" onChange={this.adress} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["adress"]}</span>

                                </div>

                                <div className="input-box" >
                                    <span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Maximum Somitee Number(Max-20) </span>
                                    <input type="number" value={this.state.maximum_somitee} placeholder="Enter max_somitee " onChange={this.maximum_somitee} required />
                                    <span style={{ color: 'red' }} >{this.state.errors["maximum_somitee"]}</span>

                                </div>

                                <div className="input-box" >
                                    <span className="details" >  < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch In Charge </span>
                                    <input type="text" value={this.state.branch_in_charge} placeholder="Enter Branch in chargge" onChange={this.branch_in_charge} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["branch_in_charge"]}</span>

                                </div>

                                <div className="input-box" >
                                    <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch Number </span>
                                    <input type="number" value={this.state.phone} placeholder="Enter phone Number" onChange={this.phone} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["phone"]}</span>

                                </div>

                                <div className="input-box" >
                                    <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch Email </span>
                                    <input type="email" value={this.state.email} placeholder="Enter email" onChange={this.email} required />
                                    <span style={{ color: 'red' }}>{this.state.errors["email"]}</span>

                                </div>

                            </div>

                            <div className="button">
                                <IconContext.Provider value={{ color: 'black' }}>
                                    <div className="add">
                                        {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
                                        {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
                                        <AiFillSave style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.handleSubmit} />
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: 'black' }}>

                                    <div className="reset">
                                        {/* <input type = "submit"value = "-"/> */}
                                        <BiReset style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.Reset} />

                                    </div>
                                </IconContext.Provider>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

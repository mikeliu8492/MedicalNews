import React, {Component} from 'react';
import axios from 'axios';

import { Redirect } from 'react-router-dom'

import {connect} from 'react-redux';
import {loginDispatch} from '../../actions/auth/AuthActions';


interface State {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    errors: { [index: string]: string }
}

class Register extends Component <any, State> {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        errors: { firstName: "", lastName: "", email: "", password: ""}
    }

    handleFieldChange = (field: string) => (event: any) => {
        this.setState({ [field]: event.target.value } as Pick<State, any>);
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const result = await axios.post("http://localhost:5000/api/user/register", {email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName});
            this.props.loginDispatch(this.state.email, this.state.password, this.props.history);
        }
        catch(err) {
            this.setState({errors: err.response.data.errors})
        }

    }

    showError = (errorMessage: string) => {
        if(errorMessage) {
            return(<p className="text-danger px-1 pt-2">{errorMessage}</p>)
        }
    }

    render() {
        return(
            <div className="container">
                <div className="card px-2" >
                    <div className="card-body">                
                        <h6 className="card-title text-center">Registration Form</h6>
                        <br/>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                                <label className="px-1">First Name</label>
                                <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFieldChange("firstName")} required></input>
                                {this.showError(this.state.errors.firstName)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Last Name</label>
                                <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleFieldChange("lastName")} required></input>
                                {this.showError(this.state.errors.lastName)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("email")} required></input>
                                {this.showError(this.state.errors.email)}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.handleFieldChange("password")} required></input>
                                {this.showError(this.state.errors.password)}
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const matchStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(matchStateToProps, { loginDispatch })(Register);
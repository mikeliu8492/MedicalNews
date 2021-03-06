import React, {Component} from 'react';

import { Redirect } from 'react-router-dom'

import {connect} from 'react-redux';
import {loginDispatch} from '../../actions/auth/AuthActions';
import {clearErrors} from '../../actions/error/ErrorActions';

interface State {
    email: string,
    password: string,
    errors: { [index: string]: string }
}

class Login extends Component <any, State> {

    state = {
        email: "",
        password: "",
        errors: { email: "", password: ""},
        redirect: true
    }

    handleFieldChange = (field: string) => (event: any) => {
        this.setState({ [field]: event.target.value } as Pick<State, any>);
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();
        this.props.loginDispatch(this.state.email, this.state.password, this.props.history);
    }

    showError = (errorMessage?: string) => {
        if(errorMessage) {
            return(<p className="text-danger px-1 pt-2">{errorMessage}</p>)
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {

        return(
            <div className="container" >
                <div className="card px-2 mx-auto w-75">
                    <div className="card-body">                
                        <h6 className="card-title text-center">Login Form</h6>
                        <br/>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="px-1">Email</label>
                                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("email")} required></input>
                                {this.showError(this.props.errors.email)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleFieldChange("password")} required></input>
                                {this.showError(this.props.errors.password)}
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

export default connect(matchStateToProps, { loginDispatch, clearErrors })(Login);
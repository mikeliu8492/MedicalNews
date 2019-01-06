import React, {Component} from 'react';

import { Redirect } from 'react-router-dom'

import {connect} from 'react-redux';
import {loginDispatch} from '../../actions/auth/AuthActions';

interface State {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    optIn: boolean
}

class Login extends Component <any, State> {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        optIn: true
    }

    handleFieldChange = (field: string) => (event: any) => {
        this.setState({ [field]: event.target.value } as Pick<State, any>);
    }

    handleInput = (event: any) => {
        const target = event.target;
        
        this.setState({
          optIn: target.checked
        } as Pick<any, any>);
      
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }

    showError = (errorMessage?: string) => {
        if(errorMessage) {
            return(<p className="text-danger px-1 pt-2">{errorMessage}</p>)
        }
    }

    renderSearchTerms = () => {
        if(this.props.topics.length > 0) {
            return this.props.topics.map((topic: any, index: number) => {
                return(<div className="col-md-2 my-2">
                    <input type="text" className="form-control" value={topic} readOnly></input>
                </div>)
            })
        }

        return (
            <div className="col-md-2 mx-2 my-2">
                <p>No terms selected.</p>
            </div>
        )

    }

    render() {
        return(
            <div>
                <div className="card px-2 mx-auto w-75">
                    <div className="card-body">                
                        <h6 className="card-title text-center">Settings Form</h6>
                        <br/>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="px-1">First Name</label>
                                <input type="text" name="firstname" className="form-control" value={this.state.firstName} onChange={this.handleFieldChange("firstName")} required></input>
                                {this.showError(this.props.errors.password)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Last Name</label>
                                <input type="text" name="lastname" className="form-control" value={this.state.lastName} onChange={this.handleFieldChange("lastName")} required></input>
                                {this.showError(this.props.errors.password)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Email</label>
                                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("email")} required></input>
                                {this.showError(this.props.errors.email)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Selected Terms</label>
                                <div className="row">
                                    {
                                        this.renderSearchTerms()
                                    }
                                    
                                    <div className="col-md-2 my-2 text-center">
                                        <button className="btn btn-info">Back to Preview</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check pt-2 pb-4">
                                <input className="form-check-input" type="checkbox" name="checkOpt" checked={this.state.optIn} onChange={this.handleInput} onClick={this.handleInput}></input>
                                <label className="form-check-label">
                                    Opt into E-mail Subscription (Weekly)
                                </label>
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
    errors: state.errors,
    topics: state.topics
});

export default connect(matchStateToProps, { loginDispatch })(Login);
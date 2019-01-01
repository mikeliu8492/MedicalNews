import React, {Component} from 'react';

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

    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.password);
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
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="px-1">First Name</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("firstName")} required></input>
                                {this.showError(this.state.errors.firstName)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Last Name</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("lastName")} required></input>
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

export default Register;
import React, {Component} from 'react';

interface State {
    email: string,
    password: string,
    errors: { [index: string]: string }
}

class Login extends Component <any, State> {

    state = {
        email: "",
        password: "",
        errors: { email: "", password: ""}
    }

    handleFieldChange = (field: string) => (event: any) => {
        this.setState({ [field]: event.target.value } as Pick<State, any>);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
    }

    parseErrorArray = (error: any) => {

    }

    showError = (errorMessage?: string) => {
        if(errorMessage) {
            return(<p className="text-danger px-1 pt-2">{errorMessage}</p>)
        }
    }

    render() {
        return(
            <div className="container" >
                <div className="card px-2 mx-auto w-75">
                    <div className="card-body">                
                        <h6 className="card-title text-center">Login Form</h6>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="px-1">Email</label>
                                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleFieldChange("email")} required></input>
                                {this.showError(this.state.errors.email)}
                            </div>
                            <div className="form-group">
                                <label className="px-1">Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleFieldChange("password")} required></input>
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

export default Login;
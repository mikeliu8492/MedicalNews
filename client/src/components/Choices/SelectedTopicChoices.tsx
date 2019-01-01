import React, {Component} from 'react';
import axios from 'axios';


import {connect} from 'react-redux';
import {changeTopics} from '../../actions/topic/TopicActions';

interface State {
    input: string,
    errorMessage: string
    relatedWordArray: string []
}

class SelectedTopicChoices extends Component<any, State> {

    state= {
        input: "",
        errorMessage: "",
        relatedWordArray: []
    }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({input: e.currentTarget.value});
    }

    
    handleAdd = () => {
        const modifiedArray: string []  = this.state.relatedWordArray;
        if(modifiedArray.length < 5) {
            if(this.state.input) {
                const formatted: string = this.state.input.toLowerCase();
                if(modifiedArray.length && modifiedArray.indexOf(formatted) > -1) {
                    this.setState({
                        errorMessage: "The word already exists(accounts for capitalization)"
                    })
                }
                else {
                    modifiedArray.push(this.state.input);
                    this.setState({
                        relatedWordArray: modifiedArray,
                        errorMessage: ""
                    })
                }
            }
            else {
                this.setState({
                    errorMessage: "You input is empty"
                })
            }
        }
        else {
            this.setState({
                errorMessage: "You reached the limit of 5 unique words"
            })
        }
    }

    handleDelete = () => {
        const modifiedArray: string []  = this.state.relatedWordArray;

        if(modifiedArray.length > 0) {
            modifiedArray.pop();
            this.setState({
                relatedWordArray: modifiedArray,
                errorMessage: ""
            })
        }
        else {
            this.setState({
                errorMessage: "List is empty"
            })
        }
    }

    handleSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        this.props.changeTopics(this.state.relatedWordArray);
    }

    renderRelatedWordList = () => {
        if(this.state.relatedWordArray.length) {
            return(
                <div>
                    <h6 className="text-center">Topics for Your Search</h6>
                    <ol>
                        {this.state.relatedWordArray.map((item,index) => {
                            return(<li key={index}>{item}</li>)
                        })}                
                    </ol>
                </div>
            )
        }

        return(<p>No words submitted for search.</p>) 
        
    }

    render() {
        console.log(this.props.topics);
        return(
            <div className="card news-item-card px-2">
                <div className="card-body">                
                    <h6 className="card-title text-center">Topic Entry</h6>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Input a Word to Get Related Words</label>
                            <input type="text" className="form-control" value={this.state.input} onChange={this.handleInputChange}></input>
                            <p className="text-danger">{this.state.errorMessage}</p>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-4">
                                <button type="button" className="btn btn-success" onClick={this.handleAdd}>Add</button>
                            </div>
                            <div className="col-md-8">
                                <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <div>
                        {this.renderRelatedWordList()}
                    </div>
                </div>
            </div>
        )
    }
}

const matchStateToProps = (state: any) => ({
    topics: state.topics
});


export default connect(matchStateToProps, { changeTopics })(SelectedTopicChoices);
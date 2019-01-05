import React, {Component} from 'react';
import CopyWordList from '../Common/CopyWordList';
import axios from 'axios';

interface IRelatedWord {
    word: string,
    score: number,
    tag: any
}


class RelatedWordsForm extends Component {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderRelatedWordList = this.renderRelatedWordList.bind(this);
    }

    state= {
        input: "",
        madeSubmission: false,
        relatedWordArray: [],
    }

    handleInputChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({input: e.currentTarget.value});
    }

    async handleSubmit(e: React.FormEvent<EventTarget>) {
        e.preventDefault();
        const finalURL = `https://api.datamuse.com/words?ml=${this.state.input}&max=5`;
        const result = await axios.get(finalURL);
        const list: IRelatedWord []= result.data;
        const formattedList: string [] = list.map(item => {return item.word});

        this.setState({
            relatedWordArray: formattedList,
            madeSubmission: true
        })
    }

    renderRelatedWordList() {
        if(this.state.relatedWordArray.length) {
            return(
                <div>
                    <h6 className="text-center">Suggested Related Words</h6>
                    <br/>
                    <CopyWordList copyArray={this.state.relatedWordArray}/>
                    <br/>
                </div>
            )
        }

        if(this.state.madeSubmission) {
            return(<p className="text-danger">No results found for this word, please try again.</p>)
        }

        return(<p>No submission made.</p>) 
        
    }

    render() {
        return(
            <div className="card w-75 mx-auto">
                <div className="card-body">                
                    <h6 className="card-title text-center">Search Term Suggestor</h6>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Input a Word to Get Related Words</label>
                            <input type="text" className="form-control" value={this.state.input} onChange={this.handleInputChange}></input>
                        </div>
                        <button type="submit" className="btn btn-success"><i className="fas fa-save pr-2"></i>Submit</button>
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

export default RelatedWordsForm;
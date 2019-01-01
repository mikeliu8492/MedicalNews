import React, {Component} from 'react';
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
        })
    }

    renderRelatedWordList() {
        if(this.state.relatedWordArray.length > 0) {
            return(
                <ol>
                    {this.state.relatedWordArray.map(item => {
                        return(<li key={item}>{item}</li>)
                    })}                
                </ol>)
        }

        return(
            <p>No Related Words Found</p>
        )

    }

    render() {
        return(
            <div className="card news-item-card px-2">
                <div className="card-body">                
                    <h6 className="card-title text-center">Select a Word to Get Its Synonyms</h6>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Word To Substitute</label>
                            <input type="text" className="form-control" value={this.state.input} onChange={this.handleInputChange}></input>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
                <br/>
                {this.renderRelatedWordList()}
            </div>
        )
    }

}

export default RelatedWordsForm;
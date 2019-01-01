import React, {Component} from 'react';
import RelatedWordsForm from '../Choices/RelatedWordsForm';
import NewsArticleList from '../NewsArticles/NewsArticleList';
import SelectedTopicChoices from '../Choices/SelectedTopicChoices';

class Subscription extends Component {
    constructor(props:any) {
        super(props)
    
    }

    state = {
        helperToolsVisible: true,
        buttonMessage: "Click to Collapse Your Search Forms"
    }

    handleClick = () => {
        if(this.state.helperToolsVisible) {
            this.setState({
                helperToolsVisible: false,
                buttonMessage: "Click to Expand Your Search Forms"
            })
        }
        else {
            this.setState({
                helperToolsVisible: true,
                buttonMessage: "Click to Collapse Your Toolbar"
            })
        }
    }


    render() {
        return(
            <div>
                <div>
                    <div className="text-center pt-2">
                        <button className="btn btn-primary" type="button" onClick={this.handleClick} aria-expanded="false" aria-controls="collapseExample">
                            {this.state.buttonMessage}
                        </button>
                        <br/><br/>
                    </div>
                    {
                        this.state.helperToolsVisible &&
                        <div className="row py-5">
                            <div className="col-md-6">
                                <SelectedTopicChoices/>
                            </div>
                            <div className="col-md-6">
                                <RelatedWordsForm/>
                            </div>
                        </div>
                    }
                </div>
                    
                <div className="pt-2">
                    <div className="py-2">
                        <h1 className="text-center">Top Personalized Articles for You!</h1>
                    </div>
                    <NewsArticleList personal={true}/>
                </div>
            </div>

            
        )
    }

}

export default Subscription;
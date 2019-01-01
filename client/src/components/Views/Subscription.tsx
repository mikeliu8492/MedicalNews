import React, {Component} from 'react';
import RelatedWordsForm from '../Choices/RelatedWordsForm';


class Subscription extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">Subscription Selection</h2>
                </div>
                <div className="col-md-6">
                    <RelatedWordsForm/>
                </div>
                
            </div>
        )
    }

}

export default Subscription;
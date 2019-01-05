import React, {Component} from 'react';
import CopyToClipboard from "react-copy-to-clipboard"

const CopyWordItem = (props: any) => {
    return(
        <div className="mx-auto">
            <div className="mx-auto">
                <CopyToClipboard
                        text={ props.word }
                >
                    <div className="input-group">
                        <input type="text" readOnly className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.word}></input>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="far fa-copy pr-2"></i>Copy</button>
                        </div>
                    </div>
                </CopyToClipboard>
            </div>            
        </div>
    )
}


export default CopyWordItem
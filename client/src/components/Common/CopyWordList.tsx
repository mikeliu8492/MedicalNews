import React from 'react';
import CopyWordItem from './CopyWordItem';

interface CopiedWords {
    copyArray: string []
}

const CopyWordList = (props: CopiedWords) => {
    return(
        <div className="mx-auto">
            {
                props.copyArray.map((copyWord, idx) => {
                    return(
                        <div className="my-2" key={idx}>
                            <CopyWordItem word={props.copyArray[idx]}/>
                        </div>
                    )
                })
            }
        </div>)
}


export default CopyWordList
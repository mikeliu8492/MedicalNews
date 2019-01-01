import React, { Component } from 'react';
import './NewsItem.css';

interface Props {
    content: {
        source: any,
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: any,
        content: string
    }
}

const NewsItem = (props:Props) => {
    const rawPublishedDate: Date = new Date(props.content.publishedAt);
    const formatDate = rawPublishedDate.toLocaleDateString();

    return (
        <div className="card news-item-card px-5 py-2">
            <div className="card-body">                
                <h5 className="card-title">{props.content.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By: {props.content.author}</h6>
                <br/>
                <div className="row flex">
                    <div className="col-md-6 p-3">
                        <img className="image-limit" src={props.content.urlToImage} alt={props.content.title}></img>
                    </div>
                    <div className="col-md-6">
                        <p className="card-text">{props.content.description}</p>
                        <br/><br/>
                        <p>Published on:  {formatDate}</p>
                    </div>
                </div>
                <br/>
                <a href={props.content.url} className="card-link" target="_blank" rel="noopener noreferrer">Link to Full Story</a>
            </div>
        </div>
    );
}

export default NewsItem;
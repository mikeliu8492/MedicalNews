import React, { Component } from 'react';
import axios from 'axios';


//
import {connect} from 'react-redux';

import NewsItem from './NewsItem';

interface Props {
    articleList: any []
}


  const NewsArticleList = (props: Props) => {
    return (
        <div>
            {
                props.articleList.map((article,index) => {
                    return (
                        <div key={article.title}>
                            <NewsItem  content={article}/>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  export default NewsArticleList;
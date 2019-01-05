import React, { Component } from 'react';
import axios from 'axios';

import {connect} from 'react-redux';

import NewsItem from './NewsItem';
import NewsArticleList from './NewsArticleList';

interface Props {
    personal: boolean,
}

type State = {
    articleList: any []
}

class NewsArticleLogic extends Component<Props, State> {
    state: State = {
        articleList: []
    }

    async componentDidMount() {
        console.log(this.props);
        await this.fetchArticlesWrapper("");
    }

    async componentWillReceiveProps(nextProps: any) {
        if(nextProps !== this.props) {
            await this.fetchArticlesWrapper(nextProps);
        }
    }

    fetchArticlesWrapper = async (nextProps: any) => {
        try {
            let resultUrl = "";
            let result;
            
            if(!this.props.personal) {
                resultUrl = '/api/news/top_headlines';
                result = await axios.get(resultUrl);
            }
            else {
                resultUrl = '/api/news/personal_top_headlines';
                result = await axios.post(resultUrl, {topics: nextProps.topics});
            }
            
            const articleList: any [] = result.data.articles;
    
            this.setState({
                articleList: articleList
            });
        }
        catch(err) {
            this.setState({
                articleList: []
            });
        }
    }

    assembleArticleList = () => {
        return this.state.articleList.map(article => {
            return (
                <div key={article.title}>
                    <NewsItem  content={article}/>
                    <br/>
                </div>
            )
        })
    }

    render() {
        if(this.state.articleList.length <= 0) {
            return (<div className="text-center mb-5">
                <h2>No articles to display currently.</h2>
            </div>)
        }

        return (
            <div className="mb-5">
                <NewsArticleList articleList={this.state.articleList}/>
            </div>
        );
    }
  }

  const matchStateToProps = (state: any) => ({
      topics: state.topics
  });

  export default connect(matchStateToProps,null)(NewsArticleLogic);
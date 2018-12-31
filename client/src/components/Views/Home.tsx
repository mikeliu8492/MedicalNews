import React from 'react';
import NewsArticleList from '../NewsArticles/NewsArticleList';

const Home = () => {
    return(
        <div>
            <h1 className="text-center ">Top News Stories of the day</h1>
            <br/><br/>
            <NewsArticleList personal={false}/>
        </div>
    )
}

export default Home;
import React from 'react';
import NewsArticleLogic from '../NewsArticles/NewsArticleLogic';

const Home = () => {
    return(
        <div>
            <h1 className="text-center ">Top Medical News Today Stories</h1>
            <br/><br/>
            <NewsArticleLogic personal={false}/>
        </div>
    )
}

export default Home;
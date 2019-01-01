import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';

const fakeSource = [

  {
      "source": {
          "id": "medical-news-today",
          "name": "Medical News Today"
      },
      "author": "Tim Newman",
      "title": "How coffee might protect against Parkinson's",
      "description": "Over recent years, it has been clear that coffee protects against Parkinson's disease. A recent study tries to pin down the exact molecules involved.",
      "url": "http://www.medicalnewstoday.com/articles/323997.php",
      "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/323/323997/323997_1100.jpg",
      "publishedAt": "2018-12-29T00:00:00Z",
      "content": "Coffee is thought to protect the brain against Parkinson's disease. A recent study investigates which compounds might give coffee its neuroprotective powers. The findings may eventually lead to innovative new treatments. More than 60,000 people are diagnosed … [+3825 chars]"
  },
  {
      "source": {
          "id": "medical-news-today",
          "name": "Medical News Today"
      },
      "author": "Ana Sandoiu",
      "title": "Bipolar: Physical activity may boost mood and energy",
      "description": "New research suggests that physical activity may treat depressive symptoms in bipolar disorder, as scientists find a link between motor activity and mood.",
      "url": "http://www.medicalnewstoday.com/articles/323995.php",
      "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/323/323995/323995_1100.jpg",
      "publishedAt": "2018-12-29T00:00:00Z",
      "content": "New research, published in the journal JAMA Psychiatry, found that higher levels of physical activity boost mood and energy levels. The benefits were particularly noticeable in people with bipolar disorder. In the United States, almost 3 percent of adults exp… [+3039 chars]"
  },
  {
      "source": {
          "id": "medical-news-today",
          "name": "Medical News Today"
      },
      "author": "Crystal Hampton",
      "title": "My experience of addiction and recovery",
      "description": "I had what appeared to be the perfect life. Then my life spiralled into substance abuse and depression. This is the story of my addiction and my recovery.",
      "url": "http://www.medicalnewstoday.com/articles/323978.php",
      "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/323/323978/323978_1100.jpg",
      "publishedAt": "2018-12-28T00:00:00Z",
      "content": "Growing up, I had the picture-perfect family. I lived in a beautiful home in the suburbs of Detroit with my parents and younger brother. I had every opportunity in the world, attended private schools, and even made it onto the honor roll. I was involved in da… [+5779 chars]"
  },
  {
      "source": {
          "id": "medical-news-today",
          "name": "Medical News Today"
      },
      "author": "Ana Sandoiu",
      "title": "Moderate drinking tied to lower risk of hospitalization",
      "description": "A new study finds that moderate drinking has associations with a lower risk of hospitalization. The results also confirm the health risks of heavy drinking.",
      "url": "http://www.medicalnewstoday.com/articles/323970.php",
      "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/323/323970/323970_1100.jpg",
      "publishedAt": "2018-12-28T00:00:00Z",
      "content": "New research suggests that moderate drinking may lower the risk of being hospitalized for any cause, including cardiovascular conditions. The effects of alcohol consumption on health are the subject of much controversy. Some studies have suggested that modera… [+3570 chars]"
  },
  {
      "source": {
          "id": "medical-news-today",
          "name": "Medical News Today"
      },
      "author": "Maria Cohut",
      "title": "Prostate cancer: New, quicker test to assess metastasis risk",
      "description": "A newly developed test can detect the risk of metastasis in people with prostate cancer at a quicker rate, lower cost, and using smaller tissue samples.",
      "url": "http://www.medicalnewstoday.com/articles/323984.php",
      "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/323/323984/323984_1100.jpg",
      "publishedAt": "2018-12-27T00:00:00Z",
      "content": "People with prostate cancer are at risk of metastatic tumors forming. A newly developed test can assess this risk more quickly than existing tests and is also cheaper to run. According to the National Cancer Institute, about 11.2 percent of men will receive a… [+3683 chars]"
  }
]

interface Props {
    personal: boolean,
    personalUrL?: string
}

type State = {
    articleList: any []
}

class NewsArticleList extends Component<Props, State> {
    state: State = {
        articleList: []
    }

    constructor(props: Props) {
        super(props);

        this.assembleArticleList = this.assembleArticleList.bind(this);
    }


    async componentWillMount() {
        try {
            let resultUrl = "";
            let result;
            
            if(!this.props.personal) {
                resultUrl = '/api/news/top_headlines';
                result = await axios.get(resultUrl);
            }
            else {
                resultUrl = '/api/news/personal_top_headlines';
                result = await axios.post(resultUrl, {topics: ["cardiac", "heart"]});
            }
            
            const articleList: any [] = result.data.articles;
    
            this.setState({
                articleList: articleList
            });
        }
        catch(err) {
            console.log(err);
            this.setState({
                articleList: fakeSource
            });
        }

    }

    assembleArticleList() {
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
        return (
            <div className="App">
                <div className="App-header">
                    {this.assembleArticleList()}
                </div>
            </div>
        );
    }
  }
  
  export default NewsArticleList;
// News Routes

const express = require('express');
const router = express.Router();
const config = require('../config/config');


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(config.newsAPIKey);

router.get("/", (req,res,next) => {
    return res.status(200).json({message: "hello from news"});
})

router.get("/top_headlines", async (req,res) => {
    
    const response = await newsapi.v2.topHeadlines({
        sources: 'medical-news-today',
        language: 'en',
        pageSize: 7,
        page: 1
    });

    res.status(200).json(response);
})

router.get("/personal_top_headlines", async(req,res) => {
    const topics = ['psychology', 'psychiatry', 'mental health'];
    if(!topics) {
        return res.status(400).json({message: "You're supposed to send a list of terms"});
    }
    
    const questionPayload = topics.join(" OR ");

    const response = await newsapi.v2.everything({
        sources: 'medical-news-today',
        q: questionPayload,
        sortBy: "relevancy",
        pageSize: 5,
        page:1
    });
    res.status(200).json(response);
})

module.exports = router;
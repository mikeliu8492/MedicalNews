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
    try {
        const response = await newsapi.v2.topHeadlines({
            sources: 'medical-news-today',
            language: 'en',
            pageSize: 7,
            page: 1
        });
        return res.status(200).json(response);
    }
    catch(err) {
        return res.status(500).json({message: err.toString(), errors: {apiCall: err.toString()}});
    }


    
})

router.post("/personal_top_headlines", async(req,res) => {
    
    try {
        const topics = req.body.topics //['cardiology', 'heart', 'cardiac', 'cardiovascular'];
        if(!topics || topics.length <= 0) {
            return res.status(400).json({message: "You're supposed to send a list of terms",  errors: {apiCall: "You're supposed to send a list of terms"}});
        }
        
        const questionPayload = topics.join(" OR ");
    
        const response = await newsapi.v2.everything({
            sources: 'medical-news-today',
            q: questionPayload,
            from: "2018-12-25",
            sortBy: "relevancy",
            pageSize: 10,
            page:1
        });

        return res.status(200).json(response);
    }
    catch(err) {
        return res.status(500).json({message: "You're supposed to send a list of terms",  errors: {apiCall: "You're supposed to send a list of terms"}});
    }
})

module.exports = router;
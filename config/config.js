if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports =
{
    newsAPIKey: process.env.NEWS_API_KEY
}
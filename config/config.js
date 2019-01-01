if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports =
{
    newsAPIKey: process.env.NEWS_API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    mongoString: process.env.MONGO_STRING
}
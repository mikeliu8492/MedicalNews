const express = require('express');
const bodyParser = require('body-parser');
const secure = require('express-force-https');
const path = require('path');
const mongoose = require('mongoose');

const config = require('./config/config')

const app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Enable CORS in non-production environments, since we are using different ports
if(process.env.NODE_ENV !== "production") {
    app.use((req,res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With-Header, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        next();
    })
}


// Connect to Mongoose DB
mongoose.connect(encodeURI(config.mongoString), { useNewUrlParser: true,useCreateIndex: true }).then(() => {
    console.log("MongoDB Connection successful!");
})
.catch((err) => {
    console.log(err);
    return;
})

// Import your API index and equip it to your app
const api = require('./index');
app.use("/api", api);


// Serve up the front-end static JS Bundle contents in production environment
if(process.env.NODE_ENV === "production"){
    app.use(secure)
    //app.use(favicon(path.join(__dirname, "client", "public", "favicon.ico")))

    app.use(express.static('client/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client','build', 'index.html'), (err) => {
            if (err) {
              return res.status(500).send(err)
            }
          }
        );
    });    
}
else{
    console.log("NOT PRODUCTION!")
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
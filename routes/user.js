// User Routes

const express = require('express');
const router = express.Router();



router.get("/", async (req,res,next) => {
    return res.status(200).json({message: "hello from users"});
})

router.post("/", async (req,res,next) => {
    return res.status(200).json({message: "post from users"});
})

router.put("/", (req,res,next) => {
    return res.status(200).json({message: "put from users"});
})

router.delete("/", (req,res,next) => {
    return res.status(200).json({message: "delete from users"});
})


module.exports = router;
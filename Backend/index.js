const express = require('express')
// import cors from "cors"
require('dotenv').config()
// app.use(cors())


app.get('/' , ( req , res ) => {
    res.send('hello')
})


app.listen(process.env.PORT , ()=> {
    console.log(`app listing on port ${process.env.PORT}`);
})

// const express=require("express");

// const http=require("http");

// const Url=require("url");

// const port=8000;

// const Users=require("./users.js")

// const app=express();


// app.get("/",(req,res)=>{
//     res.send('hell000')
//     res.render("index",{text:"World"});
// });

// app.use("/users",Users) 


// app.listen(port,()=>{
//     `Server is running at localhost:${port}`
// }
// )

const express = require('express'),cors=require("cors");
const app = express();
const port = 8000;

const { check, validationResult } = require('express-validator');

app.use(express.json(),cors());

app.get('/',cors(),(req,res)=>{
    res.send("hey")
})

app.post('/user', [check("name").isString(), check("email").isEmail()],cors(), (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(422).json({ errors: error.array() })

    console.log(req.body)
    console.log("success")
    res.send("nice")
   
});

app.listen(port, () => {
    `Server is running at localhost:${port}`
}
)
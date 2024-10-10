import express from "express";
import axios from "axios";

const app=express();

const PORT=3000;

app.get("/",async(req,res)=>{
    try {
        const result=await axios("https://v2.jokeapi.dev/joke/Any");
        res.render("index.ejs",{
            category:result.data.category,
            setup:result.data.setup,
            delivery:result.data.delivery,
            joke:result.data.joke
        })
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

app.listen(PORT,console.log(`server running on the port ${PORT}`))
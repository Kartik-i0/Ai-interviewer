import express from "express";
import { PreInterviewBody } from './types';

const app= express();
app.use(express.json());


app.post("/api/v1/pre-interview/" , async (req:any , res:any)=>{
    const {success ,data} = PreInterviewBody.safeParse(req.body);
    
    if(!success){
        res.status(411).json({
            "message": "Incorrect Body"
        });
        return
    } 
    
    // TODO: URL can be very malformed, probably use an SLM here?

    const githubUrl = data.github.endsWith('/') ? data.github.slice(0,-1) : data.github;     

    const githubUsername =  githubUrl.split('/').pop()!;
    
    console.log(githubUrl)
    console.log(githubUsername)

    return res.json({
        msg : "data received"
    })
    
})

app.listen(3001 , ()=>{
    console.log("app is running");
});

  

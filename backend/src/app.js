import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app=express();
const server=createServer(app);
const io=new Server(server,)

app.set("port",(process.env.Port|| 8000));
app.set("")

app.get("/home",(req,res)=>{
    return res.json({"hewllo":"world"});
});

const start =async()=>{
    
    server.listen(app.get("port"),()=>{
        console.log("listening port 8000");
    })
}

start();
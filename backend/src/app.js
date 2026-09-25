import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket} from "./controllers/socketManger.js";
import userRoutes from "./routes/users_routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(userRoutes);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({ extended : true, limit:"40kb"}));
app.use("/api/v1/users", userRoutes); 

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

const start = async () => {
  try{
     await mongoose.connect("mongodb+srv://kishore:dQRhm5mxnr0cRqmd@cluster0.8jlm4pz.mongodb.net/video_conference?appName=Cluster0")
     console.log("mongodb connected successfully")
     server.listen(app.get("port"), () => {
       console.log(`Listening on port ${app.get("port")}`);
     });
  
  }catch(err){
    console.log(err);
  }
    
  
};

start();
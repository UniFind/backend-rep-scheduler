import Express from 'express';
import Helmet from 'helmet';
import Cors from 'cors';
import Mongoose from 'mongoose';    

const server = Express();

// parses response to json 
server.use(Express.json());
server.use(Cors());
server.use(Helmet());

//establish connection to databse 
const DB_CONNECTION = "mongodb://root:rootpassword@0.0.0.0:27017"

Mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true },(error) => {
    if(error){
        console.log(error);
        console.log("Failed to connect to MongaDb");
    } else {
        console.log("conected to db");
    }
});

// send if server is up 
server.get('/', (req,res) => {
    res.send("Server is running ");
});

export default server;
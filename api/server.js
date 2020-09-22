import Express from 'express';
import Helmet from 'helmet';
import Cors from 'cors';

const server = Express();

// parses response to json 
server.use(Express.json());
server.use(Cors());
server.use(Helmet());

//establish connection to databse 

// send if server is up 
server.get('/', (req,res) => {
    res.send("Server is running ");
});

export default server;
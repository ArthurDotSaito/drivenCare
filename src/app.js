import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { Router } from 'express';
import routes from './routes/index.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, (error) =>{
    if(error) return console.log("Unable to listen to server");
    console.log(`server is running on port ${port}`);
})


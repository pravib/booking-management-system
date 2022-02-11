import express from 'express';
import bodyParser from 'body-parser';
import { User } from './types/user';
import {userDAO} from './data-access-objects/user-dao';
import {v1} from 'uuid';
const app = express();

app.use(bodyParser.json());

app.get('/users/:userId',(req,res)=>{
    const userId = req.params.userId;
    res.json({
        message: 'Hello World!',
        enteredUserId: v1()
    });
});

app.post('/users',(req,res)=>{
    const x = new User(req.body);
    console.log(x);
    userDAO.save(x);
    res.sendStatus(200);
});

app.delete('/users/:userId',(req,res)=>{
    res.sendStatus(200);
});

app.patch('/users/:userId',(req,res)=>{
    console.log(`Got an upddate request for user :${req.params.userId}`);
    res.sendStatus(200);
});

app.listen(3000,()=> console.log("Server is running on port 3000"));
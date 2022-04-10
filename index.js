// const express = require('express');
 import express from 'express';
 import fetch from 'node-fetch';
 import { apiurl } from './apiurl.js';


const app = express();
const port = process.env.PORT || 3000







app.listen(port, () => console.log(`listening on ${port}`));





    app.get('/ib/:id',(req, res)=>{

        (async () => {
            var id = req.params.id;
            const momentum =  await fetch(apiurl[id]);
            var dat =  await momentum.json();

            res.send(dat.data);
            console.log(dat);
        })()


     });


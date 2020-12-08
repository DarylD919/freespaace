//var express = require('express');
//var data = require('./data.js');
import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})


app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.listen(3001, () => {
    console.log('port is http://localhost:3001');
});
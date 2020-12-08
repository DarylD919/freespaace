import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

app.get('/api/products/:id', (req, res) =>{
    const products = data.products.find( x => x._id === req.params.id);
    if(products){
        res.send(products);
    } else {
        res.status(404).send({message:'Product not found'});
    }
});


app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`port is http://localhost:${port}`);
});
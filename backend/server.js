import express from 'express';
import mongoose from 'mongoose';

import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';


const app = express();
mongoose.connect('mongodb://localhost/freespace', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})




app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`port is http://localhost:${port}`);
});
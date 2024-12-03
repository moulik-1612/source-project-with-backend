import express from 'express'
import { data } from './sem1.js';
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello from a backend')
})

app.get('/sem1', (req,res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log('server running at :', PORT)
})
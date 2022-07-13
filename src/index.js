import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

app.listen(process.env.PORT, () =>{
    console.log('Servidor online na porta 5000');
});
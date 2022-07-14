import express from 'express';
import { getPoll } from '../controllers/pollController';

const pollRouter = express.Router();

pollRouter.get('/poll', getPoll);

export default pollRouter;
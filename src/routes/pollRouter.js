import express from 'express';
import { getPoll, poll } from '../controllers/pollController.js';

const pollRouter = express.Router();

pollRouter.post('/poll', poll);
pollRouter.get('/poll', getPoll);

export default pollRouter;
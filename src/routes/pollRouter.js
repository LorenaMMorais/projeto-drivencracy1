import express from 'express';
import { getChoiceOptions, getPoll, poll } from '../controllers/pollController.js';

const pollRouter = express.Router();

pollRouter.post('/poll', poll);
pollRouter.get('/poll', getPoll);
pollRouter.get('/poll/:id/choice', getChoiceOptions);

export default pollRouter;
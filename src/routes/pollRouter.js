import express from 'express';
import { countVotes, getChoiceOptions, getPoll, poll } from '../controllers/pollController.js';

const pollRouter = express.Router();

pollRouter.post('/poll', poll);
pollRouter.get('/poll', getPoll);
pollRouter.get('/poll/:id/choice', getChoiceOptions);
pollRouter.get('/poll/:id/result', countVotes);

export default pollRouter;
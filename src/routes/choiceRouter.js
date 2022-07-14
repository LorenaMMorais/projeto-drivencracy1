import express from 'express';
import { postChoice, postVote } from '../controllers/choiceController';

const choiceRouter = express.Router();

choiceRouter.post('/choice', postChoice);
choiceRouter.post('/choice/:id/vote', postVote);

export default choiceRouter;
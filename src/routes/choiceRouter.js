import express from 'express';
import { postChoice, postVote } from '../controllers/choiceController.js';
import { choiceValidation } from '../middlewares/choiceMiddleware.js';

const choiceRouter = express.Router();

choiceRouter.post('/choice', choiceValidation, postChoice);
choiceRouter.post('/choice/:id/vote', postVote);

export default choiceRouter;
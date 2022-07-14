import express from 'express';
import { poll } from '../controllers/pollController.js';

const pollRouter = express.Router();

pollRouter.post('/poll', poll);

export default pollRouter;
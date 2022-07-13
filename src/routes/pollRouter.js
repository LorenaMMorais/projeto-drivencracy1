import express from 'express';
import { poll } from '../controllers/pollController';

const pollRouter = express.Router();

pollRouter.get('/poll', poll);

export default pollRouter;
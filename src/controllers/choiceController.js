import db from '../db.js';
import joi from 'joi';
import { ObjectId } from 'mongodb';

const choiceSchema = joi.object({
    title:joi.string().trim().required(),
    pollId: joi.required()
});

export async function postChoice(req, res){
    const body = req.body;

    const validation = choiceSchema.validate(body);

    if(validation.error){
        res.sendStatus(422);
        return
    }

    const choice = {
        title: body.title,
        pollId: body.pollId
    }

    try{
        const searchPoll = await db.collection('poll').findOne({ _id: new ObjectId(choice.pollId) });

        if(!searchPoll) return res.status(404).send('Enquete não encontrada!');

        const searchChoice = await db.collection('choice').findOne({title: choice.title});

        if(searchChoice) return res.status(409).send('Já existe um voto na enquete!');

        await db.collection('choice').insertOne(choice);
        res.status(201).send(choice);
    } catch(e){
        res.sendStatus(500);
    }
}
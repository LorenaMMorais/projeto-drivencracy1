import db from '../db.js';
import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';

export async function postChoice(req, res){
    const body = req.body;

    const choice = {
        title: body.title,
        poolId: body.poolId
    }

    try{
        const searchPoll = await db.collection('poll').findOne({ _id: new ObjectId(choice.poolId) });

        if(!searchPoll) return res.status(404).send('Enquete não encontrada!');

        const searchChoice = await db.collection('choice').findOne({title: choice.title});

        if(searchChoice) return res.status(409).send('Já existe esta opção na enquete!');

        const expiredDate = searchPoll.expireAt;
        const isExpired = dayjs().isAfter(expiredDate, 'days');

        if(isExpired) return res.status(403).send('Enquete expirada!');

        await db.collection('choice').insertOne(choice);
        res.status(201).send(choice);
    } catch(e){
        res.sendStatus(500);
    }
}

export async function postVote(req, res){
    const id = req.params.id;

    const vote = {
        createdAt: dayjs().format('YYYY-M-DD HH:mm'),
        choiceId: id
    }

    try{
        const isChoice = await db.collection('choice').findOne({ _id: new ObjectId(id)});
        if(!isChoice) return res.status(404).send('Opção de voto inexistente!');
    
        const searchPoll = await db.collection('poll').findOne({ _id: new ObjectId(isChoice.poolId)});

        const expiredDate = searchPoll.expiredAt;

        const isExpired = dayjs().isAfter(expiredDate, 'days');

        if(isExpired) return res.status(403).send('Enquete expirada!');

        await db.collection('vote').insertOne(vote);
        res.sendStatus(201);
    } catch(e){
        res.sendStatus(500);
    }

}
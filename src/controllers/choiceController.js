import db from '../db.js';

export async function postChoice(req, res){
    const body = req.body;

    const choice = {
        title: body.title,
        pollId: body.pollId
    }

    try{
        await db.collection('choice').insertOne(choice);
        res.sendStatus(201);
    } catch(e){
        res.sendStatus(404);
    }
}
import db from "../db.js";
import Joi from "joi";
const pollSchema = Joi.object({
    title: Joi.string().required(),
    expireAt: Joi.string()
});

export async function poll(req, res){
    const body = req.body;
    console.log(body);
    
    const validation = pollSchema.validate(body);

    if(validation.error){
        res.status(422).send('O título precisar ser preenchido!');
        return
    }

    const poll = {
        title: body.title,
        expireAt: body.expireAt
    }
    
    try{
        await db.collection('poll').insertOne(poll);
        res.send(201);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getPoll(req, res){
    try{
        const poll = await db.collection('poll').find().toArray();
        res.send(poll);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getChoiceOptions(req, res){
    const id = req.params.id;
    try{
        const choiceList = await db.collection('choice').find({ poolId: id }).toArray();
        
        if(choiceList.length === 0) return res.status(404).send('Enquete não encontrada!');
        res.send(choiceList);
    }catch(e){
        res.sendStatus(500);
    }
} 
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
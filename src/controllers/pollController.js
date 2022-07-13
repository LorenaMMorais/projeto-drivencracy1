import db from "../db";

export async function poll(req, res){
    const poll = await db.collection('poll').find({}).toArray();

    res.send(poll);
}
import choiceSchema from "../schemas/choiceSchemas.js";

export function choiceValidation(req, res, next){
    const body = req.body;

    const validation = choiceSchema.validate(body);

    if(validation.error){
        res.sendStatus(422);
        return
    }
}
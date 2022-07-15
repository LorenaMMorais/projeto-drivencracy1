import pollSchema from "../schemas/pollSchemas.js";

export function pollValidation(req, res, next){
    const body = req.body;
    
    const validation = pollSchema .validate(body);

    if(validation.error){
        res.status(422).send('O título precisar ser preenchido!');
        return
    }
    
    next();
}
import joi from "joi";

const choiceSchema = joi.object({
    title: joi.string().required().trim(),
    poolId: joi.required()
});

export default choiceSchema;
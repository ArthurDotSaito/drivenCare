import {unprocessableEntity} from '../errors/index.js'

export function validadeSchema(schema){
    return (req,res,next) =>{
        const { error } = schema.validate(req.body, {abortEarly: false});
        if(error){
            const errors = error.details.map((detail) => detail.message);
            throw err.unprocessableEntity(errors);
        }
    }

    next();
}


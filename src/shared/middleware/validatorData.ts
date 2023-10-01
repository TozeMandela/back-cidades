import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import yup, {Schema} from 'yup';

type Tpropety = 'body' | 'header' | 'params' | 'query';

type propetyOpcional = Record<Tpropety, Schema<any>>

type schemaEquals = <T>(schemas: Schema<T>) => Schema<T>

type arraySchema = (schema: schemaEquals) => Partial<propetyOpcional>

type functionE = (getAllSchemes: arraySchema)=> RequestHandler;


export const validateObj: functionE = (getAllSchemes)=>async (req, res, next)=>{
    const schema = getAllSchemes(schema=>schema);

    const errorsResult: Record<string, Record<string, string>> = {};
    Object.entries(schema).forEach(([key, schem]) => {

        try {
            schem.validateSync(req[key as Tpropety] , {abortEarly: false});
        } catch (error) {

            const err = error as yup.ValidationError;
            const errorMsg: Record<string, string> = {};

            err.inner.forEach(er => {
                console.log(er,'\n\n\n');

                if(!er.path) return;
                errorMsg[er.path] = er.message;
            });

            errorsResult[key] = errorMsg;
        }
    });

    if (Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
};
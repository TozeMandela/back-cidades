import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IparamProps {
  id?: number,
}

interface IquaryProps {
  name_city: string,
}
export const deliteByIdValidation = validateObj((getSchema)=>({
    params: getSchema<IparamProps>(
        yup.object().shape({
            id: yup.number().required().moreThan(0),
        })),
    query: getSchema<IquaryProps>(
        yup.object().shape({
            name_city: yup.string().required().min(3)
        })
    )
}));

export const deliteByIdData = async (req: Request<IparamProps>, res: Response) => {
    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    });

    return res.status(StatusCodes.NO_CONTENT).send();
};
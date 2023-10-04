import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IparamProps {
  id?: number,
}

interface IbodyProps {
  name: string,
}

export const getByIdUpdatedValidation = validateObj((getSchema)=>({
    params: getSchema<IparamProps>(
        yup.object().shape({
            id: yup.number().required().moreThan(0),
        })),
    body: getSchema<IbodyProps>(
        yup.object().shape({
            name: yup.string().required().min(3),
        })),
}));

export const ByIdUpdatedValidation = (req: Request, res: Response) => {
    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    });

    return res.status(StatusCodes.NO_CONTENT).send();
};
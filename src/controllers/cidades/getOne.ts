import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IparamProps {
  id?: number,
}

export const getByIdValidation = validateObj((getSchema)=>({
    params: getSchema<IparamProps>(
        yup.object().shape({
            id: yup.number().optional().moreThan(0),
        })),
}));

export const getByIdData = async (req: Request<IparamProps>, res: Response) => {

    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    });

    return res.status(StatusCodes.OK).json({
        id: req.params.id,
        name_city: 'Caxias do Sul',
    });
};
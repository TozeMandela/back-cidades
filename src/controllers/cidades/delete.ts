import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IparamProps {
  id: number,
}

export const deliteByIdValidation = validateObj((getSchema)=>({
    params: getSchema<IparamProps>(
        yup.object().shape({
            id: yup.number().required().moreThan(0),
        })),
}));

export const deliteByIdData = async (req: Request<{}, {}, IparamProps>, res: Response) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ info: 'params'});
};
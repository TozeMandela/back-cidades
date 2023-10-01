import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IparamProps {
  id: number,
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

export const ByIdUpdatedValidation = async (req: Request<{}, {}, IparamProps>, res: Response) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ info: 'params'});
};
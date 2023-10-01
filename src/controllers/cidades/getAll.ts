import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IqueryProps {
  page?: number,
  limit?: number,
  filter?: string
}

export const getAlldataValidation = validateObj((getSchema)=>({
    query: getSchema<IqueryProps>(
        yup.object().shape({
            page: yup.number().moreThan(0).optional(),
            limit: yup.number().moreThan(0).optional(),
            filter: yup.string().optional(),
        })),
}));

export const showAllData = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ info: 'query'});
};
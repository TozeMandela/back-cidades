import { Request, Response} from 'express';
import * as yup from 'yup';
import { validateObj } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface Icidade {
  name_city: string,
}

// const bodyValidator: yup.Schema<Icidade>;

export const createBodyValidate = validateObj((getSchema)=>({
    body: getSchema<Icidade>(yup.object().shape({
        name_city: yup.string().required().min(5),
    })),
}));

export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
    console.log('Mandelaaaaa');

    return res.status(StatusCodes.CREATED).json({ info: '1'});
};
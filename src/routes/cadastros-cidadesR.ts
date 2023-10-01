import { Router } from 'express';
const route = Router();
import {StatusCodes} from 'http-status-codes';
import {cidadesControler} from '../controllers';

route.get('/', (req, res)=>{
    res.status(StatusCodes.ACCEPTED).json({info: 'success'});
});

route.post('/create', cidadesControler.createBodyValidate, cidadesControler.create);
route.get('/showAll', cidadesControler.getAlldataValidation, cidadesControler.showAllData);
route.get('/showOne/:id', cidadesControler.getByIdValidation, cidadesControler.getByIdData);
route.delete('/delete/:id', cidadesControler.deliteByIdValidation, cidadesControler.deliteByIdData);
route.put('/updated/:id', cidadesControler.getByIdUpdatedValidation, cidadesControler.ByIdUpdatedValidation);


export default route;

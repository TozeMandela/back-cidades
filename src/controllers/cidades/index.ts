import * as create from './create';
import * as getAll from './getAll';
import * as getOne from './getOne';
import * as updated from './updated';
import * as delite from './delete';

const cidadesControler = {
    ...create,
    ...getAll,
    ...getOne,
    ...updated,
    ...delite
};

export { cidadesControler };
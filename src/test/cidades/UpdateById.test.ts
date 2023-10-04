import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidades - UpdateById', () => {

    it('Atualiza registro', async () => {

        const res1 = await testServer
            .post('/cidades/create')
            .send({ name_city: 'Caxias do sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resAtualizada = await testServer
            .put('/cidades/updated/1')
            .send({ name_city: 'Caxias' });

        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
    it('Tenta atualizar registro que não existe', async () => {

        const res1 = await testServer
            .put('/cidades/updated/99999')
            .send({ name_city: 'Caxias' });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});

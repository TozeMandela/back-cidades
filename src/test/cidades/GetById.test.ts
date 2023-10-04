import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidades - GetById', () => {

    it('Busca registro por id', async () => {

        const res1 = await testServer
            .post('/cidades/create')
            .send({ name_city: 'Caxias do sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .get('/cidades/showOne/1')
            .send();

        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('name_city');
    });
    it('Tenta buscar registro que não existe', async () => {

        const res1 = await testServer
            .get('/cidades/showOne/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});

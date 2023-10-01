import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('cidades - create', ()=>{

    it('cria registro', async ()=>{

        const res = await testServer.post('/cidades/create').send({
            name_city: 'Luanda'
        });

        expect(res.statusCode).toEqual(StatusCodes.CREATED);
    });

});
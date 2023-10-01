import '../shared/services/translationsYup';
import express from 'express';
import cadastros_veiculos from '../routes/cadastros-cidadesR';
const server = express();

server.use(express.json());

server.use('/cidades', cadastros_veiculos);

export { server };

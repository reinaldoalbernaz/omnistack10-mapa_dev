const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...) - GET
// Route Params: request.params (Identificar um recurso na alteração ou remoção) - PUT, DELETE
// Body: request.body (Dados para criação ou alteração de um registro) - POST, PUT


app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ menssage: 'Hello OmniStack' });
});

app.listen(3333);
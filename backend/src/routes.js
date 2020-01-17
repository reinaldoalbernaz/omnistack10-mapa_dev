const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...) - GET
// Route Params: request.params (Identificar um recurso na alteração ou remoção) - PUT, DELETE
// Body: request.body (Dados para criação ou alteração de um registro) - POST, PUT


routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    const { name = login, avatar_url, bio } = apiResponse.data;
    const techsArray = techs.split(',').map(tech => tech.trim());
    console.log(name, avatar_url, bio, github_username);

    const dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs,
    });

    return response.json(dev);
});

module.exports = routes;
const { Server } = require('http');
var personagemRepository = require('../repositories/personagem-repository');

exports.get = async (req, res) => {
    try {
        const resultSelect = await personagemRepository.obterPersonagens();
        res.status(200).send({ data: resultSelect.rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao listar os personagens.'});
    }
};
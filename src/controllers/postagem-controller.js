const { Server } = require('http');
var postagemRepository = require('../repositories/postagem-repository');

exports.get = async (req, res) => {
    try {
        const resultSelect = await postagemRepository.obterPostagens();
        res.status(200).send({ data: resultSelect.rows }
    );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao consultar a postagem.'});
    }
};

exports.post = async (req, res) => {
    try{
        const conteudo = req.body;
        const resultItem = await postagemRepository.criarPostagem(conteudo.nome, conteudo.depoimento);
        res.status(201).json({ data: resultItem});

    }catch (error){
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao criar a postagem.'});
    }
}
exports.delete = async (req, res) => {
    try {
        const conteudo = req.body;
        const resultItem = await postagemRepository.excluirPostagem(conteudo.id);
        res.status(202).json({ data: resultItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao excluir a postagem.'});
    }
}

exports.put = async(req, res) => {
    try {
        var conteudo = req.body;
        var resultItem = await postagemRepository.atualizarPostagem(conteudo.depoimento, conteudo.id);
    res.status(203).json({ data: resultItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar a postagem.'});
    }
}
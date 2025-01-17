const { Server } = require('http');
var contatoRepository = require('../repositories/contato-repository');

exports.get = async(req, res) => {
    try {
        const resultSelect = await contatoRepository.obterContatos();
        res.status(200).send({data: resultSelect.rows}
    );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao consultar o contato.'});
    }
}

exports.post = async (req, res) => {
    try {
        const conteudo = req.body;
        const resultItem = await contatoRepository.criarContato(conteudo.nome, conteudo.email, conteudo.cidade, conteudo.estado, conteudo.telefone, conteudo.assunto, conteudo.mensagem);
        res.status(200).send({data: resultItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao criar o contato.'});
    }
}

exports.delete = async (req, res) => {
    try {
        const conteudo = req.body;
        const resultItem = await contatoRepository.excluirContato(conteudo.id);
        res.status(200).json({ data: resultItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao tentar excluir o contato.'});
    }
}

exports.put = async(req, res) => {
    try {
         const conteudo = req.body;
         const resultItem = await contatoRepository.atualizarContato(conteudo.assunto, conteudo.mensagem, conteudo.id);
         res.status(200).json({ data: resultItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar o contato.'});
    }
}

const clientBase = require('../db/db');

exports.obterPersonagens = async() => {
    return clientBase.query(`SELECT * FROM personagens ORDER BY id`);
};
/**
 *  Arquivo: produto.js
 *  Author: Amanda Pinheiro
 *  Descrição: arquivo responsável onde tratamos o modelo da classe 'Produto'
 *  Data: 01/10/2021
 *  obs.: http://mongoosejs.com/docs/schematypes.html
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 *  Produto:
 * 
 *  -> Id: int
 *  -> Nome: String
 *  -> Preco: Number
 *  -> Descrição: String
 */

var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);

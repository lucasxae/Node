var http = require("http");

http.createServer(function(requisao, resposta){
    resposta.end("Bem vindo ao meu site") //funcao para dar uma resposta no meu site
}).listen(8181) // criando um servidor http em node
console.log("Meu servidor esta rodando!");

// (parametro.end("Escreva aqui") -> jeito de escrever alguma coisa que vai aparecer na tela principal do site)
// -> foi feito isso dentro de uma function 
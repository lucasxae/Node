function soma(a,b){
    return a + b;
}

function multi(a,b){
    return a * b;
}

function sub(a,b){
    return a - b;
}

function div(a,b){
    return a / b;
}  




module.exports = { // maneira de exportar varias funcoes de uma vez so
    soma,
    multi,
    sub,
    div
}; 


/* (MODULE.EXPORTS = SOMA) exportando a funcao soma, disponibilizando para acesso 
a qualquer arquivo do meu programa*/

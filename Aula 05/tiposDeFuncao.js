// tipos de função

// declarativas
function funcao(){
    console.log('Sou uma mensagem de uma função declarativa')
}

funcao();

// expressão de função
// com nomeação
var funcao1 = function(){
    console.log('Sou uma mensagem de uma função de expressão')
}

funcao1();

var funcao3 = () => {
    console.log('Sou uma arrow function')
}

funcao3();
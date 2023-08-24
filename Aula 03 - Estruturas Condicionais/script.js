var jogador1 = 0;
var jogador2 = 1;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Os jogadores são inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
//usando else if
else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}

//usando else
else{
    console.log('Ninguém marcou ponto!');
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}
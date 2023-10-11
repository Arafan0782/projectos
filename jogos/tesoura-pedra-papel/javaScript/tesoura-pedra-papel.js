
let pontuacoes = {
    ganhos: 0,
    perdas: 0,
    empates:0
}


let guardarPontuacoes = JSON.parse(localStorage.getItem('pontuacoes'));

if (guardarPontuacoes){
    pontuacoes = guardarPontuacoes;
}

console.log(guardarPontuacoes);


// Pa paga pontuacoes:
function apagarPontuacoes(){

    pontuacoes.ganhos = 0;
    pontuacoes.perdas = 0;
    pontuacoes.empates = 0;

    atualizarPontuacoes();
}


atualizarPontuacoes();

// JOGO:
function jogar(escolhaJogador) {

    const escholaComputador = computador();
    let resultadoJogo = '';

    // Pedra:
    if(escolhaJogador === 'Pedra'){

        if(escholaComputador === 'Pedra'){
            resultadoJogo = 'Empate';

        }else if(escholaComputador === 'Tesoura'){
            resultadoJogo = 'Bu ganha';

        }else if(escholaComputador === 'Papel'){
            resultadoJogo = 'Bu pirdi';
        }
    
    // Tesoura
    }else if(escolhaJogador === 'Tesoura'){

        if(escholaComputador === 'Pedra'){
            resultadoJogo = 'Bu pirdi';

        }else if(escholaComputador === 'Tesoura'){
            resultadoJogo = 'Empate';

        }else if(escholaComputador === 'Papel'){
            resultadoJogo = 'Bu ganha';
        }

    //Papel
    }else if(escolhaJogador === 'Papel'){

        if(escholaComputador === 'Pedra'){
            resultadoJogo = 'Bu ganha';

        }else if(escholaComputador === 'Tesoura'){
            resultadoJogo = 'Bu pirdi';

        }else if(escholaComputador === 'Papel'){
            resultadoJogo = 'Empate';
        }

    }


    if(resultadoJogo === 'Bu ganha'){
        pontuacoes.ganhos += 1;

    }else if(resultadoJogo === 'Bu pirdi'){
        pontuacoes.perdas += 1;

    }else if(resultadoJogo === 'Empate'){
        pontuacoes.empates += 1;

    }


    // Resultados na ecra di acordo ku jogo:
    let jsResultadoJogo = document.querySelector('.js-resultado-jogo');
    let jsResultadoMovimentos = document.querySelector('.js-resultado-movimentos');
    

    jsResultadoJogo.innerHTML = `${resultadoJogo}`;

    jsResultadoMovimentos.innerHTML = `Aboh 
    <img class="imagens"  src="imagens/${escolhaJogador}-emoji.png"> <img class="imagens"  src="imagens/${escholaComputador}-emoji.png"> 
    Computador`;

    atualizarPontuacoes();

    // pa guarda na memoria:
    let stringJson = JSON.stringify(pontuacoes);
    localStorage.setItem('pontuacoes', stringJson);

    // alert(`Bu cudji ${escolhaJogador}. Computador ${escholaComputador}. Resultado: ${resultadoJogo} \nGanhos: ${pontuacoes.ganhos}; perdas: ${pontuacoes.perdas}; empates: ${pontuacoes.empates}`);

}


function atualizarPontuacoes(){
    let jsPontuacoes = document.querySelector('.js-pontuacoes');
    jsPontuacoes.innerHTML = `Ganhos: ${pontuacoes.ganhos} ;   Perdas: ${pontuacoes.perdas} ; Empates: ${pontuacoes.empates}`;
}




// ESCOLHA DE COMPUTADOR:
function computador(){
    let numeroAleatorio = Math.random();
    let escholaComputador = '';

    if(numeroAleatorio >= 0 && numeroAleatorio < 1/3){
        escholaComputador = 'Pedra';

    }else if(numeroAleatorio >= 1/3 && numeroAleatorio < 2/3){
        escholaComputador = 'Tesoura';

    }else {
        escholaComputador = 'Papel';

    }

    return escholaComputador;

}


// Pa djubih resultado di pontuacoes:

let pontuacoes = {
    ganhos: 0,
    perdas: 0,
    empates: 0
};


// pa guarda algo na memoria di computador na web:

const GuardarPontuacoes = JSON.parse(localStorage.getItem('pontuacoes'));

if (GuardarPontuacoes){
    pontuacoes = GuardarPontuacoes;
}

console.log(GuardarPontuacoes);


// funcao de jogo completo:

function jogar(escolhaJogador){


    
    

    const escolhaComputador = Computador();
    let resultadoJogo = '';

    // Comando pa tesoura:
    if (escolhaJogador === 'Tesoura'){

        if (escolhaComputador === 'Tesoura'){
            resultadoJogo = 'Empate';

        }else if (escolhaComputador === 'Pedra'){
            resultadoJogo = 'Bu pirdi';

        }else if (escolhaComputador === 'Papel'){
            resultadoJogo = 'Bu ganha';

        }

    // comando pa Pedra:    
    }else if (escolhaJogador === 'Pedra'){

        if (escolhaComputador === 'Tesoura'){
            resultadoJogo = 'Bu ganha';

        }else if (escolhaComputador === 'Pedra'){
            resultadoJogo = 'Empate';

        }else if (escolhaComputador === 'Papel'){
            resultadoJogo = 'Bu pirdi';
            
        }

    // comando pa Papel:
    }else if (escolhaJogador === 'Papel'){

        if (escolhaComputador === 'Tesoura'){
            resultadoJogo = 'Bu pirdi';

        }else if (escolhaComputador === 'Pedra'){
            resultadoJogo = 'Bu ganha';

        }else if (escolhaComputador === 'Papel'){
            resultadoJogo = 'Empate';
            
        }

    }

    // dps ku no sibih resultado di jogo, gos no na bai adicional dentro di objecto pa sibih canto bias ku na ganha ou pirdi:

    if (resultadoJogo === 'Bu ganha'){
        pontuacoes.ganhos += 1;

    }else if(resultadoJogo === 'Bu pirdi'){
        pontuacoes.perdas += 1;

    }else if(resultadoJogo === 'Empate'){
        pontuacoes.empates += 1;
    }

    //let converterParaJson = JSON.stringify(pontuacoes);
    
    // pa guarda na memoria:
    localStorage.setItem('pontuacoes', JSON.stringify(pontuacoes));



    const resultadoEcra = document.querySelector('.resultado-ecra');

    resultadoEcra.innerHTML = `\nPontuacoes: Ganhos: ${pontuacoes.ganhos} ; Perdas: ${pontuacoes.perdas} ; Empates: ${pontuacoes.empates}`

    // resultadoEcra.innerHTML = `Bu cudji: <img class="imagem" src="imagens/${escolhaJogador}-emoji.png" Computador cudji:  <img class="imagem" src="imagens/${escolhaComputador}-emoji.png"> `

    // resultadoEcra.innerHTML = `Bu cudji ${escolhaJogador}. Computador cudji ${escolhaComputador}. \nResultado di jogo: ${resultadoJogo} \nPontuacoes: Ganhos: ${pontuacoes.ganhos} ; Perdas: ${pontuacoes.perdas} ; Empates: ${pontuacoes.empates}`;


}








// funcao pa sibih numero ku computador na cudji:
function Computador (){
    const numeroAleatorio = Math.random ();
    let escolhaComputador = '';

    if(numeroAleatorio >= 0 && numeroAleatorio < 1/3){
        escolhaComputador = 'Tesoura';

    }else if(numeroAleatorio >= 1/3 && numeroAleatorio < 2/3){
        escolhaComputador = 'Pedra';

    }else{
        escolhaComputador = 'Papel';
    }

    return escolhaComputador;
}

Computador();

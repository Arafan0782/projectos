


// Es i pa hora ku no misti pa cenas aconteci ki na sedo



const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const salto = () =>{
    mario.classList.add('salto'); // ku sedo animacao ku no cria na csss

    // gos ntem ku removi kil classe pa pudi adicional di nobo pb di kuma si no toca um bias so, i ta para. No na bai usa  "setTimeout(funcao, tempo)" es li i ta recebi um fn ku tempo

    setTimeout( () => {

        mario.classList.remove('salto')

    } , 500)

}

//===================================================

// Li no na bai tene um loop ki na bai roda td tempo pa djubih si no pirdi ou nao

const loop  = setInterval( () => {

    const possicaoPipe = pipe.offsetLeft;
    const possicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '') // sinal di + i conversao pa number
   
    //console.log(possicaoMario)
    //console.log(possicaoPipe)

    if (possicaoPipe <= 105 && possicaoPipe > 0 && possicaoMario < 55){

        pipe.style.animation = 'none';
        pipe.style.left = `${possicaoPipe}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${possicaoMario}px` // es i na para na exato momento nundeh q no pirdi nel

        // Pa subtitui imagem di mario pa imagem game-over

        mario.src = 'imagens/game-over.webp'
        mario.style.width = '150px'

        // hora ku jogo caba i necassario pa i para loop, entao:
        clearInterval(loop);
       
    }

}, 10)

let tecladoComputador = document.addEventListener('keydown', salto);
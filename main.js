function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function (){
        playSonido(idAudio)
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('activa');
        }
        
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    };

}

//document.querySelector('.tecla_pom').onclick = playSonidoPom;

/*  function playSonidoClap () {
        document.querySelector('#sonido_tecla_clap').play();
    }

document.querySelector('.tecla_clap').onclick = playSonidoClap; */


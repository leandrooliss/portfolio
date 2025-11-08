const imagensDoCarrossel = document.querySelectorAll('.carrossel__imagem');

const botaoEsquerdo = document.getElementById('botao-esquerdo');
const botaoDireito = document.getElementById('botao-direito');
const indicadores = document.getElementById('carrossel-indicadores');

let indice = 0;

imagensDoCarrossel.forEach((_, i) => {
    const indicador = document.createElement('button');
    indicador.classList.add('carrossel__indicador');
    if(i === 0){
        indicador.classList.add('indicador__selecionado');
    }

    indicador.addEventListener('click', function(){
        indice = i;
        mudarImagem();
    });

    indicadores.appendChild(indicador);
})

const botoesIndicadores = indicadores.querySelectorAll('.carrossel__indicador');

function mudarImagem(){
    imagensDoCarrossel.forEach(imagem => {
        imagem.style.transform = 'translateX(' + indice * -100 +'%)';
    });
    botoesIndicadores.forEach(botao =>{
        botao.classList.remove('indicador__selecionado');
    })
    botoesIndicadores[indice].classList.add('indicador__selecionado');
};

botaoEsquerdo.addEventListener('click', function(){
    indice = (indice - 1 + imagensDoCarrossel.length) % imagensDoCarrossel.length;
    mudarImagem();
});

botaoDireito.addEventListener('click', function(){
    indice = (indice + 1) % imagensDoCarrossel.length;
    mudarImagem();
});


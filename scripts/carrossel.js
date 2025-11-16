const faixaCarrossel = document.querySelector('.carrossel__faixa')
const imagensDoCarrossel = document.querySelectorAll('.carrossel__imagem');
const botoesEsquerdo = document.querySelectorAll('.botao__esquerdo');
const botoesDireito = document.querySelectorAll('.botao__direito');
const indicadores = document.getElementById('carrossel-indicadores');
const lightbox = document.getElementById('lightbox');
const imagemLightbox = document.getElementById('lightbox-img');
const folder = lightbox.dataset.folder;

let indice = 0;
imagemLightbox.src = folder + '0.webp'

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

    faixaCarrossel.addEventListener('click', function(){
        lightbox.style.display = 'flex';
        document.body.classList.add('sem-scroll');
    });
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
    imagemLightbox.src = folder + indice + '.webp'
};

botoesEsquerdo.forEach(botao => {
    botao.addEventListener('click', function(event){
        event.stopPropagation();
        indice = (indice - 1 + imagensDoCarrossel.length) % imagensDoCarrossel.length;
        mudarImagem();
    });
});
    
botoesDireito.forEach(botao => {
    botao.addEventListener('click', function(event){
        event.stopPropagation();
        indice = (indice + 1) % imagensDoCarrossel.length;
        mudarImagem();
    });
});

lightbox.addEventListener('click', function(){
    lightbox.style.display = 'none';
    document.body.classList.remove('sem-scroll');
});

imagemLightbox.addEventListener('click', function(event){
    event.stopPropagation();
});

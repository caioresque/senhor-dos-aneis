document.addEventListener('DOMContentLoaded', function() {
    var anelElement = document.querySelector('#anel img');
    var conteudoElement = document.querySelector('#anel .conteudo');

    anelElement.addEventListener('click', function() {
        conteudoElement.classList.toggle('ativa');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var principalElement = document.querySelector('#principal img');
    var conteudoElement = document.querySelector('#principal .conteudo');

    principalElement.addEventListener('click', function() {
        conteudoElement.classList.toggle('ativa');
    });
});

document.addEventListener('DOMContentLoaded', function(){
    var sauronElement = document.querySelector('#sauron img');
    var conteudoElement = document.querySelector('#sauron .conteudo');

    sauronElement.addEventListener('click', function() {
        conteudoElement.classList.toggle('ativa');
    })
      
})

document.addEventListener('DOMContentLoaded', function(){
    var orcElement = document.querySelector('#orc img');
    var conteudoElement = document.querySelector('#orc .conteudo');

    orcElement.addEventListener('click', function() {
        conteudoElement.classList.toggle('ativa');
    })
    
})


document.addEventListener('DOMContentLoaded', function(){
    var gollumElement = document.querySelector('#gollum img');
    var conteudoElement = document.querySelector('#gollum .conteudo');

    gollumElement.addEventListener('click', function() {
        conteudoElement.classList.toggle('ativa');
    })
    
})


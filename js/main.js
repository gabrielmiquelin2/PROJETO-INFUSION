(function(){
    // Seleciona o elemento body e adiciona/remove classes para indicar suporte a JS
    let $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
    // Cria uma instância da classe Menu para manipular o menu de navegação do cabeçalho
    let menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024 
    })
    
    // Cria uma instância da classe Carousel para manipular o slideshow de imagens da seção "Laptop"
    let carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    // Cria uma instância da classe Carousel para manipular o slideshow de depoimentos da seção "What they say"
    let carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()


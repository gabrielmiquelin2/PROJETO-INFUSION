function Carousel(config){
  // Verifica se o container é uma string e seleciona o elemento ou usa o próprio elemento passado
  this.container = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container
  
  // Verifica se o elementos são uma string e seleciona os elementos ou usa os próprios elementos passados
  this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens
  
  // Verifica se o botão de próxima imagem é uma string e seleciona o elemento ou usa o próprio elemento passado
  this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev
  
  // Verifica se o botão de imagem anterior é uma string e seleciona o elemento ou usa o próprio elemento passado
  this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext
  
  // Cria variáveis para referência interna
  let _this = this;
  let _currentSlide = 0
  
  // Função de inicialização
  init()
  
  // Função para inicializar o carrossel
  function init(){
      let _show = _this.container.querySelectorAll('.show')
      
      // Remove a classe 'show' de todos os elementos que a possuem
      Array.prototype.forEach.call(_show, function(sh){
          sh.classList.remove('show')
      })
      
      // Adiciona a classe 'show' ao primeiro elemento
      _this.itens[0].classList.add('show')
      
      // Remove os estilos inline dos botões
      _this.btnNext.removeAttribute('style')
      _this.btnPrev.removeAttribute('style')
      
      // Adiciona os eventos de clique nos botões
      addListeners()        
  }
  
  // Função para adicionar os eventos de clique nos botões
  function addListeners(){
      _this.btnNext.addEventListener('click', showNextSlide)
      _this.btnPrev.addEventListener('click', showPrevSlide)
  }
  
  // Função para exibir o próximo slide
  function showNextSlide(){
      _currentSlide++;
      showSlide()
  }
  
  // Função para exibir o slide anterior
  function showPrevSlide(){
      _currentSlide--;
      showSlide()
  }
  
  // Função para exibir o slide atual
  function showSlide(){
      let qtd = _this.itens.length;
      
      // Calcula qual é o slide atual
      let slide = _currentSlide % qtd;
      slide = Math.abs(slide);
      
      // Remove a classe 'show' do elemento que a possui e adiciona ao slide atual
      _this.container.querySelector('.show').classList.remove('show');
      _this.itens[slide].classList.add('show')
  }
  
}
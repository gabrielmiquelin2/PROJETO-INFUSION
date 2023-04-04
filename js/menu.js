 //anderline nas variaves é para dizer que ela á uma variável INTERNA

 function Menu(config){
  // Verifica se o container foi passado como um seletor CSS ou como um elemento DOM
  this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
  
  // Verifica se o botão de alternância foi passado como um seletor CSS ou como um elemento DOM
  this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
  
  // Verifica se uma largura máxima foi especificada e a armazena, caso contrário, define como false
  this.maxWidth = config.widthEnabled || false;
  
  // Cria duas variáveis privadas para controlar o estado do menu (aberto ou fechado) e armazena a instância atual do objeto Menu na variável _this
  let _opened = false;
  let _this = this;
  
  // Remove quaisquer estilos inline do botão de alternância
  this.btn.removeAttribute('style');
  
  // Verifica se o menu deve ser fechado imediatamente ou se deve aguardar o redimensionamento da janela do navegador
  if (this.maxWidth) {
    // Adiciona um ouvinte de evento para o evento "resize" da janela do navegador
    window.addEventListener('resize', e => {
      // Verifica se a largura da janela do navegador é maior que a largura máxima especificada
      if (window.innerWidth > _this.maxWidth) {
        // Se for, remove qualquer estilo inline do elemento do menu e define _opened como verdadeiro
        _this.nav.removeAttribute('style');
        _opened = true;
      } else if (!this.nav.getAttribute('style')) {
        // Se não for e o menu não tiver nenhum estilo inline aplicado, fecha o menu
        closeMenu();
      }
    });
    
    // Verifica se a largura da janela do navegador é menor ou igual à largura máxima especificada e fecha o menu imediatamente
    if (window.innerWidth <= _this.maxWidth) {
      closeMenu();
    }
  }
  
  // Adiciona um ouvinte de evento para o clique no botão de alternância
  this.btn.addEventListener('click', openOrClose);

  // Função que abre ou fecha o menu, dependendo do estado atual
  function openOrClose(){
    if (!_opened){
      openMenu();
    } else {
      closeMenu();
    }
  }

  // Função que abre o menu
  function openMenu(){
    // Calcula a distância entre o elemento do menu e o topo da página e a armazena como uma string
    let _top = _this.nav.getBoundingClientRect().top + 'px';
    
    // Define um objeto _style contendo os estilos inline a serem aplicados ao elemento do menu
    let _style = {
      maxHeight: 'calc(100vh - '+ _top +' )',
      overflow: 'hidden'
    };
    
    // Aplica os estilos inline ao elemento do menu
    applyStyleToNav(_style);
    
    // Define _opened como verdadeiro
    _opened = true;
  }

  function applyStyleToNav(_style){
    // itera sobre as chaves do objeto _style
    Object.keys(_style).forEach( stl => {
      // define cada chave como uma propriedade CSS do elemento nav
      _this.nav.style[stl] = _style[stl];
    });
  }
  
  function closeMenu(){
    // define um objeto _style com as propriedades CSS que serão aplicadas ao elemento nav
    let _style = {
      maxHeight: '0px',
      overflow: 'hidden'
    };
    
    // aplica as propriedades CSS definidas no objeto _style ao elemento nav
    applyStyleToNav(_style);
  
    // define a variável _opened como false para indicar que o menu foi fechado
    _opened = false;
  }
}

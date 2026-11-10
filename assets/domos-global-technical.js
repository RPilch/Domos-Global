document.addEventListener('DOMContentLoaded',function(){
  var button=document.querySelector('.menu-button');
  var nav=document.querySelector('.nav');
  if(button&&nav){
    button.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      button.setAttribute('aria-expanded',String(open));
      document.body.classList.toggle('nav-open',open);
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('open');
        button.setAttribute('aria-expanded','false');
        document.body.classList.remove('nav-open');
      });
    });
  }
});

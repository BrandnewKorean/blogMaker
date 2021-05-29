$(function(){
  $('#text1').animate({
    opacity: 1
  }, 1000);

  var imageWrap = document.querySelectorAll('.image-wrap');
  var textWrap = document.querySelectorAll('.text-wrap');

  var bg3Title = document.querySelector('#bg3Title');

  var listWrap = document.querySelector('.list-wrap');
  var listWrapTop = $(listWrap).offset().top;

  if($(imageWrap[0]).hasClass('active')) listWrapTop -= 150;

  var leftMove = window.scrollY - listWrapTop;
  var listItems = listWrap.querySelector('ul').querySelectorAll('li');

  var siteTitle = document.querySelectorAll('.site-title');
  var siteButtonWrap = document.querySelectorAll('.site-button-wrap');

  var bg4 = document.querySelector('.bg4');

  if(leftMove <= 0){
    leftMove = 0;
  }else if(leftMove >= $(listWrap.querySelector('ul')).width() - window.innerWidth){
    leftMove = $(listWrap.querySelector('ul')).width() - window.innerWidth;
  }

  $(window).resize(function(){
    if(!$(listWrap).hasClass('sticky')) {
      listWrapTop = $(listWrap).offset().top;
      leftMove = 0;
    }else if(window.scrollY >= Math.ceil($(bg4).offset().top)-1){
      leftMove = $(listWrap.querySelector('ul')).width() - window.innerWidth;
      $(listWrap.querySelector('ul')).css({transform: 'translate(-'+(leftMove)+'px, 0)'});
    }else{
      leftMove = window.scrollY - listWrapTop;

      if(leftMove <= 0){
        leftMove = 0;
      }else if(leftMove >= $(listWrap.querySelector('ul')).width() - window.innerWidth){
        leftMove = $(listWrap.querySelector('ul')).width() - window.innerWidth;
      }
    }
    $(listWrap.querySelector('ul')).css({transform: 'translate(-'+(leftMove)+'px, 0)'});
  });

  $(window).scroll(function(){
    for(var i=0;i<imageWrap.length;i++){
      if(window.scrollY + window.innerHeight >= $(imageWrap[i]).offset().top){
        $(imageWrap[i]).addClass('active');
        $(textWrap[i]).addClass('active');
      }
    }

    if(window.scrollY >= $(bg3Title).offset().top - 50){
      $(bg3Title).addClass('sticky').css({top: 50});
    }

    if(!$(listWrap).hasClass('sticky')) {
      listWrapTop = $(listWrap).offset().top;
      leftMove = 0;
    }else if(window.scrollY >= Math.ceil($(bg4).offset().top)-1){
      leftMove = $(listWrap.querySelector('ul')).width() - window.innerWidth;
      $(listWrap.querySelector('ul')).css({transform: 'translate(-'+(leftMove)+'px, 0)'});
    }else{
      leftMove = window.scrollY - listWrapTop;

      if(leftMove <= 0){
        leftMove = 0;
      }else if(leftMove >= $(listWrap.querySelector('ul')).width() - window.innerWidth){
        leftMove = $(listWrap.querySelector('ul')).width() - window.innerWidth;
      }
    }

    if(window.scrollY >= $(listWrap).offset().top){
      $(listWrap).addClass('sticky').css({top: 0});
      $(listWrap.querySelector('ul')).css({transform: 'translate(-'+(leftMove)+'px, 0)'});

      for(var i=0;i<listItems.length;i++){
        if($(listItems[i]).offset().left <= 0){
          $(listItems[i].querySelector('.site-title')).addClass('active');
          $(listItems[i].querySelector('.site-button-wrap')).addClass('active');
        }
      }
    }else{
      leftMove = 0;
      $(listWrap).removeClass('sticky').css({top: 'auto'});
      $(listWrap.querySelector('ul')).css({transform: 'translate(-'+(leftMove)+'px, 0)'});
    }
  });
});

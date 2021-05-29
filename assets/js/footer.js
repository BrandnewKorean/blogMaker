$(function(){
	cookiedata = document.cookie;

	console.log(cookiedata);

  if(cookiedata.indexOf("setting=dark") < 0){
    $('body').removeClass('dark');
    $('body').addClass('light');
  }else{
    $('body').removeClass('light');
    $('body').addClass('dark');
  }

  if($('body').hasClass('light')) $('#change-mode').text('light');
  else $('#change-mode').text('dark');

  $('#change-mode').click(function(){
    if($('body').hasClass('light')){
      $('body').removeClass('light');
      $('body').addClass('dark');
      setCookie('setting', 'dark', 7);
    }else{
      $('body').removeClass('dark');
      $('body').addClass('light');
      setCookie('setting', 'light', 7);
    }

    if($('body').hasClass('light')) $('#change-mode').text('light');
    else $('#change-mode').text('dark');
  });

  $('#change-mode').hover(function(){
    if($('body').hasClass('light')) $('#change-mode').text('dark');
    else $('#change-mode').text('light');
  }, function(){
    if($('body').hasClass('light')) $('#change-mode').text('light');
    else $('#change-mode').text('dark');
  });
});

function setCookie(name, value, expiredays){
	removeCookie();
	var today = new Date();
	today.setDate(today.getDate() + expiredays);
	document.cookie = name+'='+escape(value)+'; expires='+today.toGMTString()+'; url='+(window.location.protocol+'//'+window.location.host);
}

function removeCookie(name, value){
  var today = new Date();
	today.setDate(today.getDate() - 1);
	document.cookie = name+'='+escape(value)+'; expires='+today.toGMTString()+'; url='+(window.location.protocol+'//'+window.location.host);
}

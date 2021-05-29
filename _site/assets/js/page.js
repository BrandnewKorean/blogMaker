$(function(){
  var speed = 1000;

  $('#page-title').animate({
    opacity: 1
  },speed, function(){
    $('#page-description').animate({
      opacity: 1
    },speed)
  });
});

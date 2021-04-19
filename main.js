$(function(){

  $('.header-right').click(function(){
    $('.hamburger-menu').show(1000);
  });
  
  $('.close').click(function(){
    $('.hamburger-menu').fadeOut(1000);
  });
});
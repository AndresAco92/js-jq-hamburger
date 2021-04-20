$(function(){
  //Esercizio corretto 

  $('.header-right > a').click(function(){
    $('.hamburger-menu').addClass('active');
  });

  
  $('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
  });

  /*
  $('.header-right').click(function(){
    $('.hamburger-menu').show(1000);
  });
  
  $('.close').click(function(){
    $('.hamburger-menu').fadeOut(1000);
  });*/
});
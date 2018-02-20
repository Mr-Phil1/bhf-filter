$(document).ready(function(){

  $('.filter').on('change',function(){
    var select = $(this).val();

    $('.alle').removeClass('fadein').addClass('fadeout');

    setTimeout(function(){
      $('.alle').each(function(){
        if(!($(this).hasClass(select))) {
          $(this).addClass('none');
        }
      });
    },510);

    setTimeout(function(){
      $('.alle').each(function(){
        if($(this).hasClass(select)) {
          $(this).removeClass('none');
        }
      });
    },520);

    setTimeout(function(){
      $('.alle').each(function(){
        if($(this).hasClass(select)) {
          $(this).removeClass('fadeout').addClass('fadein');
        }
      });
    },550);

  });

// ###########################################################
// TUTORIAL DIRECTION AWARE HOVER
// ###########################################################

  $('.alle').stop().mouseenter(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var edge = directon(x,y,$(this).width(),$(this).height());

    switch(edge){
      case "left":
        $(this).children('.overlay').css({
          'left':'-100%',
          'top': '0'});
        $(this).children('.overlay').stop().animate({left: '0'}, 250);
        break;
      case "right":
        $(this).children('.overlay').css({
          'left':'100%',
          'top': '0'});
        $(this).children('.overlay').stop().animate({left: '0'}, 250);
        break;
      case "top":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '-100%'});
        $(this).children('.overlay').stop().animate({top: '0'}, 250);
        break;
      case "bottom":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '100%'});
        $(this).children('.overlay').stop().animate({top: '0'}, 250);
        break;
    }

  });

  $('.alle').stop().mouseleave(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var edge = directon(x,y,$(this).width(),$(this).height());

    switch(edge){
      case "left":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '0'});
        $(this).children('.overlay').stop().animate({left: '-100%'}, 250);
        break;
      case "right":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '0'});
        $(this).children('.overlay').stop().animate({left: '100%'}, 250);
        break;
      case "top":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '0'});
        $(this).children('.overlay').stop().animate({top: '-100%'}, 250);
        break;
      case "bottom":
        $(this).children('.overlay').css({
          'left':'0',
          'top': '0'});
        $(this).children('.overlay').stop().animate({top: '100%'}, 250);
        break;
    }

  });

  function directon(x,y,w,h) {

    var top = berechnung(x,y,w/2,0);
    var bottom = berechnung(x,y,w/2,h);
    var left = berechnung(x,y,0,h/2);
    var right = berechnung(x,y,w,h/2);
    var min = Math.min(top,bottom,left,right);

    switch(min) {
      case left:
        return "left";
      case right:
        return "right";
      case top:
        return "top";
      case bottom:
        return "bottom";
    }

  }

  function berechnung(x,y,x2,y2) {
    var xDiff = x - x2;
    var yDiff = y - y2;
    return ((xDiff * xDiff) + (yDiff * yDiff));
  }

});

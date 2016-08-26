$(document).ready(function() {
    /*    preloader    */ 
  setTimeout(function(){ 
      $('#preloader').addClass('preloader');
       setTimeout(function(){
           $('#preloader').css('display','none');
       },3000); 
  },1000); 
    /*Fullpage initialization*/
    $('#fullpage').fullpage();
    /*move buttons methods*/
//adding the action to the button
    $(document).on('click', '.about_me', function(){
  $.fn.fullpage.moveSectionDown();});
    $(document).on('click', '.scroll_down', function(){
  $.fn.fullpage.moveSectionDown();});
    $(document).on('click', '.scroll_up', function(){
  $.fn.fullpage.moveSectionUp();});
});
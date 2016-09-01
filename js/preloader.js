$(document).ready(function() {
    /*    preloader    */ 
  setTimeout(function(){ 
      $('#preloader').addClass('preloader');
       setTimeout(function(){
           $('#preloader').css('display','none');
           $('.main-title').css({animation:'fadeIn 3s ease-in-out',
                                opacity:'1'});
           $('.see_more').css({animation:'slideInUp 2s ease-in-out',
                                visibility:'visible'});
       },3000); 
  },1000); 
    /*Fullpage initialization*/
    $('#fullpage').fullpage();
    /*move buttons methods*/
//adding the action to the button
    $(document).on('click', '.see_more', function(){
  $.fn.fullpage.moveSectionDown();});
    $(document).on('click', '.scroll_down', function(){
  $.fn.fullpage.moveSectionDown();});
    $(document).on('click', '.scroll_up', function(){
  $.fn.fullpage.moveSectionUp();});
});
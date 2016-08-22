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
});
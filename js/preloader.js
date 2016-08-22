$(document).ready(function() {
    /*    preloader    */
    $('#preloader').addClass('preloader');
  setTimeout(function(){
      $('#preloader').css('display','none');
  },3000); 
    /*Fullpage initialization*/
    $('#fullpage').fullpage();
});
window.onload = function(){
  var preloader = document.getElementById("preloader")
  preloader.classList.add("preloader");
  setTimeout(function(){
      preloader.style.display = "none";
  },3000);
};

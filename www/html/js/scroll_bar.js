window.onscroll = function() {myFunction()};

function myFunction() {
  window.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  window.height = document.getElementsByClassName("content")[0].scrollHeight - document.getElementsByClassName("content")[0].clientHeight;
  window.scrolled = (winScroll / height) * 100;
  //console.log("scroll height", document.documentElement.scrollHeight, "ch", document.documentElement.clientHeight);
  //console.log(winScroll, height, scrolled);
  document.getElementById("myBar").style.width = winScroll + "%";
}

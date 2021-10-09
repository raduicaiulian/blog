document.addEventListener(
  "scroll",myFunction);
function myFunction() {

  var scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
  var scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
  scrollPercent = scrollTop / scrollBottom * 100 + "%";
  //console.log(scrollPercent);
  document.getElementById("myBar").style.width = scrollPercent;
}

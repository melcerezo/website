window.addEventListener('load',registerEvents,false);

function registerEvents(e) {
  var links = document.getElementsByClassName("link");
  for(var i = 0; i <links.length; i++){
    links[i].addEventListener('mouseover',function(){
      this.style.backgroundColor = "#dadada";
    }, false);
    links[i].addEventListener('mouseout',function() {
      this.style.backgroundColor = "#FFFFFF";
    }, false);
  }
}

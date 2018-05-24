// wait for page to load before registering events
window.addEventListener('load',registerEvents,false);

// register event listeners
function registerEvents(e) {

  // register when mouse is over nav links to change background color
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

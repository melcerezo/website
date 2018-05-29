// wait for page to load before registering events
window.addEventListener('load',registerEvents,false);

// register event listeners
function registerEvents(e) {

  // register when mouse is over nav links to change background color
  var links = document.getElementsByClassName("anc-link");
  for(var i = 0; i <links.length; i++){
    links[i].addEventListener('click',function(){
      var thisTo = this.getAttribute('data-anchorId');
      scrollTo(document.documentElement, document.getElementById(thisTo).offsetTop, 600)
    }, false);
  }
}


function scrollTo(element, to, duration){
  if(duration <= 0){
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if(element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

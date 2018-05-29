// wait for page to load before registering events
window.addEventListener('load',registerEvents,false);


// register event listeners
function registerEvents(e) {

  document.getElementById("burger").addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }, false);

  // register click event with each link in navbar
  var links = document.getElementsByClassName("anc-link");
  for(var i = 0; i <links.length; i++){
    links[i].addEventListener('click',function(){
      var thisTo = this.getAttribute('data-anchorId');
      document.getElementById(thisTo).scrollIntoView({behavior: 'smooth'});
    }, false);
  }

}
